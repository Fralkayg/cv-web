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

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages at `https://<username>.github.io/cv-web/`.

To enable it the first time: repo **Settings → Pages → Source → GitHub Actions**.
