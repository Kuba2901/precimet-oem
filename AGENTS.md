# AGENTS.md — Precimet OEM Manufacturing (Astro)

## Project Overview
Precimet OEM Manufacturing — trilingual (PL/EN/DE) B2B manufacturing website built with Astro 7.x + i18n routing.

- **Framework**: Astro 7.x (static site generation)
- **i18n**: Polish (default, `/`), English (`/en/`), German (`/de/`)
- **Styling**: CSS variables in `src/styles/global.css` (palette from logo)
- **Content**: Astro Content Collections for blog (Markdown + frontmatter)
- **Deployment target**: `https://3d-laser.pl` (site config updated)

## Commands
```bash
npm install          # install deps
npm run dev          # dev server at http://localhost:4321
npm run build        # production build to ./dist
npm run preview      # preview production build
npm run astro        # run astro CLI directly
```

## Project Structure
```
src/
├── components/       # Astro components (Header, Hero, Services, etc.)
├── content/
│   ├── blog/         # Blog posts: pl/, en/, de/ markdown files
│   └── config.ts     # Content collection schema (Zod)
├── i18n/
│   ├── config.ts     # Locale config, URL helpers
│   └── ui.ts         # ALL UI strings in 3 languages (single source of truth)
├── layouts/
│   ├── BaseLayout.astro   # <head>, SEO, OG, hreflang, JSON-LD
│   └── BlogPostLayout.astro
├── lib/blog.ts       # Blog helpers (sorting, slugs, dates)
├── pages/
│   ├── index.astro          # PL homepage (/)
│   ├── en/index.astro       # EN homepage (/en/)
│   ├── de/index.astro       # DE homepage (/de/)
│   └── blog/...             # Blog index & slug pages per locale
├── styles/global.css  # CSS variables, typography, global styles
└── pages/...          # Other pages (about, services, contact, etc.)
```

## Key Conventions

### i18n / Content
- **All UI text lives in `src/i18n/ui.ts`** — components import `t(locale)` and read from there
- Add/edit translations by editing `ui.ts` — do not hardcode strings in components
- Blog posts live in `src/content/blog/{pl,en,de}/*.md` with frontmatter:
  ```yaml
  ---
  title: "Title"
  description: "Excerpt"
  date: 2026-07-15
  lang: pl          # must match folder
  cover: "https://..." # optional
  tags: ["tag"]
  translationKey: "shared-key"  # links translations
  draft: true       # optional, hides post
  ---
  ```
- Add languages by updating `LOCALES` in `src/i18n/config.ts` and adding locale object in `ui.ts`

### Routing
- Polish = default locale → no prefix (`/`)
- English → `/en/`, German → `/de/`
- Language switcher in `LanguageSwitcher.astro` (header + footer)
- Each page emits `hreflang` tags and localized OG/meta via `BaseLayout.astro`

### Styling
- Palette defined as CSS variables in `src/styles/global.css` (`:root`)
  - Graphite `#2a2d31`, Red `#e30613`, Sand `#cfc896`
  - Change one variable → recolors entire site
- No CSS framework; plain CSS + CSS variables
- Components use local `<style>` blocks scoped to component

### Components
- Astro components (`.astro`) with `<script>` + template
- Shared layout via `BaseLayout.astro` (SEO, meta, JSON-LD, hreflang)
- No hardcoded strings — all text from `ui[locale]`
- Image optimization via Astro `<Image>` (put assets in `src/assets/`)

### Blog / Content Collections
- Defined in `src/content.config.ts` (Zod schema)
- Query via `getCollection('blog')` in `src/lib/blog.ts`
- Posts auto-appear on `/blog` index and homepage (3 latest)

### SEO / Meta
- `BaseLayout.astro` handles:
  - `title`, `description`, Open Graph, Twitter cards
  - `hreflang` links for all 3 locales
  - JSON-LD `Organization` + `WebSite` schema
  - Canonical URL
- `site` in `astro.config.mjs` = `https://3d-laser.pl` (production domain)
- Sitemap via `@astrojs/sitemap` with i18n config

### Contact Form
- `Contact.astro` form → `action` attribute points to backend (Formspree / Netlify Forms / custom endpoint)
- **TODO**: Connect backend, add success/error handling, add privacy policy link

## Pre-deploy Checklist (from README)
- [ ] Update contact info in `src/i18n/ui.ts` (`contact.info`) — currently placeholders
- [ ] Replace stock photos with real photos in `src/assets/` + `<Image>`
- [ ] Add real client logos in Industries section
- [ ] Review EN/DE translations with native/technical reviewer
- [ ] Connect contact form backend
- [ ] Set production domain in `astro.config.mjs` (`site:`) — **DONE: https://3d-laser.pl**
- [ ] Generate OG image (1200×630)
- [ ] Add `robots.txt` in `public/` pointing to sitemap
- [ ] Submit to Google Search Console (all 3 locales)
- [ ] Add privacy policy / cookies page + link in footer
- [ ] Add company registration info (NIP, KRS/CEIDG) in footer
- [ ] `npm run build` + mobile test
- [ ] Lighthouse audit (perf, a11y, SEO)
- [ ] Configure hosting (Netlify/Vercel/Cloudflare Pages) + SSL

## Build / Deploy
```bash
npm run build      # outputs to ./dist
# Deploy ./dist to any static host
```
- No SSR, no server — static files only
- No build-time secrets needed (all config in repo)
- No database, no API routes

## Adding a New Language
1. Add locale to `LOCALES` in `src/i18n/config.ts`
2. Add locale object to `ui` in `src/i18n/ui.ts` (copy PL/EN/DE structure)
3. Add locale to `i18n.locales` in `astro.config.mjs`
4. Add locale to sitemap `i18n.locales` in `astro.config.mjs`
5. Create `src/pages/{locale}/` mirroring `src/pages/en/`
6. Add blog folder `src/content/blog/{locale}/` for translated posts
7. Update `LanguageSwitcher.astro` with new locale label

## Common Tasks

### Add a blog post
1. Create `src/content/blog/pl/my-post.md` with frontmatter
2. (Optional) Create `en/my-post.md` and `de/mein-post.md` with same `translationKey`
3. Run `npm run dev` → appears on `/blog` and homepage

### Change colors
Edit CSS variables in `src/styles/global.css`:
```css
:root {
  --color-primary: #2a2d31;    /* graphite */
  --color-accent: #e30613;     /* red */
  --color-sand: #cfc896;       /* sand */
  /* ... */
}
```

### Update contact info
Edit `src/i18n/ui.ts` → `contact.info` for all 3 locales

### Add a new service
1. Add entry to `services.items` in `ui.ts` (all 3 locales)
2. Add image to `STOCK` object or `src/assets/`
3. Component `Services.astro` auto-renders from `ui.ts`

## Known Constraints / Gotchas
- **No SSR** — fully static; no server-side logic
- **No i18n routing for blog slugs** — slugs stay as-is; only `/blog/` prefix changes
- **Blog translations linked by `translationKey`** — not by slug
- **Stock images from Unsplash** — replace with local assets before launch
- **Contact form has no backend** — `action` attribute needs real endpoint
- **No analytics configured** — add Plausible/Umami/GA if needed
- **No lint/typecheck scripts in package.json** — run `npx astro check` for typechecking
- **Base path** — was `/precimet-oem` for GitHub Pages; now `/` for custom domain