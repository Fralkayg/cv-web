import path from 'node:path'
import QRCode from 'qrcode'

const SITE_URL = 'https://www.csepulveda.cl/'

async function main() {
  const outPath = path.resolve(process.cwd(), 'public', 'qr-cv.png')

  await QRCode.toFile(outPath, SITE_URL, {
    width: 512,
    margin: 2,
    color: {
      dark: '#0a5860',
      light: '#ffffff',
    },
  })

  console.log(`Generated qr-cv.png -> ${SITE_URL}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
