import type { Locale } from '../data/content'

/** Resolves to the locale-specific generated résumé, e.g. '/CV_EN.pdf' or '/CV_ES.pdf'. */
export function getPdfHref(locale: Locale): string {
  return `${import.meta.env.BASE_URL}CV_${locale.toUpperCase()}.pdf`
}
