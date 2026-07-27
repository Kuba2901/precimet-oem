# Precimet OEM Manufacturing — strona firmowa (Astro)

Nowoczesna, trójjęzyczna (PL/EN/DE) strona B2B dla marki **Precimet OEM Manufacturing** — kooperacja w obróbce metalu.

## Szybki start

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # produkcyjny build do ./dist
npm run preview   # podgląd builda
```

## Struktura projektu

```
├── astro.config.mjs          # konfiguracja Astro + i18n + sitemap
├── public/
│   └── logo.png              # logo firmy (favicon + OG)
└── src/
    ├── content.config.ts     # definicja kolekcji bloga (Zod schema)
    ├── content/blog/
    │   ├── pl/  en/  de/     # wpisy Markdown per język
    ├── i18n/
    │   ├── config.ts         # języki, helpery ścieżek
    │   └── ui.ts             # CAŁA treść strony w 3 językach
    ├── lib/blog.ts           # helpery bloga (sortowanie, slugi, daty)
    ├── layouts/
    │   ├── BaseLayout.astro  # <head>, SEO, OG, hreflang, JSON-LD
    │   └── BlogPostLayout.astro
    ├── components/           # Header, Footer, Hero, Services, ...
    ├── styles/global.css     # CSS variables (paleta z logo), typografia
    └── pages/
        ├── index.astro           # /        (PL — domyślny)
        ├── blog/                 # /blog, /blog/[slug]
        ├── en/                   # /en, /en/blog, /en/blog/[slug]
        └── de/                   # /de, /de/blog, /de/blog/[slug]
```

## Języki

- Polski = język domyślny, bez prefiksu (`/`).
- Angielski pod `/en`, niemiecki pod `/de`.
- Przełącznik języka jest w nagłówku i stopce (`LanguageSwitcher.astro`).
- Każda strona emituje tagi `hreflang` i zlokalizowane meta/OG.
- **Zmiana treści**: edytuj `src/i18n/ui.ts` — komponenty nie zawierają tekstów na sztywno.

## Blog — jak dodać wpis (bez dotykania kodu)

1. Utwórz plik `src/content/blog/<pl|en|de>/nazwa-wpisu.md`.
2. Wypełnij frontmatter:

```yaml
---
title: "Tytuł wpisu"
description: "Zajawka widoczna na liście i w meta description"
date: 2026-07-15
lang: pl                      # pl | en | de — musi zgadzać się z folderem
cover: "https://..."          # opcjonalne zdjęcie
tags: ["case study"]          # opcjonalne
translationKey: "moj-wpis"    # opcjonalne — spina wersje językowe
draft: true                   # opcjonalne — ukrywa wpis do czasu publikacji
---
```

3. Napisz treść w Markdown. Wpis pojawi się automatycznie na liście
   (`/blog`) i na stronie głównej (3 najnowsze).

## Kolorystyka

Cała paleta to CSS variables w `src/styles/global.css` (`:root`).
Kolory wyprowadzone z logo: grafit `#2a2d31`, czerwień `#e30613`,
piaskowy `#cfc896`. Zmiana jednej zmiennej przemalowuje całą stronę.

---

## ✅ Checklista przed publikacją

**Treść i dane**
- [ ] Uzupełnij prawdziwy adres, telefon i e-mail w `src/i18n/ui.ts` (sekcja `contact.info`) — obecnie są placeholdery.
- [ ] Zweryfikuj godziny pracy i czas odpowiedzi na zapytania.
- [ ] Podmień stockowe zdjęcia (Unsplash) na własne zdjęcia hali i maszyn — najlepiej lokalne pliki w `src/assets/` z komponentem `<Image>` z Astro dla automatycznej optymalizacji.
- [ ] Dodaj prawdziwe logotypy klientów w sekcji „Branże" (obecnie kafelki tekstowe).
- [ ] Przejrzyj tłumaczenia EN/DE z native speakerem lub tłumaczem technicznym.

**Formularz kontaktowy**
- [ ] Podłącz backend formularza (`Contact.astro` → atrybut `action`): Formspree, Netlify Forms, własny endpoint lub API mailowe.
- [ ] Dodaj komunikat potwierdzenia wysłania i obsługę błędów.
- [ ] Dodaj politykę prywatności / RODO i podlinkuj ją przy checkboxie zgody.

**SEO i domena**
- [ ] Ustaw docelową domenę w `astro.config.mjs` (`site:`).
- [ ] Wygeneruj dedykowaną grafikę OG (1200×630) zamiast logo.
- [ ] Dodaj `robots.txt` w `public/` ze wskazaniem sitemap (`/sitemap-index.xml`).
- [ ] Zgłoś stronę do Google Search Console (wszystkie wersje językowe).

**Prawne**
- [ ] Polityka prywatności i informacja o cookies (jeśli dodasz analitykę).
- [ ] Pełne dane rejestrowe firmy (NIP, KRS/CEIDG) w stopce.

**Techniczne**
- [ ] `npm run build` + test na urządzeniach mobilnych.
- [ ] Lighthouse: wydajność, dostępność, SEO.
- [ ] Skonfiguruj hosting (np. Netlify, Vercel, Cloudflare Pages) i certyfikat SSL.
- [ ] Rozważ analitykę przyjazną prywatności (np. Plausible, Umami).
