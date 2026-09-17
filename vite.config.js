import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { existsSync } from 'node:fs'
import path from 'node:path'

// `vite preview` should behave like the production host: /about serves
// dist/about/index.html, and unknown paths get dist/404.html.
function prerenderedRoutes() {
  return {
    name: 'prerendered-routes',
    configurePreviewServer(server) {
      const dist = path.resolve(server.config.root, server.config.build.outDir)
      server.middlewares.use((req, res, next) => {
        const url = new URL(req.url, 'http://x')
        const clean = decodeURIComponent(url.pathname).replace(/\/+$/, '')
        if (!clean || path.extname(clean)) return next()
        const page = path.join(dist, clean, 'index.html')
        if (existsSync(page)) {
          req.url = `${clean}/index.html${url.search}`
          return next()
        }
        res.statusCode = 404
        req.url = '/404.html'
        return next()
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), prerenderedRoutes()],
  build: {
    // Photos are already optimised by scripts/optimize-images.js;
    // keep them as files rather than inlining.
    assetsInlineLimit: 2048,
  },
  ssr: {
    // Bundle client-only packages into the prerender build so Node can load it.
    noExternal: ['@emailjs/browser'],
  },
})
