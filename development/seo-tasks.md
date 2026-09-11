# SEO task list — audit remediation

Date: 2026-09-11
Status: Phases 1–2 complete (2026-09-11, branch `seo/phase-1-critical-fixes`); Phase 3 not started
Source: full-site SEO audit of `https://oem.precimet.pl` (11 live pages, 3 locales, crawled against commit `449f497`)

Verification for every task: `npm run astro check && npm run build`. There is no test suite or linter.

---

## Phase 1 — Critical defects

Four issues that are actively leaking crawl equity. All are small, and three of them are single-file fixes that cascade site-wide.

### 1.1 Fix blog hreflang — alternates currently 404

- [x] **File:** `src/layouts/BlogPostLayout.astro:21`

`pagePath={`/blog/${postSlug(post)}`}` passes the *current* post's slug to `BaseLayout`, which builds every hreflang alternate from it. The result is that each post declares alternates at the other locales using its own slug:

```
<link rel="alternate" hreflang="en" href="https://oem.precimet.pl/en/blog/kontrola-jakosci-w-produkcji">  → 404
<link rel="alternate" hreflang="de" href="https://oem.precimet.pl/de/blog/kontrola-jakosci-w-produkcji">  → 404
```

Verified: both return `404`. The same defect applies in reverse — `/de/blog/qualitaetskontrolle-erklaert/` declares `hreflang="en"` pointing at `/en/blog/qualitaetskontrolle-erklaert` (also 404). All 6 posts × 3 alternates are broken.

**The infrastructure to fix this already exists and is simply unused.** All six posts carry a correct `translationKey` in frontmatter (`bending-dfm-tips`, `quality-control-explained`), and `content.config.ts:30` already declares it in the schema.

Approach:
- Add a helper to `src/lib/blog.ts` that resolves `translationKey` + target locale → that locale's slug (build a map from `getCollection('blog')`).
- `BaseLayout` currently derives all alternates from one `basePath`, so it cannot express per-locale slugs. Either:
  - **(a)** add an optional `alternates?: Record<Locale, string>` prop to `BaseLayout.astro` that overrides the `LOCALES.map(...)` hreflang block when present, or
  - **(b)** extend `ROUTE_MAP` in `src/i18n/config.ts` with blog entries and let `localizedPath()` handle it — consistent with how `/polityka-prywatnosci` is already handled.

Option (b) matches the existing pattern but requires the map to be static; option (a) derives from content and won't drift as posts are added. **Prefer (a).**

- [x] Fall back to omitting the alternate (not emitting a broken one) when a translation doesn't exist for a locale.
- [x] Verify: every `hreflang` href on all 6 post pages returns `200`.

### 1.2 Add HTTP→HTTPS and www→apex 301s

- [x] **File:** `public/.htaccess` — add at the top of the `mod_rewrite` block, above the existing canonical redirects

Both variants currently serve `200` with full duplicate content:

```
http://oem.precimet.pl/      → 200   (expected 301)
https://www.oem.precimet.pl/ → 200   (expected 301)
```

Absolute canonicals partially mitigate the www case, but both should redirect.

```apache
RewriteCond %{HTTPS} off
RewriteRule ^ https://oem.precimet.pl%{REQUEST_URI} [R=301,L]

RewriteCond %{HTTP_HOST} ^www\. [NC]
RewriteRule ^ https://oem.precimet.pl%{REQUEST_URI} [R=301,L]
```

Note: must come before the static-asset skip rule so assets are also redirected.

### 1.3 Add an `<h1>` to the contact pages

- [x] **Files:** `src/components/Contact.astro:25`, `src/pages/contact.astro`, `src/pages/en/contact.astro`, `src/pages/de/contact.astro`

All three contact pages have **zero** `<h1>`. `Contact.astro` uses `<h2>{dict.contact.title}</h2>` because it was written as a homepage section — correct there (the homepage H1 is in `Hero.astro`), wrong on the standalone page.

Add a heading-level prop so the component renders `h1` on the standalone page and stays `h2` when embedded in the homepage:

```astro
interface Props { locale: Locale; as?: 'h1' | 'h2' }
const { locale, as = 'h2' } = Astro.props;
const Heading = as;
...
<Heading>{dict.contact.title}</Heading>
```

Then pass `as="h1"` from the three contact pages only.

- [x] Consider a distinct, keyword-bearing heading for the standalone page rather than reusing `contact.title` ("Prześlij rysunek — odezwiemy się z wyceną"). Suggested PL: *"Zapytanie ofertowe — cięcie laserowe, gięcie i obróbka CNC"*. Needs a new `contact.pageTitle` key in all three locales.

### 1.4 Align canonicals with the served trailing-slash form

- [x] **File:** `src/i18n/config.ts:30-36` (`path()`)

`path()` never emits a trailing slash, but the build serves directory-style URLs and 301s to them:

```
canonical:  https://oem.precimet.pl/about
served:     /about  → 301 → /about/
```

Every non-root page points its canonical at a URL that redirects. `/` and `/polityka-prywatnosci/` are unaffected.

Fix in `path()` so all canonicals, hreflang and internal links agree with Astro's `trailingSlash` behaviour. Check `astro.config.mjs` — `trailingSlash` is not currently set (defaults to `'ignore'`); consider setting it explicitly to `'always'` and matching `path()` to it, so the two can't drift.

- [x] Verify canonical === served URL on all 11 pages after the change.

---

## Phase 2 — Quick wins (under ~2h each)

### 2.1 Rewrite titles and meta descriptions

- [x] **File:** `src/i18n/ui.ts` — `seo` blocks at lines 222, 705, 1181 (pl / en / de)

Measured lengths vs. the ~60 / ~160 char SERP limits:

| Page | Title | Description |
|---|---|---|
| Home PL | 97 | 254 |
| Home EN | 93 | 258 |
| Home DE | 99 | 270 |
| About PL / EN / DE | 78 / 81 / 78 | 165 / 166 / 172 |
| Contact PL | 67 | 161 |

Titles are cut off after ~60 chars — on the PL homepage, "CNC", "spawanie" and the brand all fall outside the visible portion. Descriptions are truncated in every SERP.

- [x] Target 50–60 chars for titles, 150–160 for descriptions, front-loading service + city, ending with a CTA.
- [x] Example PL home title: `Produkcja kontraktowa metalu — Precimet OEM, Łódź` (49).
- [x] Blog post titles are set in `BlogPostLayout.astro:19` as `${post.data.title} — Precimet OEM Manufacturing`; see 2.7.

### 2.2 Fix the homepage H1 word spacing

- [x] **File:** `src/components/Hero.astro:21-24`

`{dict.hero.title1}<br />` with no surrounding whitespace means crawlers read the H1 as:

```
Części i zespoły metalowedla producentów OEM.Od prototypu do produkcji seryjnej.
```

Affects all three locales. Add a space before each `<br />`, or compose the H1 from `<span>`s with explicit spacing.

### 2.3 Promote the LocalBusiness schema site-wide

- [x] **Files:** `src/layouts/BaseLayout.astro:31-45`, `src/pages/contact.astro:7-32` (+ en/de equivalents)

The site-wide `Organization` block in `BaseLayout` carries only `addressLocality` and `addressCountry`.

**`src/pages/contact.astro` already has a complete, correct `LocalBusiness` graph** with `streetAddress`, `postalCode`, `telephone`, `email` and `openingHoursSpecification`. It just isn't used anywhere else.

- [x] Lift that object into a shared module (e.g. `src/lib/schema.ts`) and emit it from `BaseLayout` so every page carries it.
- [x] Add `geo` — coordinates `51.7854674, 19.5891212` are already in the footer's Google Maps directions link.
- [x] De-duplicate: don't emit both the thin `Organization` and the full `LocalBusiness` on contact pages.

### 2.4 Replace the three hotlinked external images

- [x] **Urgent:** `src/components/About.astro` — the hall image is hotlinked from `encrypted-tbn0.gstatic.com`, a **Google Images thumbnail CDN**. Unstable URL, no cache control, and a copyright exposure. There is already a local `src/assets/hall.jpg`.
- [x] Blog covers: both posts use `images.unsplash.com` at `w=1400` for a 600×380 slot. Set in each post's `cover` frontmatter (6 files).
- [x] Move all into `src/assets/` so Astro emits optimized, hashed, responsive WebP — matching how the rest of the site's images are already handled.

### 2.5 Compress `og-image.png`

- [x] **File:** `public/og-image.png` — currently **957 KB** for a 1200×630 frame. Target under 100 KB. Affects every social share and link preview.

### 2.6 De-orphan `/contact`

- [x] **File:** `src/components/Header.astro:21,47`

The homepage links to `/#kontakt` six times and to `/contact` zero times, so the page has no internal inbound links. Point the nav item and CTA at `path(locale, '/contact')`.

- [ ] Then differentiate the page's content — it currently duplicates the homepage contact section exactly (same H2, same form, 279 words). Add an RFQ checklist, accepted file formats, and typical lead times.

### 2.7 Retitle the blog posts

- [x] **Files:** the 6 files in `src/content/blog/{pl,en,de}/`

"O kontroli jakości" and "O gięciu detali na prasie" carry no searchable keyword — they read as internal labels. The article bodies are genuinely good (737 and 765 words of real engineering content); the titles are what's holding them back.

- [x] Retitle to the query, e.g. *"Kontrola jakości w produkcji kooperacyjnej — jak wygląda krok po kroku"*.
- [x] These titles also feed the homepage `BlogPreview` H3s and the `/blog` index H2s.

### 2.8 Add BreadcrumbList and BlogPosting schema

- [x] `BreadcrumbList` in `src/layouts/BaseLayout.astro`, derived from `basePath` (clean 2-level hierarchy, nothing custom needed).
- [x] `BlogPosting` in `src/layouts/BlogPostLayout.astro` with `datePublished`, `author`, `image` — all already present in frontmatter.

---

## Found during Phase 2 — not yet actioned

- [ ] **NIP conflict.** `src/pages/about.astro` schema declares `taxID: 'PL7272841275'`, the footer declares `NIP: 728-280-49-18` (= PL7282804918). These are different numbers; one is wrong. Left untouched pending confirmation — `taxID` is deliberately absent from `src/lib/schema.ts`.
- [ ] **`src/assets/0.jpg` is a byte-identical duplicate of `hall.jpg`** (780 KB) and is referenced nowhere. Safe to delete.
- [ ] **`.astro/` is gitignored but tracked**, so its build cache shows as modified after every build. Needs `git rm -r --cached .astro/`.
- [ ] **Dangling markdown alternates.** `/blog`, `/dziekujemy`, `/thank-you` and `/danke` advertise a `text/markdown` variant, but no `.md.ts` route exists for them. Pre-existing.
- [ ] **Hero image is still stock.** Now self-hosted and optimised, but the `podmień na własne` TODO in `src/components/Hero.astro` still stands — a real shop-floor photo would serve better.
- [ ] **Blog covers now reuse service photos** (`bending.jpg`, `cad.jpg`). A genuine QC/inspection photo would suit the quality-control post better than the CAD workstation shot.

---

## Phase 3 — Strategic (this quarter)

### 3.1 Service page architecture — highest impact item in this document

- [ ] Twelve services (cięcie laserowe, gięcie, spawanie ręczne, spawanie zrobotyzowane, frezowanie CNC, toczenie CNC, gięcie rur, cięcie kształtowników, montaż mechaniczny, montaż elektryczny, CAD/CAM, ślusarstwo) currently exist **only as `<h3>` elements** inside the homepage `#uslugi` section.

These are the exact terms buyers search. A fragment URL can't rank, can't carry its own title tag, and can't accumulate links. Every competitor in the Łódź SERP has dedicated service pages.

- [ ] The data already exists in `src/i18n/ui.ts` as `ServiceItem[]` (`id`, `title`, `desc`, `img`, `imgAlt`) — this is a routing + content-expansion job, not a from-scratch build.
- [ ] Routes: `/uslugi/[slug]`, `/en/services/[slug]`, `/de/leistungen/[slug]`. Per `AGENTS.md`, adding a route means adding it to all three locales as separate files.
- [ ] Needs a `ROUTE_MAP` entry (or the `alternates` mechanism from 1.1) so hreflang resolves across the differing path segments.
- [ ] Each page: 600–900 words — process description, capability envelope, tolerances, materials, machines used, RFQ CTA.
- [ ] Update the homepage service cards to link to them, and add them to the nav.

**Do Phase 1 first** — shipping 36 new pages onto broken canonicals and redirect chains would multiply the existing problems.

### 3.2 Case studies / realizacje

- [ ] The `/blog` H1 reads "Realizacje i wiedza produkcyjna" but no realizacje exist. This is the decision-stage content that closes B2B deals and the strongest link magnet available to a fabrication shop.
- [ ] 3–5 project pages: part, industry, process chain, tolerance achieved, volume, lead time.
- [ ] **Blocker:** needs client consent for named references.

### 3.3 Machine park page

- [ ] Nine machines with named brands, real specs and WebP photos are already modelled as `MachineGroup[]` in `src/i18n/ui.ts` and shown in `MachinePark.astro` — reachable only via the `/#park-maszynowy` anchor.
- [ ] Buyers search by machine (Mazak Nexus, Doosan DNM-750L, Safan, OTC Daihen). Give them a URL.

### 3.4 Local search

- [ ] Google Business Profile for the Pomorska 555 site.
- [ ] A Łódź-targeted landing page. Competitors (notably BLM Laser-Tech) are winning city terms with technically weaker pages, purely on structure.

### 3.5 DFM topic cluster

- [ ] Make the existing bending post a pillar: minimum bend radius tables, K-factor reference, tolerance guidance, material selection — each linking back. Engineering reference tables attract links from engineers.

### 3.6 Supporting pages

- [ ] Materials / gatunki page — "ponad 50 gatunków blach" is currently buried in a FAQ answer.
- [ ] Quality / ISO 9001 page — referenced across the site with no page to anchor it; buyers with supplier-qualification checklists search for this specifically.
- [ ] Dedicated RFQ landing page.
- [ ] Industry pages (4–6) — currently one list item each in `Industries.astro`.
- [ ] Expand `/about` from 532 words to ~1,000; the four numbered H2s encode nothing — drop the numbers or make them a real sequence.

### 3.7 Connect measurement

- [ ] Google Search Console — everything in the source audit is inferred from the site itself. GA4 (`G-J0VQZ1SCZ9`) is already wired in `src/lib/analytics.ts`, but there is no query/impression/position data.
- [ ] An SEO tool (Ahrefs or Semrush) via MCP would make the next pass measured rather than estimated.

---

## Not broken — do not "fix"

Confirmed working; listed so they don't get churned during the above.

- Image alt text: 26/26 on the homepage, 0 missing or empty site-wide, descriptive and keyword-relevant.
- `robots.txt`: allows all major crawlers plus 14 named AI agents, declares the sitemap.
- Sitemap: valid, 17 URLs with correct `xhtml:link` alternates; thank-you and 404 pages correctly excluded.
- 404 handling: real `404` status, `noindex`, locale-aware routing for `/en/` and `/de/`.
- hreflang on the 11 **static** pages: correct, including `x-default`.
- Local image pipeline: hashed, explicit width/height (protects CLS), `loading="lazy"`, machine photos in WebP.
- Server response: ~85–110 ms TTFB, 57 KB HTML.
- AI crawler readiness: `llms.txt`, `llms-full.txt`, `agent-instructions.md`, per-page `.md` variants, `Accept: text/markdown` negotiation with correct `Vary` headers. Ahead of every competitor checked.

Note: `WebFetch`-style tools hitting this site receive the **markdown** variant via content negotiation, not the HTML. Use an explicit browser `User-Agent` when auditing.
