export function parseTechnologies(raw: string): string[] {
  return raw
    .replace(/\.$/, '')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean)
}
