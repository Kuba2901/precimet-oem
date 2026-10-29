# SEO Phase 4 — data-driven follow-up

Date: 2026-10-29
Status: not started (4.0 items shipped)
Source: claude-seo v2.5.0 audit of `https://oem.precimet.pl` + the `dist/` build, PageSpeed Insights (Lighthouse 13.5), Google Search Console (`sc-domain:oem.precimet.pl`, 90 days to 2026-10-26) and GA4 (`properties/549934479`, 90 days to 2026-10-28)
Builds on: `development/seo-tasks.md` (Phases 1–2 done, Phase 3 not started). Phase 3 still describes the target architecture; this phase orders that work by real search data and adds what the new audit found.

Verification for every code task: `npm run astro check && npm run build`. There is no test suite or linter. Pushing to `main` deploys to production.

---

## Where the site stands

The technical foundation is sound: every indexable page has a unique title and description, a self-canonical and complete reciprocal hreflang (incl. `x-default`); http/www/no-slash URLs 301 to one form; real 404s; content renders without JS; LocalBusiness, BlogPosting and BreadcrumbList schema. Desktop Lighthouse is 98 and SEO is 100.

The problem is reach, not hygiene:

| Source | Numbers |
|---|---|
| GSC, 90 days | 67 clicks, 2,063 impressions, CTR 3.25%, avg position 19.8; 87% of impressions from Poland, then CH and DE |
| GA4 organic, 90 days | 53 sessions / 46 users; 36 land on `/`, none on blog posts. Data starts 2026-09-06 and the cookie banner gates GA4, so expect undercounting vs GSC |
| PageSpeed mobile | Performance 79 — FCP 3.3 s, LCP 3.9 s, CLS 0. No CrUX field data (too little traffic) |

Almost every non-brand click opportunity is a service query that only the homepage can answer:

| Topic | Impressions | Avg position | Top queries |
|---|---|---|---|
| Laser cutting, Łódź | 508 (42 queries) | 21–39 | cięcie blach łódź, cięcie laserem łódź, laserowe cięcie blach łódź, cięcie laserowe łódź, wycinanie laserowe łódź |
| Sheet bending (blog) | 235 (34 queries) | 6–33 | **tabela gięcia blach** (69, pos 19), promień gięcia blachy, minimalny promień gięcia, jak giąć aluminium (pos 8) |
| Brand | 134 | 1.4 | precimet |
| Quality control (blog) | 128 (24 queries) | 11–47 | kontrola wymiarowa wyrobów, kontrola jakości w produkcji, Qualitätskontrolle Fertigung |
| OEM / contract (DE) | 73 | 11 | **fertigungspartner für oem** (63, pos 11, Switzerland) |
| CNC | 30 | 12–75 | precyzyjna obróbka metali łódź, obróbka kontraktowa cnc |

Zero clicks on everything except the brand, because positions 20+ get almost none.

---

## 4.0 Shipped 2026-10-29

- [x] Blog `og:image` was a relative path, so LinkedIn/Facebook previews broke. `BaseLayout.astro` now resolves it against the site URL and only states 1200×630 for the default image (`3f1953a`).
- [x] Blog, PL blog-index and PL contact meta descriptions trimmed to ≤155 chars (`3f1953a`).
- [x] 301s for the deleted steel-vs-aluminium posts (`/blog/stal-nierdzewna-vs-aluminium`, `/en/blog/stainless-vs-aluminium`, `/de/blog/stahl-vs-aluminium`) to each locale's blog index, in `public/.htaccess`. They still drew impressions while returning 404 (`6795660`, verified live).
- [x] Measurement connected (Phase 3.7): Search Console + GA4 + PageSpeed/CrUX via claude-seo (local-scope plugin; GCP project `precimet-seo`; credentials in `~/.config/claude-seo/`). In a new Claude Code session: `/seo google gsc`, `/seo google ga4`, `/seo google pagespeed <url>`, `/seo audit https://oem.precimet.pl`.

---

## 4.1 Quick wins (under ~2h each)

### 4.1.1 Search Console housekeeping — no code

Google last crawled most pages around 2026-08-16, **before** the trailing-slash change. Its selected canonicals are still the no-slash URLs, the slash URLs show as "Alternate page with proper canonical tag", and `/about/`, `/contact/` and `/de/contact/` are "URL is unknown to Google". The 301s will fix this on recrawl; these steps speed it up.

- [ ] Submit `https://oem.precimet.pl/sitemap-index.xml`. Only `sitemap-0.xml` (submitted 2026-09-14) is registered.
- [ ] URL Inspection → *Request indexing* for `/`, `/en/`, `/de/`, `/about/`, `/contact/`, `/de/contact/` (and each new 4.2 page as it ships).
- [ ] Bing Webmaster Tools: import the site from GSC and submit the sitemap.
- [ ] Re-check in ~2 weeks: `/seo google inspect-batch` on the sitemap URLs should show `PASS` with slash canonicals.

### 4.1.2 Unblock AI crawlers at the host — support ticket, no code

cyberfolks' ModSecurity returns **406 "Połączenie zablokowane"** to ClaudeBot / Claude-SearchBot / Claude-User, and **429** to GPTBot and `facebookexternalhit`. `robots.txt` invites all of them. Googlebot and Bingbot get 200, so Google ranking is unaffected; AI answers and Facebook/WhatsApp/Messenger link previews are.

- [ ] Ask cyberfolks support to whitelist these user agents for `oem.precimet.pl` (or disable the matching ModSecurity rule for the domain).
- [ ] Verify:
  ```bash
  curl -s -o /dev/null -w "%{http_code}\n" -A "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; ClaudeBot/1.0; +claudebot@anthropic.com)" https://oem.precimet.pl/
  ```
  should print `200`; repeat with `GPTBot/1.2` and `facebookexternalhit/1.1`.

### 4.1.3 Remove render-blocking Google Fonts — biggest mobile speed win

- [ ] **File:** `src/layouts/BaseLayout.astro:131-135`. Three families (Barlow Condensed 500/600/700, IBM Plex Mono 400/500, Inter 400/500/600) load as a render-blocking stylesheet from `fonts.googleapis.com`. Lighthouse estimates **~2.8 s** saving on mobile FCP/LCP.
- [ ] Self-host with `@fontsource/*` (or local `woff2` in `public/fonts/` + `@font-face` in `global.css`), `font-display: swap`, preload only the hero heading weight. Drop weights nothing uses.
- [ ] This also removes a third-party request to Google from every page view, which simplifies the privacy policy.

### 4.1.4 Make the LCP image discoverable

- [ ] **File:** `src/components/Hero.astro:16`. The hero is a CSS `background-image` (`/hero.webp`), so the browser only finds it after CSS loads (Lighthouse: "LCP request discovery" failed).
- [ ] Add `<link rel="preload" as="image" href="/hero.webp" fetchpriority="high">` for the homepages (a `preloadImage` prop on `BaseLayout`), or render the hero as an `<img fetchpriority="high">` behind the overlay.
- [ ] Target after 4.1.3 + 4.1.4: mobile LCP < 2.5 s and Performance ≥ 90 in `/seo google pagespeed https://oem.precimet.pl/`.

### 4.1.5 Optimise service images

- [ ] **File:** `src/components/Services.astro:26` uses a plain `<img src={s.img}>`, so 12 JPGs ship unprocessed (256–780 KB each; `hall.jpg` is 780 KB). Lighthouse: ~405 KiB savings.
- [ ] Switch to `astro:assets` `<Image>` (as `About.astro` already does) with `widths`/`sizes` for the 600×400 slot and WebP/AVIF output. Keep `loading="lazy"` and the explicit dimensions (they protect CLS).

### 4.1.6 Accessibility fails flagged by Lighthouse

- [ ] "Form elements do not have associated labels" and "Visible text labels do not match accessible names", both on the homepage. Most likely candidates: the hidden `botcheck` checkbox in `src/components/Contact.astro:99`, the Turnstile widget, and the cookie-consent or language-switcher controls. Confirm the exact nodes in the PSI report details before fixing.

### 4.1.7 Sitemap polish (low)

- [ ] `astro.config.mjs` sitemap: blog posts have no `xhtml:link` alternates (the integration pairs by path and blog slugs differ per locale), and no URL has `<lastmod>`. Add a `serialize` hook that maps posts by `translationKey` and sets `lastmod` from post `date`. Head hreflang already covers this, so impact is low.

---

## 4.2 Laser-cutting service page — pilot for Phase 3.1

Highest-value item: 508 impressions over 42 queries at positions 21–39 and zero clicks, all served by the homepage. Build one service page end to end, measure it, then repeat the template (Phase 3.1).

- [ ] Routes: `/uslugi/ciecie-laserowe/`, `/en/services/laser-cutting/`, `/de/leistungen/laserschneiden/` as separate files per `AGENTS.md`. Add the slugs to `ROUTE_MAP` in `src/i18n/config.ts` (or use the `alternates` prop from Phase 1.1) so hreflang resolves; check the generated sitemap pairs them.
- [ ] PL title/H1 built around the query cluster, e.g. title `Cięcie laserowe blach Łódź — Precimet OEM`, H1 `Cięcie laserowe blach w Łodzi`. Use "cięcie laserem", "wycinanie laserowe" and "cięcie metalu" naturally in the copy, not stuffed.
- [ ] 600–1,000 words drawn from `ui.ts` and confirmed by the client: machine (Mazak Nexus from `MachinePark`), sheet size, max thickness per material, tolerances, materials in stock, prototype-to-series volumes, lead time / 1–2-day quote, accepted file formats, photos, a short FAQ, and the RFQ form or a CTA to it.
- [ ] Schema: `Service` (`serviceType`, `areaServed`: Łódź / Poland / DACH, `provider` → `https://oem.precimet.pl/#organization`) plus BreadcrumbList.
- [ ] Internal links: homepage laser card → page; nav; bending post and contact page → page.
- [ ] Strings in `ui.ts` for all three locales; no hardcoded copy.
- [ ] Ship, then GSC *Request indexing* for the three URLs.
- [ ] Measure at 4 and 8 weeks: average position for the laser query cluster (`/seo google gsc`, filter `cięcie|wycinanie|laser`), and GA4 organic landing sessions on the new URL. Success = laser queries ranking on the new URL in the top 20 within 8 weeks.

**Do not target what isn't offered.** GSC also shows "spawanie laserowe łódź" (28 impressions) and "cięcie plazmą / plazmowe łódź" (22). The machine park lists a robotic MIG/MAG welding cell, not laser welding or plasma. Confirm with the client before writing pages for those; never claim capability the shop doesn't have (see the powder-coating cleanup in `seo-tasks.md`).

**Rollout order after the pilot**, by search evidence: gięcie blach (pairs with 4.3) → spawanie (manual + robotic) → frezowanie/toczenie CNC → the remaining Phase 3.1 services.

---

## 4.3 Turn the bending post into the bend-table reference

- [ ] "tabela gięcia blach" is the top non-brand query (69 impressions, position 19), with "promień gięcia", "minimalny promień gięcia blachy" and "jak giąć aluminium" around it. Searchers want a table; `src/content/blog/pl/projektowanie-do-giecia-blach.md` has none.
- [ ] Add a real HTML `<table>`: thickness × material → minimum inside radius, V-die opening and minimum flange length, for the Safan press tooling. **Blocker:** the values must come from the client's tooling, not generic charts.
- [ ] Mirror it in the EN and DE posts. Link the post ↔ the gięcie service page once that exists. This is the pillar from Phase 3.5.

---

## 4.4 German market: "Fertigungspartner für OEM"

- [ ] `/de/` ranks at position 11 for "fertigungspartner für oem" (63 impressions, mostly Switzerland), one place off page 1.
- [ ] Strengthen `/de/` for that phrase: work it into the title, H1 or subheading and the intro (`ui.ts` → `de.seo.title` / hero), and add a short section for DACH buyers (German-speaking contact, delivery to DE/CH, documentation in German, ISO 9001). Confirm logistics claims with the client.
- [ ] Re-check the position after recrawl; target top 10.

---

## 4.5 Local search and entity signals (with Phase 3.4)

- [ ] Google Business Profile for ul. Pomorska 555, Łódź: category *Metal fabricator* (plus *Laser cutting service*), hours 8:00–16:00, website `https://oem.precimet.pl/`, photos of the hall and machines. Local "… łódź" queries are the bulk of the impressions above.
- [ ] Once GBP exists: add `sameAs` (GBP URL, LinkedIn, `https://precimet.pl`) to the LocalBusiness object in `src/lib/schema.ts`.
- [ ] Cross-link `precimet.pl` ↔ `oem.precimet.pl`.
- [ ] Listings with consistent name, address and phone in Polish and German B2B/industry directories and trade-fair exhibitor pages.

---

## 4.6 Measurement routine

- [ ] Before shipping 4.2: `/seo drift baseline https://oem.precimet.pl` (then `/seo drift compare` after each deploy) to catch SEO regressions.
- [ ] Monthly: `/seo google gsc` (queries at positions 4–20 are the next targets), `/seo google ga4-pages`, `/seo google pagespeed https://oem.precimet.pl/`.
- [ ] Search volume for new topics (not just ones already ranking): Google Ads Keyword Planner (free with an Ads account), or `/seo cluster <seed>` to group keywords by SERP overlap before planning new pages.
- [ ] Optional: narrow the `claude-seo@precimet-seo.iam.gserviceaccount.com` GA4 grant from account level to the oem.precimet.pl property only. It can currently also read the docubim.ai, ScanExpert and bimexpert properties.

---

## Not doing

- PL pages keep their English slugs (`/about/`, `/contact/`). Renaming means more 301s for negligible gain.
- FAQPage schema stays. Google retired FAQ rich results (May 2026), so it brings no SERP feature, but removing it gains nothing either.
- `Content-Signal` lines in `robots.txt`: optional and not acted on by Google.
- Indexing API: officially only for JobPosting/livestream pages; use GSC *Request indexing* instead.
