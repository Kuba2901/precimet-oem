# SEO Phase 4 — data-driven follow-up

Date: 2026-10-29
Status: in progress — 4.0 shipped; 4.1.3–4.1.7 and the 4.2 pages built 2026-10-29 (not yet deployed)
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

- [x] Submit `https://oem.precimet.pl/sitemap-index.xml` (done via API 2026-10-29). Only `sitemap-0.xml` (submitted 2026-09-14) is registered.
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

- [x] **File:** `src/layouts/BaseLayout.astro:131-135`. Three families (Barlow Condensed 500/600/700, IBM Plex Mono 400/500, Inter 400/500/600) load as a render-blocking stylesheet from `fonts.googleapis.com`. Lighthouse estimates **~2.8 s** saving on mobile FCP/LCP.
- [x] Self-host with `@fontsource/*` (or local `woff2` in `public/fonts/` + `@font-face` in `global.css`), `font-display: swap`, preload only the hero heading weight. Drop weights nothing uses.
- [x] This also removes a third-party request to Google from every page view, which simplifies the privacy policy.

### 4.1.4 Make the LCP image discoverable

- [x] **File:** `src/components/Hero.astro:16`. The hero is a CSS `background-image` (`/hero.webp`), so the browser only finds it after CSS loads (Lighthouse: "LCP request discovery" failed).
- [x] Add `<link rel="preload" as="image" href="/hero.webp" fetchpriority="high">` for the homepages (a `preloadImage` prop on `BaseLayout`), or render the hero as an `<img fetchpriority="high">` behind the overlay.
- [ ] Target after 4.1.3 + 4.1.4: mobile LCP < 2.5 s and Performance ≥ 90 in `/seo google pagespeed https://oem.precimet.pl/`.

### 4.1.5 Optimise service images

- [x] **File:** `src/components/Services.astro:26` uses a plain `<img src={s.img}>`, so 12 JPGs ship unprocessed (256–780 KB each; `hall.jpg` is 780 KB). Lighthouse: ~405 KiB savings.
- [x] Switch to `astro:assets` `<Image>` (as `About.astro` already does) with `widths`/`sizes` for the 600×400 slot and WebP/AVIF output. Keep `loading="lazy"` and the explicit dimensions (they protect CLS).

### 4.1.6 Accessibility fails flagged by Lighthouse

Resolved: the file input in `Contact.astro` had no accessible name (now `aria-labelledby`/`aria-describedby`), and the header logo link's Polish-only `aria-label` didn't match its visible text (removed; logo `alt=""`).

- [x] "Form elements do not have associated labels" and "Visible text labels do not match accessible names", both on the homepage. Most likely candidates: the hidden `botcheck` checkbox in `src/components/Contact.astro:99`, the Turnstile widget, and the cookie-consent or language-switcher controls. Confirm the exact nodes in the PSI report details before fixing.

### 4.1.7 Sitemap polish (low)

- [x] `astro.config.mjs` sitemap: blog posts have no `xhtml:link` alternates (the integration pairs by path and blog slugs differ per locale), and no URL has `<lastmod>`. Add a `serialize` hook that maps posts by `translationKey` and sets `lastmod` from post `date`. Head hreflang already covers this, so impact is low.

---

## 4.2 Laser-cutting service page — pilot for Phase 3.1

Highest-value item: 508 impressions over 42 queries at positions 21–39 and zero clicks, all served by the homepage. Build one service page end to end, measure it, then repeat the template (Phase 3.1).

- [x] Routes: flat `/ciecie-laserowe/`, `/en/laser-cutting/`, `/de/laserschneiden/` (no `/uslugi/` hub exists yet, so a nested path would put a non-existent page in the breadcrumbs; revisit when the hub is built). Originally planned as `/uslugi/ciecie-laserowe/` etc. as separate files per `AGENTS.md`. Add the slugs to `ROUTE_MAP` in `src/i18n/config.ts` (or use the `alternates` prop from Phase 1.1) so hreflang resolves; check the generated sitemap pairs them.
- [x] PL title/H1 built around the query cluster, e.g. title `Cięcie laserowe blach Łódź — Precimet OEM`, H1 `Cięcie laserowe blach w Łodzi`. Use "cięcie laserem", "wycinanie laserowe" and "cięcie metalu" naturally in the copy, not stuffed.
- [x] (site facts + client answers; tolerances and cutting gases pending) 600–1,000 words drawn from `ui.ts` and confirmed by the client: machine (Mazak Nexus from `MachinePark`), sheet size, max thickness per material, tolerances, materials in stock, prototype-to-series volumes, lead time / 1–2-day quote, accepted file formats, photos, a short FAQ, and the RFQ form or a CTA to it.
- [x] Schema: `Service` (`serviceType`, `areaServed`: Łódź / Poland / DACH, `provider` → `https://oem.precimet.pl/#organization`) plus BreadcrumbList.
- [ ] Internal links: homepage laser card → page (done); nav; bending post and contact page → page.
- [x] Strings in `ui.ts` for all three locales; no hardcoded copy.
- [ ] Ship, then GSC *Request indexing* for the three URLs.
- [ ] Measure at 4 and 8 weeks: average position for the laser query cluster (`/seo google gsc`, filter `cięcie|wycinanie|laser`), and GA4 organic landing sessions on the new URL. Success = laser queries ranking on the new URL in the top 20 within 8 weeks.

**Do not target what isn't offered.** GSC also shows "spawanie laserowe łódź" (28 impressions) and "cięcie plazmą / plazmowe łódź" (22). **Client confirmed (2026-10-29): neither laser welding nor plasma cutting is offered.** No pages for them; `public/llms.txt` lists both under "When NOT to use Precimet". Never claim capability the shop doesn't have (see the powder-coating cleanup in `seo-tasks.md`).

**Rollout order after the pilot**, by search evidence: gięcie blach (pairs with 4.3) → spawanie (manual + robotic) → frezowanie/toczenie CNC → the remaining Phase 3.1 services.

---

## 4.3 Turn the bending post into the bend-table reference

Waiting on the client (asked 2026-10-29) for the Safan bend data.

- [ ] "tabela gięcia blach" is the top non-brand query (69 impressions, position 19), with "promień gięcia", "minimalny promień gięcia blachy" and "jak giąć aluminium" around it. Searchers want a table; `src/content/blog/pl/projektowanie-do-giecia-blach.md` has none.
- [ ] Add a real HTML `<table>`: thickness × material → minimum inside radius, V-die opening and minimum flange length, for the Safan press tooling. **Blocker:** the values must come from the client's tooling, not generic charts.
- [ ] Mirror it in the EN and DE posts. Link the post ↔ the gięcie service page once that exists. This is the pillar from Phase 3.5.

---

## 4.4 German market: "Fertigungspartner für OEM"

- [ ] `/de/` ranks at position 11 for "fertigungspartner für oem" (63 impressions, mostly Switzerland), one place off page 1.
- [x] Client confirmed (2026-10-29): they deliver to Germany and Switzerland and have a German-speaking contact.
- [x] `/de/` title is now "Fertigungspartner für OEM aus Polen — Precimet", the hero eyebrow and meta description use the phrase, and the About copy (homepage + `/de/laserschneiden/` + `/de/index.md`) mentions delivery to DE/CH and the German-speaking contact.
- [ ] Optional: a dedicated DACH section (German documentation, Incoterms/delivery terms) once the client confirms those details.
- [ ] Re-check the position after recrawl; target top 10.

---

## 4.5 Local search and entity signals (with Phase 3.4)

- [ ] Google Business Profile exists ("PRECIMET H.C.E.", `https://maps.google.com/?cid=2226114506056942605`). Client agreed (2026-10-29) to set its website to `https://oem.precimet.pl/` and add categories; still to do in the profile: category *Metal fabricator* (plus *Laser cutting service*), hours 8:00–16:00, website `https://oem.precimet.pl/`, photos of the hall and machines. Local "… łódź" queries are the bulk of the impressions above.
- [x] GBP added as `sameAs` on the LocalBusiness object in `src/lib/schema.ts`.
- [ ] Add LinkedIn and `https://precimet.pl` to `SAME_AS` when their URLs are confirmed.
- [ ] Cross-link `precimet.pl` ↔ `oem.precimet.pl`.
- [ ] Listings with consistent name, address and phone in Polish and German B2B/industry directories and trade-fair exhibitor pages.

---

## Client answers (2026-10-29)

| Question | Answer | Applied |
|---|---|---|
| Laser cutting tolerances | pending | add to `servicePages.laser` (specs/FAQ) when received |
| Cutting gases, oxide-free stainless edges, deburring | pending | same |
| Customer-supplied material | yes | laser pages: materials paragraph + FAQ, all 3 locales |
| Laser welding / plasma cutting | not offered | not targeted; `llms.txt` exclusion |
| Safan bend table | pending | 4.3 |
| Delivery to DE/CH, German-speaking contact | yes, yes | 4.4 |
| Link GBP to oem.precimet.pl, add categories | yes | 4.5 (`sameAs` added; profile edits by client) |

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
