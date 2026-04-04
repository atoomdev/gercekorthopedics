export type Language = 'tr' | 'en'

export type LocalizedValue<T> = {
  tr: T
  en: T
}

export const DEFAULT_LANGUAGE: Language = 'tr'
export const LANGUAGE_STORAGE_KEY = 'gercekortopedi-language'
export const LANGUAGE_COOKIE_NAME = 'gercekortopedi-language'

export function isLanguage(value: unknown): value is Language {
  return value === 'tr' || value === 'en'
}

export function getLocalizedValue<T>(
  value: LocalizedValue<T>,
  language: Language,
): T {
  return value[language]
}

export function getLocalizedField<T>(
  language: Language,
  trValue: T | null | undefined,
  enValue: T | null | undefined,
): T | null | undefined {
  return language === 'en' ? enValue ?? trValue : trValue ?? enValue
}

export function replaceTemplate(
  template: string,
  values: Record<string, string>,
): string {
  return Object.entries(values).reduce(
    (result, [key, value]) => result.replaceAll(`{${key}}`, value),
    template,
  )
}

export function getDateLocale(language: Language) {
  return language === 'en' ? 'en-US' : 'tr-TR'
}
