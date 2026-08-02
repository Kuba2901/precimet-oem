# Precimet OEM Manufacturing — B2B Metal Fabrication Website

Professional trilingual (Polish/English/German) B2B website for **Precimet OEM Manufacturing** — contract metal fabrication and laser cutting services.

**Live staging site:** [https://kuba2901.github.io/precimet-oem/](https://kuba2901.github.io/precimet-oem/)

---

## 🌐 Language Versions

- **Polish (default):** [https://kuba2901.github.io/precimet-oem/](https://kuba2901.github.io/precimet-oem/)
- **English:** [https://kuba2901.github.io/precimet-oem/en/](https://kuba2901.github.io/precimet-oem/en/)
- **German:** [https://kuba2901.github.io/precimet-oem/de/](https://kuba2901.github.io/precimet-oem/de/)

Blog available at `/blog` for each language.

---

## 🚀 Quick Start

```bash
npm install          # Install dependencies
npm run dev          # Dev server at http://localhost:4321
npm run build        # Production build to ./dist
npm run preview      # Preview production build locally
```

---

## 🛠️ Tech Stack

- **Framework:** Astro 7.x (static site generation)
- **Styling:** CSS variables + scoped component styles
- **i18n:** Built-in Astro i18n routing
- **Content:** Astro Content Collections (Markdown blog posts)
- **Deployment:** GitHub Pages (Actions workflow included)
- **SEO:** hreflang tags, Open Graph, JSON-LD schema

---

## 📁 Project Structure

```
src/
├── components/       # Header, Footer, Hero, Services, Contact, etc.
├── content/
│   ├── blog/
│   │   ├── pl/       # Polish blog posts (.md)
│   │   ├── en/       # English blog posts (.md)
│   │   └── de/       # German blog posts (.md)
│   └── config.ts     # Content collection schema (Zod)
├── i18n/
│   ├── config.ts     # Locale config & path helpers
│   └── ui.ts         # ALL UI strings in 3 languages (single source of truth)
├── layouts/
│   ├── BaseLayout.astro      # SEO, meta tags, hreflang, JSON-LD
│   └── BlogPostLayout.astro
├── lib/blog.ts       # Blog helpers (sorting, slugs, dates)
├── pages/
│   ├── index.astro           # Polish homepage (/)
│   ├── blog/                 # Polish blog index & posts
│   ├── en/                   # English pages (/en/)
│   ├── de/                   # German pages (/de/)
│   └── polityka-prywatnosci.astro  # Privacy policy (PL/EN/DE versions)
├── styles/global.css # CSS variables, typography, global styles
└── assets/           # Images (optimized via Astro <Image>)

public/
└── logo.png          # Company logo (favicon + OG fallback)

.github/workflows/
└── deploy.yml        # GitHub Actions deployment to Pages
```

---

## 🎨 Key Features

### i18n / Multilingual
- Polish = default locale (no URL prefix: `/`)
- English → `/en/`, German → `/de/`
- Language switcher in header + footer
- All UI text centralized in `src/i18n/ui.ts`
- Blog posts per language with `translationKey` linking
- Full hreflang support for SEO

### Styling
- CSS variables in `src/styles/global.css`
- Color palette from logo: Graphite `#2a2d31`, Red `#e30613`, Sand `#cfc896`
- No CSS framework — plain CSS + scoped styles
- Fully responsive

### Blog System
- Markdown posts with frontmatter
- Automatic collection via `getCollection('blog')`
- 3 latest posts on homepage
- Full blog index at `/blog` (per language)
- Cover images, tags, draft support

### SEO
- Dynamic `<title>` and `<meta description>` per page
- Open Graph + Twitter Cards
- hreflang for all locales
- JSON-LD Organization schema
- Sitemap via `@astrojs/sitemap`

---

## ✏️ Content Editing

### Update UI Text
**All UI strings live in one file:** `src/i18n/ui.ts`

```typescript
// Example: Change contact email
export const ui: Record<Locale, Dict> = {
  pl: {
    contact: {
      info: {
        email: 'produkcja@precimet.pl',  // ← Edit here
      }
    }
  },
  en: { /* ... */ },
  de: { /* ... */ },
};
```

**No hardcoded strings in components** — everything pulls from `ui.ts`.

### Add a Blog Post

1. Create file: `src/content/blog/{pl|en|de}/my-post.md`
2. Add frontmatter:

```yaml
---
title: "Post Title"
description: "Excerpt for list and meta description"
date: 2026-08-02
lang: pl                     # Must match folder (pl/en/de)
cover: "https://..."         # Optional cover image
tags: ["case study"]         # Optional
translationKey: "my-post"    # Optional: links translations
draft: false                 # Optional: hide from production
---

Post content in Markdown...
```

3. Save → appears automatically on `/blog` and homepage (3 latest).

### Change Colors

Edit CSS variables in `src/styles/global.css`:

```css
:root {
  --color-primary: #2a2d31;    /* Graphite */
  --color-accent: #e30613;     /* Red */
  --color-sand: #cfc896;       /* Sand */
}
```

---

## 🌍 Deployment

### Current: GitHub Pages Staging
- **URL:** `https://kuba2901.github.io/precimet-oem/`
- **Config:** `site: 'https://kuba2901.github.io'`, `base: '/precimet-oem/'`
- **Auto-deploy:** Push to `main` → GitHub Actions builds → live in ~2-3 minutes

### Future: Custom Domain Production
After client approval, switch to production domain:

1. Update `astro.config.mjs`:
```javascript
export default defineConfig({
  site: 'https://3d-laser.pl',
  base: '/',  // Root path for custom domain
  // ...
});
```

2. Commit + push
3. Configure GitHub Pages:
   - Settings → Pages → Custom domain: `3d-laser.pl`
   - DNS: CNAME `3d-laser.pl` → `kuba2901.github.io`
4. Wait for SSL provisioning (~5-10 min)
5. Site live at `https://3d-laser.pl`

---

## 📋 Pre-Launch Checklist

### Content
- [x] Real contact details (phone, email, address)
- [x] Company registration info (NIP, KRS) in footer
- [ ] Replace stock photos with real facility/equipment photos
- [ ] Add real client logos in Industries section
- [ ] Review EN/DE translations with native speaker

### Technical
- [ ] Connect contact form backend (currently placeholder)
- [ ] Add success/error handling to form
- [x] Privacy policy pages created (PL/EN/DE)
- [ ] Generate custom OG image (1200×630)
- [ ] Add `robots.txt` in `public/`
- [ ] Test all 3 languages on mobile devices
- [ ] Run Lighthouse audit (perf, a11y, SEO)

### SEO & Analytics
- [ ] Submit to Google Search Console (all 3 locales)
- [ ] Configure analytics (Plausible/Umami recommended)
- [ ] Verify sitemap: `/sitemap-index.xml`

---

## 🔧 Configuration Files

- **`astro.config.mjs`** — Site URL, base path, i18n, sitemap
- **`src/i18n/config.ts`** — Locales, routing helpers
- **`src/i18n/ui.ts`** — All UI text (3 languages)
- **`src/content.config.ts`** — Blog collection schema
- **`.github/workflows/deploy.yml`** — Auto-deployment to GitHub Pages

---

## 🧪 Testing

### Local Build Test
```bash
npm run build
npm run preview
# Visit http://localhost:4321/precimet-oem/
```

### Live Deployment Test
After pushing to GitHub:
1. Monitor: `https://github.com/kuba2901/precimet-oem/actions`
2. Wait ~2-3 minutes for deployment
3. Visit: `https://kuba2901.github.io/precimet-oem/`
4. Check all 3 languages: `/`, `/en/`, `/de/`
5. Verify logo, navigation, blog posts, contact info

---

## 🔄 Environment-Aware Routing

The `path()` helper in `src/i18n/config.ts` automatically adapts to the environment:

| Environment | `import.meta.env.BASE_URL` | `path('pl', '/')` | `path('en', '/blog')` |
|-------------|---------------------------|-------------------|---------------------|
| **Dev** (`npm run dev`) | `/` | `/` | `/en/blog` |
| **Staging** (GitHub Pages) | `/precimet-oem/` | `/precimet-oem/` | `/precimet-oem/en/blog` |
| **Production** (custom domain) | `/` | `/` | `/en/blog` |

No code changes needed when switching environments — controlled via `base` in `astro.config.mjs`.

---

## 📞 Support & Maintenance

- **Hosted by:** GitHub Pages (static files, no server)
- **Build time:** ~2-3 seconds
- **No database, no API** — fully static
- **Content updates:** Edit Markdown files, push to git
- **Text updates:** Edit `src/i18n/ui.ts`, push to git

---

## 📄 Company Details

© 2026 PRECIMET H.C.E. Sp. z o.o. All rights reserved.

- **NIP:** 728-280-49-18
- **KRS:** 0000587797
- **REGON:** 363114171
- **Address:** ul. Pomorska 555, 92-735 Łódź, Poland
- **ISO 9001:2015** certified quality management system
- **Share capital:** PLN 100,000
