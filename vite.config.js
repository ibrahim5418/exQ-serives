import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { existsSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

// `vite preview` should behave like the production host: /about serves
// dist/about/index.html, and unknown paths get dist/404.html with status 404.
function prerenderedRoutes() {
  return {
    name: 'prerendered-routes',
    configurePreviewServer(server) {
      const dist = path.resolve(server.config.root, server.config.build.outDir)
      server.middlewares.use((req, res, next) => {
        const url = new URL(req.url, 'http://x')
        if (url.pathname.startsWith('/api/')) return next()
        const clean = decodeURIComponent(url.pathname).replace(/\/+$/, '')
        if (!clean || path.extname(clean)) return next()
        const page = path.join(dist, clean, 'index.html')
        if (existsSync(page)) {
          req.url = `${clean}/index.html${url.search}`
          return next()
        }
        res.statusCode = 404
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end(readFileSync(path.join(dist, '404.html')))
      })
    },
  }
}

// Serves the serverless functions in /api locally (dev and preview), with the
// same req.body / res.status().json() shape the hosting platform provides.
function apiRoutes() {
  const readBody = (req) =>
    new Promise((resolve, reject) => {
      let data = ''
      req.on('data', (chunk) => {
        data += chunk
        if (data.length > 100_000) reject(new Error('Body too large'))
      })
      req.on('end', () => resolve(data))
      req.on('error', reject)
    })

  const adapt = (res) => {
    res.status = (code) => {
      res.statusCode = code
      return res
    }
    res.json = (obj) => {
      res.setHeader('Content-Type', 'application/json; charset=utf-8')
      res.end(JSON.stringify(obj))
      return res
    }
    return res
  }

  const mount = (middlewares, load) =>
    middlewares.use('/api/contact', async (req, res) => {
      try {
        const raw = req.method === 'POST' ? await readBody(req) : ''
        try {
          req.body = raw ? JSON.parse(raw) : {}
        } catch {
          req.body = raw
        }
        const { default: handler } = await load()
        await handler(req, adapt(res))
      } catch (err) {
        console.error('[api]', err)
        if (!res.headersSent) adapt(res).status(500).json({ ok: false, error: 'server_error' })
      }
    })

  return {
    name: 'api-routes',
    configureServer(server) {
      mount(server.middlewares, () => server.ssrLoadModule('/api/contact.js'))
    },
    configurePreviewServer(server) {
      const file = pathToFileURL(path.resolve(server.config.root, 'api/contact.js')).href
      mount(server.middlewares, () => import(file))
    },
  }
}

export default defineConfig(({ mode }) => {
  // Make server-side settings in .env (RESEND_API_KEY etc.) visible to the
  // local API. Only VITE_-prefixed values ever reach the browser bundle.
  const env = loadEnv(mode, process.cwd(), '')
  for (const key of ['RESEND_API_KEY', 'CONTACT_TO_EMAIL', 'CONTACT_FROM_EMAIL', 'TURNSTILE_SECRET_KEY']) {
    if (env[key] && !process.env[key]) process.env[key] = env[key]
  }

  return {
    plugins: [react(), prerenderedRoutes(), apiRoutes()],
    build: {
      // No source maps in production (Task 6).
      sourcemap: false,
      // One stylesheet: prerendered pages must be fully styled before their
      // lazy JS chunk loads, or they'd flash unstyled and shift.
      cssCodeSplit: false,
      assetsInlineLimit: 2048,
    },
  }
})
