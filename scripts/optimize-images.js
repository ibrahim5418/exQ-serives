// Converts the original photographs in src/assets/images/source into
// web-ready WebP files (two widths each) in src/assets/images.
// Run after adding or replacing a photo:  npm run images
import { readdir, mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = path.dirname(fileURLToPath(import.meta.url))
const srcDir = path.resolve(root, '../src/assets/images/source')
const outDir = path.resolve(root, '../src/assets/images')
const widths = [800, 1600]

await mkdir(outDir, { recursive: true })
const files = (await readdir(srcDir)).filter((f) => /\.(jpe?g|png)$/i.test(f))

for (const file of files) {
  const name = file.replace(/\.[^.]+$/, '')
  for (const width of widths) {
    const out = path.join(outDir, `${name}-${width}.webp`)
    const info = await sharp(path.join(srcDir, file))
      .rotate()
      // Fit inside a square box so portrait originals don't balloon in height.
      .resize({ width, height: width, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: width > 1000 ? 72 : 76 })
      .toFile(out)
    console.log(`${path.basename(out)}  ${info.width}x${info.height}  ${Math.round(info.size / 1024)} KB`)
  }
}
