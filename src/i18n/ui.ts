// src/i18n/ui.ts
// Central config for supported languages. Add new languages here and
// create a matching `src/i18n/<code>.ts` dictionary file.

export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'es';

// If false, the default language has no URL prefix (e.g. "/" instead of "/es/").
export const showDefaultLangInUrl = false;
