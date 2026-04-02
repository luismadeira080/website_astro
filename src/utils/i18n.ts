// i18n utilities for bilingual support

/**
 * Get the current locale from the URL pathname
 * @param pathname - Current URL pathname
 * @returns Locale code ('en' or 'pt')
 */
export function getLocaleFromPath(pathname: string): string {
  if (pathname.startsWith('/pt')) {
    return 'pt';
  }
  return 'en';
}

/**
 * Path mappings between English and Portuguese pages
 */
const pathMappings: Record<string, { en: string; pt: string }> = {
  home: { en: '/', pt: '/pt/' },
  about: { en: '/about', pt: '/pt/sobre' },
  consulting: { en: '/consulting', pt: '/pt/consultoria' },
  projects: { en: '/projects', pt: '/pt/projetos' },
  contact: { en: '/ai-contact', pt: '/pt/ai-contact' },
};

/**
 * Get the alternate path for the other language
 * @param pathname - Current URL pathname
 * @param currentLocale - Current locale
 * @returns Path in the other language
 */
export function getAlternatePath(pathname: string, currentLocale: string): string {
  // Normalize pathname (remove trailing slash except for root)
  const normalizedPath = pathname === '/' ? '/' : pathname.replace(/\/$/, '');

  // Find matching mapping
  for (const mapping of Object.values(pathMappings)) {
    if (currentLocale === 'en' && mapping.en === normalizedPath) {
      return mapping.pt;
    }
    if (currentLocale === 'pt' && mapping.pt === normalizedPath) {
      return mapping.en;
    }
  }

  // Fallback: if no mapping found, use simple prefix logic
  if (currentLocale === 'en') {
    return `/pt${normalizedPath}`;
  } else {
    return normalizedPath.replace('/pt', '') || '/';
  }
}
