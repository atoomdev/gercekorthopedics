'use client'

import { useLanguage } from '@/components/language-provider'
import { navbarCopy } from '@/lib/site-content'

const languages = [
  { code: 'tr', label: 'TR' },
  { code: 'en', label: 'EN' },
] as const

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <div
      aria-label={t(navbarCopy.languageSwitcherLabel)}
      className="inline-flex items-center rounded-full border border-border bg-white px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground shadow-[0_10px_25px_rgba(10,34,57,0.04)]"
    >
      {languages.map((item, index) => (
        <div key={item.code} className="inline-flex items-center">
          <button
            type="button"
            onClick={() => setLanguage(item.code)}
            className={`rounded-full px-2 py-1 transition ${
              language === item.code
                ? 'text-primary'
                : 'text-muted-foreground hover:text-primary'
            }`}
            aria-pressed={language === item.code}
          >
            {item.label}
          </button>
          {index < languages.length - 1 ? (
            <span className="px-0.5 text-border">|</span>
          ) : null}
        </div>
      ))}
    </div>
  )
}
