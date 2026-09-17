// Generates public/og-image.jpg (1200x630 share image) and
// public/apple-touch-icon.png. Run once after changing the hero photo:
//   node scripts/make-brand-assets.js
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const pub = path.join(root, 'public')
const hero = path.join(root, 'src/assets/images/source/home-hero-cabinet.jpg')

const overlay = Buffer.from(`
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#141618" opacity="0.72"/>
  <rect x="0" y="0" width="560" height="630" fill="#141618" opacity="0.6"/>
  <text x="72" y="170" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="88" fill="#eef0ec" letter-spacing="-4">exQ<tspan fill="#07bfc2">.</tspan></text>
  <text x="72" y="300" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="54" fill="#eef0ec" letter-spacing="-1.5">Technology that works</text>
  <text x="72" y="364" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="54" fill="#eef0ec" letter-spacing="-1.5">for your business.</text>
  <text x="72" y="450" font-family="Arial, Helvetica, sans-serif" font-size="28" fill="#aeb4b1">IT support · Cloud · Cybersecurity · Networks · Hosting · Consulting</text>
  <rect x="72" y="520" width="150" height="34" fill="#f7f7f2"/>
  <text x="84" y="544" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="18" fill="#111314" letter-spacing="1.5">EXQ.SERVICES</text>
</svg>`)

await sharp(hero)
  .resize(1200, 630, { fit: 'cover', position: 'right' })
  .composite([{ input: overlay }])
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(path.join(pub, 'og-image.jpg'))

const icon = Buffer.from(`
<svg width="180" height="180" xmlns="http://www.w3.org/2000/svg">
  <rect width="180" height="180" fill="#141618"/>
  <text x="30" y="128" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="110" fill="#eef0ec" letter-spacing="-4">Q</text>
  <rect x="124" y="104" width="24" height="24" fill="#07bfc2"/>
</svg>`)

await sharp(icon).png().toFile(path.join(pub, 'apple-touch-icon.png'))
console.log('wrote public/og-image.jpg and public/apple-touch-icon.png')
