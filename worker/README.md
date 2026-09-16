# Endpoint formularza kontaktowego (Cloudflare Worker + Resend)

Zastępuje FormSubmit/Web3Forms własnym, darmowym endpointem, żeby maile z formularza
`/contact` zawierały prawdziwe załączniki plików.

## 1. Zweryfikuj domenę w Resend

1. W panelu Resend → **Domains** → **Add Domain** → wpisz `mail.oem.precimet.pl`
   (subdomena `oem.precimet.pl`, nie głównej domeny `precimet.pl` — ta ma pocztę na
   Microsoft 365 i nie wolno tam ruszać SPF).
2. Resend pokaże rekordy DNS (zwykle: 1x MX, 2-3x TXT dla DKIM/SPF, opcjonalnie DMARC).
3. Dodaj te rekordy w panelu DNS **cyberfolks.pl** (tam gdzie zarządzana jest strefa
   `oem.precimet.pl` — to ten sam panel co hosting FTP strony).
4. Poczekaj na weryfikację w Resend (zwykle kilkanaście minut, czasem do kilku godzin).

## 2. Zainstaluj zależności i zaloguj Wrangler

```bash
cd worker
npm install
npx wrangler login
```

## 3. Ustaw sekret z kluczem API Resend

```bash
npx wrangler secret put RESEND_API_KEY
# wklej klucz z panelu Resend (Settings -> API Keys)
```

## 4. Sprawdź `wrangler.toml`

`TO_EMAIL` i `FROM_EMAIL` są już ustawione na `produkcja@precimet.pl` i
`formularz@mail.oem.precimet.pl` — zmień, jeśli potrzeba.

## 5. Wdróż

```bash
npx wrangler deploy
```

Wrangler wypisze URL w stylu:
`https://precimet-contact-form.<twoja-subdomena>.workers.dev`

## 6. Podepnij URL w formularzu

W `src/components/Contact.astro` podmień:

```js
const CONTACT_WORKER_URL = 'https://precimet-contact-form.YOUR-SUBDOMAIN.workers.dev';
```

na rzeczywisty adres z kroku 5, zbuduj i wdróż stronę jak zwykle.

## Test lokalny (opcjonalnie)

```bash
cd worker
npx wrangler dev
```

Worker wystartuje lokalnie — możesz tymczasowo podmienić `CONTACT_WORKER_URL` na
`http://127.0.0.1:8787` do testów przed wdrożeniem produkcyjnym.
