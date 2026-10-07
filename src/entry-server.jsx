// Server entry used only at build time to prerender each route to static HTML.
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { prerenderToNodeStream } from 'react-dom/static'
import { StaticRouter } from 'react-router'
import AppRoutes from './routes/AppRoutes'

export { prerenderPaths, getMeta, ogImagePath, ogImageAlt, organizationLd } from './routes/meta'
export { company } from './data/company'

const app = (url) => (
  <StrictMode>
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>
  </StrictMode>
)

// Loads every lazy page chunk the route needs (waits for Suspense to settle).
export async function warm(url) {
  const { prelude } = await prerenderToNodeStream(app(url))
  for await (const chunk of prelude) void chunk
}

// After warm(), nothing suspends, so this writes the whole page inline and in
// source order (streamed renders would move large boundaries behind an
// inline reveal script, which paints the footer first and shifts the page).
export function render(url) {
  return renderToString(app(url))
}
