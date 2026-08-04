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

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages at `https://www.csepulveda.cl/`.

To enable it the first time: repo **Settings → Pages → Source → GitHub Actions**.

The custom domain is set via `public/CNAME`, which Vite copies into `dist/` on every build. Keep it in the repo — GitHub Actions deployments replace the whole published artifact each time, so without this file the next deploy would silently drop the custom domain.
