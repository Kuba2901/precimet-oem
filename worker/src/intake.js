// Przekazanie zgłoszenia do Ofertomatu (Faza 46 w repo forgeflow).
//
// Ofertomat otwiera z rysunków roboczą wycenę do sprawdzenia przez technologa,
// a gdy w zgłoszeniu nie ma czego wyceniać — tylko je odnotowuje. Wywoływane
// w `ctx.waitUntil`, PO wysłaniu maila: awaria Ofertomatu nigdy nie blokuje
// formularza. Bez `INTAKE_URL` albo `INTAKE_HMAC_SECRET` nic się nie dzieje.
//
// Podpis: HMAC-SHA256 z `"{t}." + treść żądania`, nagłówek
// `X-Intake-Signature: t=<unix>,v1=<hex>` — ten sam sekret co
// `INTAKE_HMAC_SECRET` w Ofertomacie. Znacznik czasu w podpisie sprawia, że
// przechwycone żądanie po 5 minutach jest bezużyteczne.

export async function sign(secret, timestamp, body) {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const prefix = new TextEncoder().encode(`${timestamp}.`);
  const data = new Uint8Array(prefix.length + body.byteLength);
  data.set(prefix, 0);
  data.set(new Uint8Array(body), prefix.length);
  const mac = await crypto.subtle.sign('HMAC', key, data);
  const hex = [...new Uint8Array(mac)].map((b) => b.toString(16).padStart(2, '0')).join('');
  return `t=${timestamp},v1=${hex}`;
}

export async function forwardToOfertomat(env, submission) {
  if (!env.INTAKE_URL || !env.INTAKE_HMAC_SECRET) {
    console.warn('Ofertomat: brak INTAKE_URL lub INTAKE_HMAC_SECRET — pomijam.');
    return;
  }
  const form = new FormData();
  const fields = {
    message_id: submission.messageId,
    subject: submission.subject,
    name: submission.name,
    company: submission.company,
    email: submission.email,
    phone: submission.phone,
    message: submission.message,
    locale: submission.locale,
    crm_zapytanie_id: submission.crmZapytanieId || '',
  };
  for (const [key, value] of Object.entries(fields)) form.append(key, String(value ?? ''));
  for (const file of submission.files) form.append('attachment', file, file.name || 'zalacznik');

  // Treść multipart dokładnie taka, jaka pójdzie — podpis jest po bajtach.
  const draft = new Request(env.INTAKE_URL, { method: 'POST', body: form });
  const body = await draft.arrayBuffer();
  const signature = await sign(env.INTAKE_HMAC_SECRET, Math.floor(Date.now() / 1000), body);

  const res = await fetch(env.INTAKE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': draft.headers.get('Content-Type'),
      'X-Intake-Signature': signature,
    },
    body,
  });
  if (!res.ok) {
    const detail = await res.text().catch(() => '');
    throw new Error(`Ofertomat odpowiedział ${res.status}: ${detail.slice(0, 300)}`);
  }
  console.log(`Ofertomat: przyjęto zgłoszenie ${await res.text()}`);
}
