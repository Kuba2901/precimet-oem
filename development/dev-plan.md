# Development plan — SEO, trust & conversion upgrades

Date: 2026-08-14
Status: implemented (2026-08-14)

## Scope

1. FAQs (homepage section + FAQPage JSON-LD)
2. Thank-you pages (per-locale, via JS redirect)
3. Meta descriptions
4. Meta titles
5. Social sharing image (branded 1200×630)
6. Maps + directions (OpenStreetMap embed)
7. Alt text
8. GA4 (`G-J0VQZ1SCZ9`)

## Decisions (from user)

- **GA4**: measurement ID `G-J0VQZ1SCZ9` (standard gtag snippet).
- **Social image**: generate a branded 1200×630 card from the logo/brand palette (render via Playwright screenshot → `public/og-image.png`).
- **Maps**: OpenStreetMap iframe embed + "Get directions" link out to Google Maps.
- **Thank-you**: switch the Contact form to Vanilla JS AJAX (fetch + FormData), redirect per locale on success. One Formspree form, no dashboard redirect change.
- **FAQ**: homepage section only, no nav change.

## Details

### 1. FAQs — homepage section

- New `src/components/Faq.astro`: `<details>/<summary>` accordion (no JS, accessible, keeps `.reveal` animation).
- Add `faq` block to `Dict` + all 3 locales in `src/i18n/ui.ts`: `{ eyebrow, title, items: { q, a }[] }`.
- Draft ~6 Q&As per language (materials, file formats, MOQ, lead times, ISO 9001, prototypes/small series, NDA) consistent with existing copy; user can refine later.
- Emit `FAQPage` JSON-LD inside the component.
- Insert `<Faq locale={locale} />` in `src/pages/index.astro`, `src/pages/en/index.astro`, `src/pages/de/index.astro` between `BlogPreview` and `Contact`.

### 2. Thank-you pages (per-locale, JS redirect)

- `src/components/Contact.astro`: keep static form (`action`/`method` = no-JS fallback), add `id="contact-form"`, inline `<script>`:
  - on submit: `e.preventDefault()` → `fetch(action, { method: 'POST', body: new FormData(form) })`
  - disable submit button while pending
  - success → `window.location.href = path(locale, '/dziekujemy')`
  - failure → inline error message + re-enable button
  - works with the file input (FormData). ~20 lines, no new dependency.
- New pages: `src/pages/dziekujemy.astro` (PL), `src/pages/en/thank-you.astro`, `src/pages/de/danke.astro` — small centered section: title, confirmation text, back-home CTA. Strings from new `thankYou` dict block (3 languages).
- Add `noindex` prop to `BaseLayout` → `<meta name="robots" content="noindex">`; set on thank-you pages.
- `astro.config.mjs`: add `filter` to `@astrojs/sitemap` excluding `/dziekujemy`, `/en/thank-you`, `/de/danke`.

### 3 & 4. Meta titles & descriptions

- `BaseLayout.astro:29` stale fallback `https://3d-laser.pl` → `https://oem.precimet.pl`.
- Privacy pages: add localized `seo.privacyDescription` to dict, pass as `description` prop.
- Add `twitter:title` / `twitter:description` / `twitter:image` (mirror OG tags).
- Add optional `ogType` prop; blog posts emit `og:type="article"`.

### 5. Social sharing image

- Create branded 1200×630 card as HTML source at repo root (e.g. `og-image.html`, NOT in `public/`): palette graphite `#1e2124`/`#2a2d31`, red `#e30613`, sand `#cfc896`; logo mark + "PRECIMET OEM Manufacturing" + tagline.
- Render via Playwright screenshot at exactly 1200×630 → `public/og-image.png`. Keep source for regeneration.
- `BaseLayout` default `ogImage` → `og-image.png`; add `og:image:width="1200"`, `og:image:height="630"`, `og:image:alt`.

### 6. Maps + directions

- Coordinates (Nominatim): lat `51.7854674`, lon `19.5891212` (ul. Pomorska 555, 92-735 Łódź).
- OSM embed in `Contact.astro` under the contact grid:
  `https://www.openstreetmap.org/export/embed.html?bbox=19.5861,51.7824,19.5921,51.7884&layer=mapnik&marker=51.78547,19.58912`
  with `loading="lazy"`, `title`, `referrerpolicy="no-referrer-when-downgrade"`, rounded + sand border styling.
- "Get directions" link: `https://www.google.com/maps/dir/?api=1&destination=51.7854674,19.5891212`, `target="_blank"`, localized label via `contact.map.directions` in `ui.ts`.

### 7. Alt text

- `BlogList.astro:35`, `BlogPreview.astro:44`, `BlogPostLayout.astro:42`: `alt=""` → `alt={post.data.title}`.
- Services/About/logos already have alt; hero is a decorative CSS background (no alt needed).

### 8. GA4

- New `src/lib/analytics.ts` exporting `GA4_ID = 'G-J0VQZ1SCZ9'`.
- `BaseLayout` head: gtag snippet via `is:inline` scripts (`gtag/js?id=${GA4_ID}` + inline `dataLayer`/`config`).
- Known gap (out of scope): no cookie-consent banner/CMP for EU visitors — follow-up.

## Files touched

New:
- `src/components/Faq.astro`
- `src/pages/dziekujemy.astro`
- `src/pages/en/thank-you.astro`
- `src/pages/de/danke.astro`
- `src/lib/analytics.ts`
- `public/og-image.png` (+ `og-image.html` source at repo root)

Edit:
- `src/i18n/ui.ts`
- `src/layouts/BaseLayout.astro`
- `src/layouts/BlogPostLayout.astro`
- `src/components/Contact.astro`
- `src/components/BlogList.astro`
- `src/components/BlogPreview.astro`
- `src/pages/index.astro`, `src/pages/en/index.astro`, `src/pages/de/index.astro`
- `astro.config.mjs`

## Verification

- `npm run astro check`
- `npm run build`
- Playwright pass: `/`, `/en/`, `/de` (FAQ accordion opens, map iframe loads, consent/phones intact); thank-you pages render + `noindex`; og/GA4 tags present in `<head>`; mobile viewport check for accordion + map.

## Tracking

| # | Item | Status |
|---|------|--------|
| 1 | FAQ dict (3 locales) + `Faq.astro` + FAQPage JSON-LD | done |
| 2 | Thank-you dict (3 locales) + 3 pages + Contact AJAX script | done |
| 3 | Sitemap filter (exclude thank-you pages) | done |
| 4 | BaseLayout meta fixes (site fallback, twitter tags, ogType, noindex, og image dims/alt) | done |
| 5 | Privacy-page descriptions (dict + props) | done |
| 6 | Branded og-image (source + Playwright render → `public/og-image.png`) | done |
| 7 | OSM map embed + directions link in Contact | done |
| 8 | Alt text for blog covers (3 files) | done |
| 9 | GA4 snippet (`src/lib/analytics.ts` + BaseLayout) | done |
| 10 | `npm run astro check` + `npm run build` | done |
| 11 | Playwright verification (3 locales + thank-you + head tags + mobile) | done |
| 12 | Cookie consent banner (blocks GA4 until accept, localStorage, 6-month expiry) | done |
