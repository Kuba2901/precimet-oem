# Precimet OEM Manufacturing

Trilingual (Polish/English/German) B2B website for **Precimet OEM Manufacturing** — contract metal fabrication and laser cutting.

**Production:** [https://oem.precimet.pl](https://oem.precimet.pl)

## Language versions

- **Polish (default):** `/`
- **English:** `/en/`
- **German:** `/de/`

Blog is available at `/blog` for each language.

## Tech stack

- **Framework:** Astro 7 (static site generation)
- **Node:** 22 (see `.nvmrc`)
- **Styling:** Plain CSS + CSS variables (no framework)
- **i18n:** Built-in Astro i18n routing; all UI strings in `src/i18n/ui.ts`
- **Content:** Astro Content Collections (Markdown blog posts)
- **Deployment:** GitHub Actions → FTP to cyberfolks.pl (`oem.precimet.pl`)

## Quick start

```bash
npm install          # install dependencies
npm run dev          # dev server at http://localhost:4321
npm run build        # production build to ./dist
npm run preview      # preview production build locally
npm run astro check  # typecheck (no test suite or linter exists)
```

## Project structure

```
src/
├── components/       # Header, Hero, Services, Contact, etc.
├── content/
│   └── blog/         # Blog posts: pl/, en/, de/ markdown folders
├── content.config.ts # Content collection schema (Zod)
├── i18n/
│   ├── config.ts     # Locale config & path/locale URL helpers
│   └── ui.ts         # All UI strings in 3 languages (single source of truth)
├── layouts/          # BaseLayout (SEO, meta, hreflang, JSON-LD), BlogPostLayout
├── lib/blog.ts       # Blog helpers (sorting, slugs, dates)
├── pages/            # Per-locale pages; PL unprefixed, EN under /en/, DE under /de/
└── styles/global.css # CSS variables, typography, global styles
```

## Adding content

**Blog post** — drop a new `.md` file in `src/content/blog/<lang>/`. No code changes needed.

```yaml
---
title: "Post title"
description: "Excerpt shown on lists and in meta"
date: 2026-07-01
lang: pl            # pl | en | de — must match its folder
cover: "https://..."  # optional
tags: ["case study"]  # optional
translationKey: "x"   # optional — links translations of the same post
draft: true           # optional — hides the post
---
```

**UI text** — edit the dict in `src/i18n/ui.ts` (all three languages). Never hardcode copy in components.

## Deployment

Push to `main` triggers `.github/workflows/deploy-to-prod.yml`: `npm ci` → `npm run build` → FTP upload of `./dist` to `oem.precimet.pl`. FTP credentials are GitHub secrets (`FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`).

## Notes

- `public/robots.txt` hardcodes the `Sitemap:` URL — keep it in sync with the `site` in `astro.config.mjs`.
- `dist/` and `.astro/` are generated — never edit them directly.
