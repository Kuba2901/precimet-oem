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

## Zapis zgłoszeń do Precimet CRM (Twenty)

Po wysłaniu maila Worker zapisuje zgłoszenie w CRM (`https://crm.precimet.pl`), w tle
(`ctx.waitUntil`) — awaria CRM nie blokuje formularza ani maila, tylko trafia do logów
(Cloudflare → Workers → `precimet-contact-form` → Logs).

Każde zgłoszenie tworzy:

- **Firmę** — szukaną po domenie maila (pomijamy gmail/wp/onet itp.), potem po nazwie;
  nowa dostaje `ZLECENIODAWCA_OEM` + segment `KOOPERACJA_OEM`. Istniejącej dopisujemy
  segment `KOOPERACJA_OEM`, jeśli go nie ma.
- **Osobę** — szukaną po e-mailu; nowa jest przypinana do firmy.
- **Zapytanie OEM** — etap „Nowe zapytanie”, opiekun z `CRM_OWNER_ID` (Katarzyna Nenczak).
- **Notatkę** z danymi kontaktowymi, treścią i listą załączników — podpiętą pod zapytanie,
  osobę i firmę. Same pliki zostają w mailu.

Konfiguracja: `TWENTY_API_URL` i `CRM_OWNER_ID` w `wrangler.toml`, klucz API jako sekret:

```bash
npx wrangler secret put TWENTY_API_KEY
# klucz z CRM: Settings -> APIs & Webhooks -> Create API key
```

Bez `TWENTY_API_KEY` Worker działa jak wcześniej (tylko mail).
