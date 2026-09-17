// Server entry used only at build time to prerender each route to static HTML.
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import AppRoutes from './routes/AppRoutes'

export { prerenderPaths, getMeta, ogImagePath } from './routes/meta'
export { company } from './data/company'

export function render(url) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </StrictMode>,
  )
}
