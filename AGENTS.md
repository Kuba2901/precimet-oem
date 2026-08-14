# AGENTS.md — Precimet OEM Manufacturing

Static Astro 7 site (Node 22, see `.nvmrc`) for a trilingual PL/EN/DE B2B metal-fabrication company. Production domain: `https://oem.precimet.pl`.

## Commands

```bash
npm install          # node_modules only; no lockfile drift expected
npm run dev          # http://localhost:4321
npm run build        # SSG output → ./dist
npm run preview      # serve ./dist
npm run astro check  # typecheck via @astrojs/check — the only static verification available
```

There is **no test suite and no linter**. Verify changes with `npm run astro check` and `npm run build`.

## i18n (core architecture)

- Locales: `pl` (default, unprefixed), `en` (`/en/`), `de` (`/de/`). Defined in `astro.config.mjs`, `src/i18n/config.ts`, `src/content.config.ts`, and `src/i18n/ui.ts`.
- **Every UI string lives in `src/i18n/ui.ts`** (`t(locale)`). Never hardcode copy in components — add it to the dict for all three languages.
- Components receive `locale` via Astro `Props` and read it with `const { locale } = Astro.props`.
- Internal links MUST go through `path(locale, ...)` from `src/i18n/config.ts`; do not hand-build `/en/...` strings. `localeFromUrl()`/`stripLocale()` derive locale from the URL for non-propped contexts.
- Per-locale pages are separate files, each hardcoding its locale (e.g. `src/pages/blog/index.astro` is PL, `src/pages/en/blog/index.astro` is EN). Adding a route means adding it to all three locales.
- Adding a new locale touches: `astro.config.mjs` (locales + sitemap map), `src/i18n/config.ts`, `src/i18n/ui.ts`, and the `lang` enum in `src/content.config.ts`.

## Content / blog

- Blog collection: `src/content/blog/{pl,en,de}/*.md` (one `lang` folder per locale). `lang` frontmatter must match its folder.
- Schema (`src/content.config.ts` — note: at `src/`, not `src/content/`): `title`, `description`, `date`, `lang`, optional `cover`/`tags`/`translationKey`/`draft`. `draft: true` hides the post; `translationKey` links same-post translations across locales.
- Helpers in `src/lib/blog.ts`: `getPosts(locale)` (sorted newest, drafts filtered), `blogStaticPaths(locale)`, `dateFormatter(locale)`.
- Blog pages are per-locale duplicates (`/blog`, `/en/blog`, `/de/blog`), each with `index.astro` + `[slug].astro` calling `getStaticPaths` for its locale.

## Styling

- Plain CSS, no framework. Brand palette as CSS variables in `src/styles/global.css` (`:root`): graphite `#2a2d31`/`#1e2124`, red `#e30613`, sand `#cfc896`. Recolor whole site by editing one variable.
- Components use scoped `<style>` blocks; shared styles + `.reveal` animation classes live in `global.css`.

## Deployment

- Push to `main` triggers `.github/workflows/deploy-to-prod.yml`: `npm ci` → `npm run build` → FTP upload of `./dist` to cyberfolks.pl for `oem.precimet.pl` (secrets `FTP_SERVER`/`FTP_USERNAME`/`FTP_PASSWORD` in GitHub).
- No `base` path is set — the site serves at the domain root. The `path()`/`localeFromUrl()` helpers in `src/i18n/config.ts` still do `import.meta.env.BASE_URL` handling from the old GitHub Pages `/precimet-oem/` setup; keep that handling intact so it stays host-agnostic.
- `public/robots.txt` hardcodes the `Sitemap:` URL — update it alongside `site` in `astro.config.mjs` if the domain ever changes.

## Gotchas

- Privacy pages exist per locale (`polityka-prywatnosci.astro`, `en/privacy-policy.astro`, `de/datenschutz.astro`); `Contact.astro` links them via `path()`.
- `dist/` and `.astro/` are generated — never edit them directly.
