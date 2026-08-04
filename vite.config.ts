import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from a custom domain at the root (https://www.csepulveda.cl/), not a
// GitHub Pages project subpath, so assets resolve from '/'.
export default defineConfig({
  base: '/',
  plugins: [react()],
})
