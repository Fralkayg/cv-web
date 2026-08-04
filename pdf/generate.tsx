import path from 'node:path'
import React from 'react'
import { renderToFile } from '@react-pdf/renderer'
import { locales } from '../src/data/content'
import { en } from '../src/data/en'
import { es } from '../src/data/es'
import { ResumeDocument } from './ResumeDocument'
import { resumeExtras } from './resumeExtras'
import type { CVContent } from '../src/data/types'

const content: Record<(typeof locales)[number], CVContent> = { en, es }

async function main() {
  const outDir = path.resolve(process.cwd(), 'public')

  for (const locale of locales) {
    const extras = resumeExtras[locale]
    const outPath = path.join(outDir, extras.fileName)
    await renderToFile(
      <ResumeDocument content={content[locale]} extras={extras} locale={locale} />,
      outPath,
    )
    console.log(`Generated ${extras.fileName}`)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
