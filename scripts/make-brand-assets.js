// Generates the brand files in public/ from the site's colour tokens:
//   favicon.svg, apple-touch-icon.png (180×180), logo.png (512×512, used by
//   the Organization JSON-LD) and og-image.jpg (1200×630 share image).
// Replace with Jamal's final logo files when they arrive. Run:
//   node scripts/make-brand-assets.js
import { writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const pub = path.join(root, 'public')

// Light-theme tokens (src/styles/tokens.css)
const c = { bg: '#FFFFFF', text: '#0F1E36', muted: '#4A5568', primary: '#2F6FED', accent: '#14B8A6', tint: '#EDF3FE', border: '#E3E8EF' }
const font = "'Plus Jakarta Sans', 'Segoe UI', Arial, Helvetica, sans-serif"

const mark = (size, radius) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="${radius}" fill="${c.primary}"/>
  <text x="11" y="47" font-family="${font}" font-weight="700" font-size="42" fill="${c.bg}" letter-spacing="-2">Q</text>
  <circle cx="50" cy="44" r="4.5" fill="${c.accent}"/>
</svg>`

await writeFile(path.join(pub, 'favicon.svg'), mark(64, 14).trim() + '\n')
await sharp(Buffer.from(mark(180, 0))).png().toFile(path.join(pub, 'apple-touch-icon.png'))
await sharp(Buffer.from(mark(512, 14))).png().toFile(path.join(pub, 'logo.png'))

const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${c.tint}"/>
  <g fill="none" stroke="${c.primary}" stroke-width="2" opacity="0.35">
    <circle cx="980" cy="330" r="250"/>
    <circle cx="980" cy="330" r="170" stroke-dasharray="3 10"/>
  </g>
  <g fill="none" stroke="${c.primary}" stroke-width="3">
    <path d="M860 420c-40 0-70-30-70-67 0-35 27-64 62-67 10-50 55-87 108-87 46 0 85 27 102 66 9-3 19-5 29-5 46 0 83 37 83 83 0 3 0 7-1 10 25 10 41 35 41 63 0 3-1 5-3 5H860z" opacity="0.9"/>
  </g>
  <text x="80" y="140" font-family="${font}" font-weight="700" font-size="64" fill="${c.text}" letter-spacing="-2">ex<tspan fill="${c.primary}">Q</tspan><tspan fill="${c.accent}">.</tspan></text>
  <text font-family="${font}" font-weight="700" font-size="60" letter-spacing="-1">
    <tspan x="80" y="290" fill="${c.primary}">MANAGED IT, CLOUD</tspan>
    <tspan x="80" y="362" fill="${c.text}">&amp; CYBERSECURITY</tspan>
  </text>
  <text x="80" y="450" font-family="${font}" font-size="28" fill="${c.muted}">One accountable team. Headquartered in Riyadh.</text>
  <text x="80" y="550" font-family="${font}" font-weight="700" font-size="24" fill="${c.text}" letter-spacing="2">EXQ.SERVICES</text>
</svg>`

await sharp(Buffer.from(og)).jpeg({ quality: 86, mozjpeg: true }).toFile(path.join(pub, 'og-image.jpg'))
console.log('wrote favicon.svg, apple-touch-icon.png, logo.png and og-image.jpg in public/')
