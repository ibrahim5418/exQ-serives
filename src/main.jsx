import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import '@fontsource-variable/archivo/wdth.css'
import './styles/index.css'
import AppRoutes from './routes/AppRoutes'

const container = document.getElementById('root')
const app = (
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>
)

// Production pages are prerendered (scripts/prerender.js), so hydrate them;
// the dev server serves an empty root, so render from scratch.
if (container.firstElementChild) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
