// Zapis zgłoszenia z formularza do Precimet CRM (Twenty, REST API).
// Tworzy/odnajduje Firmę i Osobę, zakłada Zapytanie OEM i podpina notatkę
// z treścią wiadomości. Wywoływane w tle (ctx.waitUntil) już po wysłaniu maila,
// więc awaria CRM nigdy nie blokuje formularza — kończy się tylko logiem.

// Domeny skrzynek prywatnych — z nich nie zgadujemy firmy po domenie.
const FREE_EMAIL_DOMAINS = new Set([
  'gmail.com', 'googlemail.com', 'outlook.com', 'hotmail.com', 'live.com', 'msn.com',
  'yahoo.com', 'icloud.com', 'me.com', 'proton.me', 'protonmail.com', 'gmx.com',
  'gmx.de', 'gmx.net', 'web.de', 't-online.de', 'aol.com',
  'wp.pl', 'o2.pl', 'onet.pl', 'onet.eu', 'op.pl', 'interia.pl', 'interia.eu',
  'poczta.fm', 'tlen.pl', 'gazeta.pl', 'vp.pl', 'int.pl',
]);

async function twenty(env, method, path, body) {
  const res = await fetch(`${env.TWENTY_API_URL.replace(/\/$/, '')}/rest/${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${env.TWENTY_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) {
    const detail = await res.text().catch(() => '');
    throw new Error(`Twenty ${method} /rest/${path}: ${res.status} ${detail}`);
  }
  // Twenty opakowuje wynik w { data: { <people|createPerson|...>: ... } }.
  const json = await res.json();
  return Object.values(json.data ?? {})[0];
}

async function findOne(env, objectPlural, filter) {
  const records = await twenty(
    env,
    'GET',
    `${objectPlural}?limit=1&filter=${encodeURIComponent(filter)}`
  );
  return Array.isArray(records) && records.length ? records[0] : null;
}

// Cudzysłowy w wartości filtra psułyby składnię Twenty — usuwamy je.
const q = (value) => `"${String(value).replaceAll('"', '')}"`;

function splitName(fullName) {
  const parts = String(fullName).trim().split(/\s+/);
  return { firstName: parts[0] ?? '', lastName: parts.slice(1).join(' ') };
}

async function findOrCreateCompany(env, { companyName, emailDomain }) {
  const businessDomain = emailDomain && !FREE_EMAIL_DOMAINS.has(emailDomain) ? emailDomain : null;

  let company = null;
  if (businessDomain) {
    company = await findOne(env, 'companies', `domainName.primaryLinkUrl[ilike]:${q(`%${businessDomain}%`)}`);
  }
  if (!company && companyName) {
    company = await findOne(env, 'companies', `name[ilike]:${q(companyName)}`);
  }

  if (company) {
    // Firma znana np. z linii ogrodniczej — dopisujemy jej segment OEM.
    const segments = company.segmentBiznesowy ?? [];
    if (!segments.includes('KOOPERACJA_OEM')) {
      await twenty(env, 'PATCH', `companies/${company.id}`, {
        segmentBiznesowy: [...segments, 'KOOPERACJA_OEM'],
      });
    }
    return company;
  }

  if (!companyName && !businessDomain) return null;

  return twenty(env, 'POST', 'companies', {
    name: companyName || businessDomain,
    domainName: businessDomain ? { primaryLinkUrl: `https://${businessDomain}` } : undefined,
    typFirmy: 'ZLECENIODAWCA_OEM',
    segmentBiznesowy: ['KOOPERACJA_OEM'],
    statusRelacji: 'POTENCJALNY_KLIENT',
  });
}

async function findOrCreatePerson(env, { name, email, phone, companyId }) {
  const existing = await findOne(env, 'people', `emails.primaryEmail[eq]:${q(email)}`);
  if (existing) {
    if (!existing.companyId && companyId) {
      await twenty(env, 'PATCH', `people/${existing.id}`, { companyId });
    }
    return existing;
  }

  return twenty(env, 'POST', 'people', {
    name: splitName(name),
    emails: { primaryEmail: email },
    phones: phone ? { primaryPhoneNumber: phone } : undefined,
    companyId: companyId ?? undefined,
  });
}

function buildNoteMarkdown({ name, company, email, phone, message, files, locale }) {
  const attachments = files.length
    ? files.map((f) => `- ${f.name}`).join('\n') +
      '\n\n_Pliki są w mailu wysłanym na produkcja@precimet.pl._'
    : 'Brak załączników';

  return [
    `**Imię i nazwisko:** ${name}`,
    `**Firma:** ${company || '—'}`,
    `**E-mail:** ${email}`,
    `**Telefon:** ${phone || '—'}`,
    `**Wersja językowa formularza:** ${locale.toUpperCase()}`,
    '',
    '## Wiadomość',
    '',
    message,
    '',
    `## Załączniki (${files.length})`,
    '',
    attachments,
  ].join('\n');
}

export async function saveSubmissionToCrm(env, submission) {
  if (!env.TWENTY_API_URL || !env.TWENTY_API_KEY) {
    console.warn('CRM: brak TWENTY_API_URL lub TWENTY_API_KEY — pomijam zapis.');
    return;
  }

  const { name, company, email, phone, message, locale } = submission;
  const emailDomain = String(email).split('@')[1]?.toLowerCase();

  const companyRecord = await findOrCreateCompany(env, { companyName: company, emailDomain });
  const person = await findOrCreatePerson(env, {
    name,
    email,
    phone,
    companyId: companyRecord?.id,
  });

  // Nazwę doprecyzuje technolog po analizie — na start: kto + początek wiadomości.
  const snippet = String(message).replace(/\s+/g, ' ').trim().slice(0, 60);
  const zapytanie = await twenty(env, 'POST', 'zapytaniaOem', {
    name: `${company || name}: ${snippet}${message.length > 60 ? '…' : ''}`,
    etapRfq: 'NOWE_ZAPYTANIE',
    firmaOemId: companyRecord?.id,
    osobaKontaktowaId: person.id,
    opiekunId: env.CRM_OWNER_ID || undefined,
  });

  const note = await twenty(env, 'POST', 'notes', {
    title: `Formularz oem.precimet.pl (${locale.toUpperCase()})`,
    bodyV2: { markdown: buildNoteMarkdown(submission) },
  });

  const targets = [
    { targetZapytanieOemId: zapytanie.id },
    { targetPersonId: person.id },
    companyRecord && { targetCompanyId: companyRecord.id },
  ].filter(Boolean);

  for (const target of targets) {
    await twenty(env, 'POST', 'noteTargets', { noteId: note.id, ...target });
  }

  console.log(`CRM: zapisano zapytanie ${zapytanie.id} (osoba ${person.id}, firma ${companyRecord?.id ?? '—'})`);
}
