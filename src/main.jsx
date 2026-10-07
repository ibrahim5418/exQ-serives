import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
// Self-hosted fonts, Latin subset only (Task 22): Plus Jakarta Sans for
// reading text, Bricolage Grotesque for display headlines.
import '@fontsource/plus-jakarta-sans/latin-400.css'
import '@fontsource/plus-jakarta-sans/latin-500.css'
import '@fontsource/plus-jakarta-sans/latin-600.css'
import '@fontsource/plus-jakarta-sans/latin-700.css'
import '@fontsource/bricolage-grotesque/latin-800.css'
import './styles/index.css'
import AppRoutes, { preloadPage, prefetchPages } from './routes/AppRoutes'

const container = document.getElementById('root')
const app = (
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>
)

// Production pages are prerendered (scripts/prerender.js), so hydrate them
// once the current page's chunk is in; the dev server serves an empty root,
// so render from scratch.
const idle = window.requestIdleCallback || ((fn) => window.setTimeout(fn, 1500))

preloadPage(window.location.pathname)
  .catch(() => {})
  .then(() => {
    if (container.firstElementChild) hydrateRoot(container, app)
    else createRoot(container).render(app)
    idle(() => prefetchPages().catch(() => {}))
  })
