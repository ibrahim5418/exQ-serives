import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { getMeta, ogImagePath } from '../routes/meta'
import { company } from '../data/company'

function upsert(selector, create) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = create()
    document.head.appendChild(el)
  }
  return el
}

function setMeta(attr, key, content) {
  const el = upsert(`meta[${attr}="${key}"]`, () => {
    const m = document.createElement('meta')
    m.setAttribute(attr, key)
    return m
  })
  el.setAttribute('content', content)
}

// Keeps <title>, description, canonical and Open Graph tags in step with the
// current route after client-side navigation. The first page load already
// has these tags from the prerendered HTML.
export function useHeadMeta() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = getMeta(pathname)
    document.title = meta.title
    setMeta('name', 'description', meta.description)
    setMeta('name', 'robots', meta.noindex ? 'noindex' : 'index, follow')
    setMeta('property', 'og:title', meta.title)
    setMeta('property', 'og:description', meta.description)
    setMeta('property', 'og:url', meta.url)
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:site_name', company.name)
    setMeta('property', 'og:image', `${company.siteUrl}${ogImagePath}`)
    setMeta('name', 'twitter:card', 'summary_large_image')
    const canonical = upsert('link[rel="canonical"]', () => {
      const l = document.createElement('link')
      l.rel = 'canonical'
      return l
    })
    canonical.href = meta.url
  }, [pathname])
}
