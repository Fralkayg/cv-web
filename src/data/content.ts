import { en } from './en'
import { es } from './es'
import type { CVContent } from './types'

export type Locale = 'en' | 'es'

export const content: Record<Locale, CVContent> = { en, es }

export const locales: Locale[] = ['en', 'es']
