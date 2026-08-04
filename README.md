# cv-web

Christian Sepúlveda's CV, built as a static React + TypeScript site with English/Spanish switching.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output goes to `dist/`.

## PDF résumés

`public/CV_EN.pdf` and `public/CV_ES.pdf` are generated, not checked in — both
`npm run dev` and `npm run build` run `npm run generate:pdf` first, which
renders them from the same content in `src/data/en.ts` / `es.ts` (plus
PDF-only sections in `pdf/resumeExtras.ts`) using `@react-pdf/renderer`.

Job durations ("3 years", "11 months", ...) are computed from each
experience entry's `startDate`/`endDate` at generation time (see
`src/utils/formatPeriod.ts`), so they stay accurate on every rebuild without
manual edits — including on the website's Experience cards, which use the
same function.

To regenerate the PDFs on their own:

```bash
npm run generate:pdf
```

To change the résumé layout, edit `pdf/ResumeDocument.tsx`.

## QR code

`public/qr-cv.png` is also generated (not checked in), pointing at
`https://www.csepulveda.cl/`. It's embedded in the Contact section and can
also be saved straight from the live site for printing or sharing elsewhere.
To change the target URL or styling, edit `scripts/generate-qr.ts`.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages at `https://www.csepulveda.cl/`.

To enable it the first time: repo **Settings → Pages → Source → GitHub Actions**.

The custom domain is set via `public/CNAME`, which Vite copies into `dist/` on every build. Keep it in the repo — GitHub Actions deployments replace the whole published artifact each time, so without this file the next deploy would silently drop the custom domain.
