import type { DurationLabels, ExperienceEntry } from '../data/types'
import type { Locale } from '../data/content'

const MONTH_NAMES: Record<Locale, string[]> = {
  en: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  es: [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ],
}

function parseYearMonth(value: string): { year: number; month: number } {
  const [year, month] = value.split('-').map(Number)
  return { year, month: month - 1 } // zero-indexed month, matching Date
}

function formatMonthYear(value: string, locale: Locale): string {
  const { year, month } = parseYearMonth(value)
  return `${MONTH_NAMES[locale][month]} ${year}`
}

function formatDuration(totalMonths: number, labels: DurationLabels): string {
  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12

  const parts: string[] = []
  if (years > 0) parts.push(`${years} ${years === 1 ? labels.yearSingular : labels.yearPlural}`)
  if (months > 0) parts.push(`${months} ${months === 1 ? labels.monthSingular : labels.monthPlural}`)

  return parts.length > 0 ? parts.join(' ') : `0 ${labels.monthPlural}`
}

/**
 * Formats an experience entry's date range plus its duration, e.g.
 * "August 2023 - Present (3 years)" or "January 2020 - September 2022 (2 years 9 months)".
 *
 * Closed ranges count months inclusively (both the start and end month count as worked).
 * Open-ended ("present") ranges count elapsed calendar months from the start month to now.
 */
export function formatPeriod(
  entry: Pick<ExperienceEntry, 'startDate' | 'endDate'>,
  locale: Locale,
  labels: DurationLabels,
  now: Date = new Date(),
): string {
  const start = parseYearMonth(entry.startDate)
  const startLabel = formatMonthYear(entry.startDate, locale)

  if (entry.endDate === null) {
    const nowTotal = now.getFullYear() * 12 + now.getMonth()
    const startTotal = start.year * 12 + start.month
    const totalMonths = Math.max(nowTotal - startTotal, 0)
    return `${startLabel} - ${labels.present} (${formatDuration(totalMonths, labels)})`
  }

  const end = parseYearMonth(entry.endDate)
  const endLabel = formatMonthYear(entry.endDate, locale)
  const totalMonths = (end.year - start.year) * 12 + (end.month - start.month) + 1

  return `${startLabel} - ${endLabel} (${formatDuration(totalMonths, labels)})`
}
