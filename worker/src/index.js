const REQUIRED_FIELDS = ['name', 'email', 'message'];

function errorPage(message) {
  return new Response(
    `<!doctype html><html lang="pl"><meta charset="utf-8"><title>Błąd wysyłki</title>
    <body style="font-family: sans-serif; max-width: 40rem; margin: 4rem auto; padding: 0 1rem;">
      <h1>Nie udało się wysłać formularza</h1>
      <p>${message}</p>
      <p><a href="javascript:history.back()">&larr; Wróć i spróbuj ponownie</a></p>
    </body></html>`,
    { status: 400, headers: { 'content-type': 'text/html; charset=utf-8' } }
  );
}

function arrayBufferToBase64(buffer) {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  const chunkSize = 0x8000;
  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunkSize));
  }
  return btoa(binary);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

// Paleta i fonty wzięte z src/styles/global.css (--c-*, --font-*), żeby mail
// wyglądał spójnie ze stroną — czcionki mają fallback na web-safe, bo Google
// Fonts nie ładują się niezawodnie w klientach pocztowych.
const BRAND = {
  graphite900: '#1e2124',
  graphite800: '#2a2d31',
  red500: '#e30613',
  sand500: '#cfc896',
  steel300: '#9a9da1',
  bg: '#f7f7f5',
  surface: '#ffffff',
  line: '#e4e3df',
  text: '#26292c',
  textMuted: '#5c6065',
  textInverse: '#f4f4f2',
  fontDisplay: `'Arial Narrow', Arial, sans-serif`,
  fontBody: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, Helvetica, sans-serif`,
  fontMono: `'Courier New', Courier, monospace`,
  logoUrl: 'https://oem.precimet.pl/logo.png',
};

function buildEmailHtml({ name, company, email, phone, message, files }) {
  const row = (label, value) => `
    <tr>
      <td style="padding: 10px 16px; border-bottom: 1px solid ${BRAND.line}; color: ${BRAND.textMuted}; font-family: ${BRAND.fontMono}; font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em; white-space: nowrap; vertical-align: top;">${label}</td>
      <td style="padding: 10px 16px; border-bottom: 1px solid ${BRAND.line}; color: ${BRAND.text}; font-family: ${BRAND.fontBody}; font-size: 14px;">${value}</td>
    </tr>`;

  const attachmentsList = files.length
    ? `<ul style="margin: 8px 0 0; padding-left: 18px; color: ${BRAND.text}; font-family: ${BRAND.fontBody}; font-size: 14px;">
        ${files.map((f) => `<li>${escapeHtml(f.name)} <span style="color:${BRAND.textMuted};">(${formatBytes(f.size)})</span></li>`).join('')}
      </ul>`
    : `<p style="margin: 8px 0 0; color: ${BRAND.textMuted}; font-family: ${BRAND.fontBody}; font-size: 14px;">Brak załączników</p>`;

  return `
  <div style="font-family: ${BRAND.fontBody}; background: ${BRAND.bg}; padding: 24px;">
    <div style="max-width: 560px; margin: 0 auto; background: ${BRAND.surface}; border-radius: 4px; overflow: hidden; border: 1px solid ${BRAND.line};">
      <div style="background: ${BRAND.graphite900}; padding: 20px 24px;">
        <table role="presentation" cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding-right: 12px;">
              <img src="${BRAND.logoUrl}" width="40" height="40" alt="Precimet" style="display:block; border-radius:50%;" />
            </td>
            <td>
              <div style="font-family: ${BRAND.fontDisplay}; font-weight: 700; font-size: 18px; letter-spacing: 0.06em; color: ${BRAND.textInverse}; text-transform: uppercase;">Precimet</div>
              <div style="font-family: ${BRAND.fontMono}; font-size: 10px; letter-spacing: 0.14em; color: ${BRAND.sand500}; text-transform: uppercase;">OEM Manufacturing</div>
            </td>
          </tr>
        </table>
      </div>
      <div style="height: 3px; background: ${BRAND.red500};"></div>
      <div style="padding: 16px 24px 0;">
        <h1 style="margin: 0; color: ${BRAND.text}; font-family: ${BRAND.fontDisplay}; font-weight: 700; font-size: 20px; letter-spacing: 0.02em; text-transform: uppercase;">Nowe zapytanie OEM</h1>
      </div>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse; margin-top: 12px;">
        ${row('Imię i nazwisko', escapeHtml(name))}
        ${row('Firma', escapeHtml(company))}
        ${row('E-mail', `<a href="mailto:${escapeHtml(email)}" style="color:${BRAND.text};">${escapeHtml(email)}</a>`)}
        ${row('Telefon', escapeHtml(phone))}
      </table>
      <div style="padding: 16px 24px;">
        <div style="color: ${BRAND.textMuted}; font-family: ${BRAND.fontMono}; font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 6px;">Wiadomość</div>
        <div style="color: ${BRAND.text}; font-family: ${BRAND.fontBody}; font-size: 14px; line-height: 1.5; white-space: pre-wrap;">${escapeHtml(message)}</div>
      </div>
      <div style="padding: 0 24px 20px;">
        <div style="color: ${BRAND.textMuted}; font-family: ${BRAND.fontMono}; font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em;">Załączniki (${files.length})</div>
        ${attachmentsList}
      </div>
      <div style="background: ${BRAND.graphite900}; padding: 12px 24px;">
        <p style="margin: 0; color: ${BRAND.steel300}; font-family: ${BRAND.fontMono}; font-size: 10px; text-transform: uppercase; letter-spacing: 0.06em;">Formularz kontaktowy · oem.precimet.pl</p>
      </div>
    </div>
  </div>`;
}

export default {
  async fetch(request, env) {
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    let formData;
    try {
      formData = await request.formData();
    } catch {
      return errorPage('Nieprawidłowe dane formularza.');
    }

    // Honeypot — boty wypełniają wszystkie pola, w tym ukryty checkbox.
    // Udajemy sukces, żeby nie zdradzać, że wykryliśmy spam.
    if (formData.get('botcheck')) {
      const redirect = formData.get('redirect');
      return Response.redirect(redirect || 'https://oem.precimet.pl/', 303);
    }

    for (const field of REQUIRED_FIELDS) {
      const value = formData.get(field);
      if (!value || String(value).trim() === '') {
        return errorPage(`Brakuje wymaganego pola: ${escapeHtml(field)}.`);
      }
    }

    if (!formData.get('consent')) {
      return errorPage('Wymagana jest zgoda na przetwarzanie danych.');
    }

    const files = formData
      .getAll('attachment')
      .filter((f) => f && typeof f === 'object' && 'arrayBuffer' in f && f.size > 0);

    const maxBytes = Number(env.MAX_ATTACHMENT_BYTES || 15000000);
    const maxTotalBytes = Number(env.MAX_TOTAL_ATTACHMENT_BYTES || 25000000);

    const oversized = files.find((f) => f.size > maxBytes);
    if (oversized) {
      return errorPage(
        `Plik "${escapeHtml(oversized.name)}" jest za duży (limit ${(maxBytes / 1_000_000).toFixed(0)} MB na plik).`
      );
    }

    const totalBytes = files.reduce((sum, f) => sum + f.size, 0);
    if (totalBytes > maxTotalBytes) {
      return errorPage(
        `Łączny rozmiar załączników przekracza limit ${(maxTotalBytes / 1_000_000).toFixed(0)} MB. Wyślij mniej plików lub podziel je na kilka zgłoszeń.`
      );
    }

    const attachments = await Promise.all(
      files.map(async (f) => ({
        filename: f.name || 'zalacznik',
        content: arrayBufferToBase64(await f.arrayBuffer()),
      }))
    );

    const name = formData.get('name');
    const company = formData.get('company') || '—';
    const email = formData.get('email');
    const phone = formData.get('phone') || '—';
    const message = formData.get('message');
    const subject = formData.get('subject') || `Nowe zapytanie OEM - Precimet (od ${name})`;

    const html = buildEmailHtml({ name, company, email, phone, message, files });

    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: env.FROM_EMAIL,
        to: [env.TO_EMAIL],
        reply_to: String(email),
        subject: String(subject),
        html,
        attachments: attachments.length ? attachments : undefined,
      }),
    });

    if (!resendRes.ok) {
      const detail = await resendRes.text().catch(() => '');
      console.error('Resend API error:', resendRes.status, detail);
      return errorPage('Usługa wysyłki maili jest chwilowo niedostępna. Spróbuj ponownie za chwilę.');
    }

    const redirect = formData.get('redirect');
    return Response.redirect(redirect || 'https://oem.precimet.pl/', 303);
  },
};
