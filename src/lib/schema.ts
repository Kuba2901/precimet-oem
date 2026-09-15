import { LOCALES, path, type Locale } from '../i18n/config';

/**
 * Schema.org — jedno źródło prawdy dla całego serwisu.
 *
 * Dane firmy (NAP) były wcześniej tylko na stronach /contact; `BaseLayout`
 * wystawiał okrojony `Organization` bez ulicy, kodu i telefonu. Tu leży pełny
 * `LocalBusiness`, którego używa każda strona.
 *
 * Godziny pracy muszą zgadzać się z `contact.info.hours` w `src/i18n/ui.ts`
 * (Pon–Pt 8:00–16:00).
 */

export const LEGAL_NAME = 'PRECIMET H.C.E. Sp. z o.o.';
export const BRAND_NAME = 'Precimet OEM Manufacturing';

/** Główny numer działu produkcji — ten sam, który widnieje w stopce. */
export const PHONE = '+48422080402';

/**
 * Dane rejestrowe zweryfikowane 2026-09-13 w KRS (api-krs.ms.gov.pl),
 * na Białej liście VAT (wl-api.mf.gov.pl) i w VIES. Wcześniej w serwisie
 * krążył KRS 0000503010 (należy do innej spółki) i NIP PL7272841275
 * (nie istnieje) — nie przywracać.
 */
export const KRS = '0000587797';
export const NIP = '7282804918';
export const VAT_ID = 'PL7282804918';
export const REGON = '363114171';

export const ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: 'ul. Pomorska 555',
  addressLocality: 'Łódź',
  postalCode: '92-735',
  addressCountry: 'PL',
} as const;

/** Współrzędne zakładu — te same, co w linku "dojazd" w stopce. */
export const GEO = {
  '@type': 'GeoCoordinates',
  latitude: 51.7854674,
  longitude: 19.5891212,
} as const;

export const OPENING_HOURS = {
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  opens: '08:00',
  closes: '16:00',
} as const;

/**
 * Pełny profil firmy. `@id` jest stały, więc pozostałe węzły (BreadcrumbList,
 * BlogPosting) mogą się do niego odwoływać zamiast powielać dane.
 */
export function organizationSchema(site: URL, description: string) {
  const id = new URL('/#organization', site).href;
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': id,
    name: BRAND_NAME,
    legalName: LEGAL_NAME,
    url: site.href,
    logo: new URL(`${import.meta.env.BASE_URL}logo.png`, site).href,
    image: new URL(`${import.meta.env.BASE_URL}og-image.jpg`, site).href,
    description,
    telephone: PHONE,
    taxID: NIP,
    vatID: VAT_ID,
    address: ADDRESS,
    geo: GEO,
    openingHoursSpecification: OPENING_HOURS,
    availableLanguage: LOCALES.map((l) => l.toUpperCase()),
  };
}

export const ORGANIZATION_ID = (site: URL) => new URL('/#organization', site).href;

/**
 * Strona typu ContactPage / AboutPage. Dane firmy nie są tu powielane — węzeł
 * wskazuje przez `@id` na `LocalBusiness` wystawiony przez `BaseLayout`.
 */
export function pageEntitySchema(
  site: URL,
  type: 'ContactPage' | 'AboutPage',
  name: string,
  description: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    name,
    description,
    mainEntity: { '@id': ORGANIZATION_ID(site) },
  };
}

/**
 * Okruszki z bieżącej ścieżki. Serwis ma płaską hierarchię, więc wystarczy
 * "strona główna → sekcja → (wpis)". Na stronie głównej zwraca `null`.
 */
export function breadcrumbSchema(
  site: URL,
  locale: Locale,
  basePath: string,
  homeLabel: string,
  crumbs: { label: string; path: string }[]
) {
  if (crumbs.length === 0 || basePath === '/') return null;

  const items = [
    { name: homeLabel, item: new URL(path(locale, '/'), site).href },
    ...crumbs.map((c) => ({ name: c.label, item: new URL(path(locale, c.path), site).href })),
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((entry, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: entry.name,
      item: entry.item,
    })),
  };
}

/** Wpis bloga — autorem jest firma, wydawcę bierzemy przez `@id`. */
export function blogPostingSchema(
  site: URL,
  opts: {
    url: string;
    headline: string;
    description: string;
    datePublished: Date;
    image?: string;
    locale: Locale;
    keywords?: string[];
  }
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: { '@type': 'WebPage', '@id': opts.url },
    url: opts.url,
    headline: opts.headline,
    description: opts.description,
    datePublished: opts.datePublished.toISOString(),
    dateModified: opts.datePublished.toISOString(),
    inLanguage: opts.locale,
    ...(opts.image ? { image: new URL(opts.image, site).href } : {}),
    ...(opts.keywords?.length ? { keywords: opts.keywords.join(', ') } : {}),
    author: { '@id': ORGANIZATION_ID(site) },
    publisher: { '@id': ORGANIZATION_ID(site) },
  };
}
