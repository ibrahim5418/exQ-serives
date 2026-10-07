import { Routes, Route, matchRoutes } from 'react-router'
import Layout from '../components/layout/Layout'

// Each page is its own chunk (Task 22). Unlike React.lazy, a page whose chunk
// has already been fetched renders synchronously, so prefetched pages appear
// instantly under the page transition instead of flashing an empty frame.
function page(load) {
  let mod = null
  let pending = null
  const preload = () => {
    if (mod) return Promise.resolve(mod)
    pending ??= load().then((m) => (mod = m))
    return pending
  }
  function Page(props) {
    if (!mod) throw preload() // Suspense waits for the chunk
    const Component = mod.default
    return <Component {...props} />
  }
  Page.preload = preload
  return Page
}

const HomePage = page(() => import('../pages/Home/HomePage'))
const AboutPage = page(() => import('../pages/About/AboutPage'))
const ServicesPage = page(() => import('../pages/Services/ServicesPage'))
const ServiceDetailPage = page(() => import('../pages/Services/ServiceDetailPage'))
const IndustriesPage = page(() => import('../pages/Industries/IndustriesPage'))
const CaseStudiesPage = page(() => import('../pages/CaseStudies/CaseStudiesPage'))
const CaseStudyPage = page(() => import('../pages/CaseStudies/CaseStudyPage'))
const ContactPage = page(() => import('../pages/Contact/ContactPage'))
const BookPage = page(() => import('../pages/Book/BookPage'))
const PrivacyPage = page(() => import('../pages/Legal/PrivacyPage'))
const TermsPage = page(() => import('../pages/Legal/TermsPage'))
const NotFoundPage = page(() => import('../pages/NotFound/NotFoundPage'))

const routes = [
  { index: true, Page: HomePage },
  { path: 'about', Page: AboutPage },
  { path: 'services', Page: ServicesPage },
  { path: 'services/:slug', Page: ServiceDetailPage },
  { path: 'industries', Page: IndustriesPage },
  { path: 'case-studies', Page: CaseStudiesPage },
  { path: 'case-studies/:slug', Page: CaseStudyPage },
  { path: 'contact', Page: ContactPage },
  { path: 'book', Page: BookPage },
  { path: 'privacy-policy', Page: PrivacyPage },
  { path: 'terms-of-service', Page: TermsPage },
  { path: '*', Page: NotFoundPage },
]

// Load the chunk for a URL (used before hydrating, so the first page is
// interactive at once) and, when idle, every other chunk.
export const preloadPage = (pathname) => {
  const match = matchRoutes([{ path: '/', children: routes }], pathname)?.at(-1)
  return (match?.route.Page ?? NotFoundPage).preload()
}
export const prefetchPages = () => Promise.all(routes.map((r) => r.Page.preload()))

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ Page, ...r }) => (
          <Route key={r.path ?? 'index'} {...r} element={<Page />} />
        ))}
      </Route>
    </Routes>
  )
}
