// src/i18n/utils.ts
import { defaultLang, languages, type Lang } from './ui';
import { es } from './es';
import { en } from './en';

const dictionaries = { es, en } as const;

/**
 * Returns the translation dictionary for a given language,
 * falling back to the default language dictionary.
 */
export function useTranslations(lang: string | undefined) {
  const key = (lang && lang in dictionaries ? lang : defaultLang) as keyof typeof dictionaries;
  return dictionaries[key];
}

/** Detects the language from a request URL (e.g. "/en/" -> "en"). */
export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split('/');
  if (maybeLang && maybeLang in languages) return maybeLang as Lang;
  return defaultLang;
}

/** Builds the root path for a given language ("/" for the default, "/en/" otherwise). */
export function getLocalizedPath(lang: Lang): string {
  return lang === defaultLang ? '/' : `/${lang}/`;
}

/** Returns the list of { lang, path, label } for every OTHER supported language, for a switcher UI. */
export function getAlternateLanguages(currentLang: Lang) {
  return (Object.keys(languages) as Lang[])
    .filter((lang) => lang !== currentLang)
    .map((lang) => ({
      lang,
      path: getLocalizedPath(lang),
      label: languages[lang],
    }));
}

export type { Lang };
export { languages, defaultLang };
