import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { content, locales, type Locale } from '../data/content'
import type { CVContent } from '../data/types'

interface LanguageContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: CVContent
}

const STORAGE_KEY = 'cv-locale'

const LanguageContext = createContext<LanguageContextValue | null>(null)

function getInitialLocale(): Locale {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored && locales.includes(stored as Locale)) return stored as Locale

  const browserLang = navigator.language.toLowerCase()
  if (browserLang.startsWith('es')) return 'es'
  return 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale)

  const setLocale = (next: Locale) => {
    setLocaleState(next)
    localStorage.setItem(STORAGE_KEY, next)
  }

  useEffect(() => {
    const t = content[locale]
    document.documentElement.lang = t.meta.htmlLang
    document.title = t.meta.pageTitle
  }, [locale])

  const value = useMemo<LanguageContextValue>(
    () => ({ locale, setLocale, t: content[locale] }),
    [locale],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
