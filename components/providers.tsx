'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'

type Language = 'tr' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (tr: string, en: string) => string
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'tr',
  setLanguage: () => {},
  t: (tr) => tr,
})

export function useLanguage() {
  return useContext(LanguageContext)
}

export function Providers({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('tr')

  const t = (tr: string, en: string) => language === 'tr' ? tr : en

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
