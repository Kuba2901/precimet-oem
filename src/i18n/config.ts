export const LOCALES = ['pl', 'en', 'de'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'pl';

export const LOCALE_LABELS: Record<Locale, string> = {
  pl: 'PL',
  en: 'EN',
  de: 'DE',
};

export const LOCALE_NAMES: Record<Locale, string> = {
  pl: 'Polski',
  en: 'English',
  de: 'Deutsch',
};

export const OG_LOCALES: Record<Locale, string> = {
  pl: 'pl_PL',
  en: 'en_US',
  de: 'de_DE',
};

/** Prefiks URL dla danego języka ('' dla polskiego). */
export function localePrefix(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? '' : `/${locale}`;
}

/** Buduje ścieżkę w danym języku, np. path('en', '/blog') -> '/precimet-oem/en/blog'. */
export function path(locale: Locale, p: string = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, ''); // '/precimet-oem' or ''
  const prefix = localePrefix(locale);                       // '' or '/en' or '/de'
  const clean = p.startsWith('/') ? p : `/${p}`;
  const joined = `${base}${prefix}${clean}`;
  return joined || '/';
}

/** Odczytuje język z URL-a (np. /precimet-oem/en/blog -> 'en'). */
export function localeFromUrl(url: URL): Locale {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const pathname = base ? url.pathname.replace(new RegExp(`^${base}`), '') || '/' : url.pathname;
  const [, first] = pathname.split('/');
  if (LOCALES.includes(first as Locale) && first !== DEFAULT_LOCALE) {
    return first as Locale;
  }
  return DEFAULT_LOCALE;
}

/** Mapa przetłumaczonych ścieżek między językami dla stron o unikalnych slugach */
export const ROUTE_MAP: Record<string, Record<Locale, string>> = {
  '/polityka-prywatnosci': {
    pl: '/polityka-prywatnosci',
    en: '/privacy-policy',
    de: '/datenschutz',
  },
  '/privacy-policy': {
    pl: '/polityka-prywatnosci',
    en: '/privacy-policy',
    de: '/datenschutz',
  },
  '/datenschutz': {
    pl: '/polityka-prywatnosci',
    en: '/privacy-policy',
    de: '/datenschutz',
  },
  '/dziekujemy': {
    pl: '/dziekujemy',
    en: '/thank-you',
    de: '/danke',
  },
  '/thank-you': {
    pl: '/dziekujemy',
    en: '/thank-you',
    de: '/danke',
  },
  '/danke': {
    pl: '/dziekujemy',
    en: '/thank-you',
    de: '/danke',
  },
};

/** Zwraca przetłumaczoną ścieżkę dla docelowego języka, uwzględniając unikalne slugi */
export function localizedPath(targetLocale: Locale, currentPath: string = '/'): string {
  const clean = currentPath.startsWith('/') ? currentPath : `/${currentPath}`;
  const normalized = clean.replace(/\/$/, '') || '/';
  const mapped = ROUTE_MAP[normalized];
  if (mapped) {
    return path(targetLocale, mapped[targetLocale]);
  }
  return path(targetLocale, clean);
}

/** Ścieżka bez prefiksu językowego i base URL (np. /precimet-oem/en/blog -> /blog). */
export function stripLocale(url: URL): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const locale = localeFromUrl(url);
  let pathname = base ? url.pathname.replace(new RegExp(`^${base}`), '') || '/' : url.pathname;
  if (locale === DEFAULT_LOCALE) return pathname;
  const stripped = pathname.replace(new RegExp(`^/${locale}`), '');
  return stripped === '' ? '/' : stripped;
}
