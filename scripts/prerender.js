// Renders every route to static HTML after `vite build`, so each page ships
// with real content, its own <title>/meta tags and structured data. Also writes
// 404.html (noindex), sitemap.xml and robots.txt.
import { readFile, writeFile, mkdir, rm, readdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const ssrDir = path.join(root, 'dist-ssr')

const template = await readFile(path.join(dist, 'index.html'), 'utf8')
const server = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href)
const { warm, render, prerenderPaths, getMeta, ogImagePath, ogImageAlt, organizationLd, company } = server

// Preload the body weight and the H1 display weight (the LCP element on most pages).
const assets = await readdir(path.join(dist, 'assets'))
const preloads = ['plus-jakarta-sans-latin-400-normal', 'bricolage-grotesque-latin-800-normal']
  .map((name) => assets.find((f) => f.includes(name) && f.endsWith('.woff2')))
  .filter(Boolean)
  .map((f) => `<link rel="preload" href="/assets/${f}" as="font" type="font/woff2" crossorigin />`)

const escape = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

// JSON inside <script> must not be able to close the tag.
const ld = (data, attr = '') =>
  `<script type="application/ld+json"${attr}>${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`

function headFor(meta) {
  const image = `${company.siteUrl}${ogImagePath}`
  return [
    ...preloads,
    `<title>${escape(meta.title)}</title>`,
    `<meta name="description" content="${escape(meta.description)}" />`,
    `<meta name="robots" content="${meta.noindex ? 'noindex' : 'index, follow'}" />`,
    meta.noindex ? '' : `<link rel="canonical" href="${meta.url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${escape(company.name)}" />`,
    `<meta property="og:locale" content="en_US" />`,
    `<meta property="og:title" content="${escape(meta.title)}" />`,
    `<meta property="og:description" content="${escape(meta.description)}" />`,
    `<meta property="og:url" content="${meta.url}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${escape(ogImageAlt)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escape(meta.title)}" />`,
    `<meta name="twitter:description" content="${escape(meta.description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    `<meta name="twitter:image:alt" content="${escape(ogImageAlt)}" />`,
    ld(organizationLd),
    ...meta.jsonLd.map((block) => ld(block, ' data-page-ld')),
  ]
    .filter(Boolean)
    .join('\n    ')
}

async function page(url, meta) {
  const html = render(url)
  return template.replace('<!--app-head-->', headFor(meta)).replace('<!--app-html-->', () => html)
}

// Warm-up pass: load every lazy page chunk first, so the real render below
// is synchronous and writes each page inline, in source order.
for (const url of [...prerenderPaths, '/404']) await warm(url)

for (const url of prerenderPaths) {
  const file = url === '/' ? path.join(dist, 'index.html') : path.join(dist, url, 'index.html')
  await mkdir(path.dirname(file), { recursive: true })
  await writeFile(file, await page(url, getMeta(url)))
  console.log('prerendered', url)
}

await writeFile(path.join(dist, '404.html'), await page('/404', getMeta('/404')))
console.log('prerendered 404.html')

const today = new Date().toISOString().slice(0, 10)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${prerenderPaths
  .map((u) => `  <url><loc>${company.siteUrl}${u}</loc><lastmod>${today}</lastmod></url>`)
  .join('\n')}
</urlset>
`
await writeFile(path.join(dist, 'sitemap.xml'), sitemap)
await writeFile(
  path.join(dist, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${company.siteUrl}/sitemap.xml\n`,
)
console.log('wrote sitemap.xml and robots.txt')

await rm(ssrDir, { recursive: true, force: true })
