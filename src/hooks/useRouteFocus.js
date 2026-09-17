import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router'

// After a client-side navigation: jump to the top (or to #hash targets) and
// move keyboard/screen-reader focus to the new page's main content.
export function useRouteFocus(mainRef) {
  const { pathname, hash } = useLocation()
  const first = useRef(true)

  useEffect(() => {
    if (first.current) {
      first.current = false
      return
    }
    if (hash) {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (target) {
        target.scrollIntoView()
        target.focus?.({ preventScroll: true })
        return
      }
    }
    window.scrollTo(0, 0)
    mainRef.current?.focus({ preventScroll: true })
  }, [pathname, hash, mainRef])
}
