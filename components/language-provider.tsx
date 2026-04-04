'use client'

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

import {
  DEFAULT_LANGUAGE,
  LANGUAGE_COOKIE_NAME,
  LANGUAGE_STORAGE_KEY,
  type Language,
  type LocalizedValue,
  getDateLocale,
  getLocalizedField,
  isLanguage,
  replaceTemplate,
} from '@/lib/i18n'

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  t: <T>(value: LocalizedValue<T>) => T
  field: <T>(trValue: T | null | undefined, enValue: T | null | undefined) => T | null | undefined
  formatDate: (value: string | Date) => string
  template: (value: LocalizedValue<string>, replacements: Record<string, string>) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

type LanguageProviderProps = {
  children: ReactNode
  initialLanguage?: Language
}

export function LanguageProvider({
  children,
  initialLanguage = DEFAULT_LANGUAGE,
}: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(initialLanguage)

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)

    if (isLanguage(storedLanguage) && storedLanguage !== language) {
      setLanguage(storedLanguage)
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
    document.cookie = `${LANGUAGE_COOKIE_NAME}=${language}; path=/; max-age=31536000; samesite=lax`
  }, [language])

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      t: <T,>(localizedValue: LocalizedValue<T>) => localizedValue[language],
      field: <T,>(trValue: T | null | undefined, enValue: T | null | undefined) =>
        getLocalizedField(language, trValue, enValue),
      formatDate: (value) =>
        new Intl.DateTimeFormat(getDateLocale(language), {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }).format(typeof value === 'string' ? new Date(value) : value),
      template: (localizedValue, replacements) =>
        replaceTemplate(localizedValue[language], replacements),
    }),
    [language],
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider.')
  }

  return context
}
