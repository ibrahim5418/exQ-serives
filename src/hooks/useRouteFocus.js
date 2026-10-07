import { useEffect, useLayoutEffect, useRef } from 'react'
import { useLocation, useNavigationType } from 'react-router'

const useIsoLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect
const positions = new Map()

// After a client-side navigation:
// - Back/Forward (POP) returns to where the visitor was on that page
// - a new page starts at the top (or at its #hash target)
// - keyboard and screen-reader focus moves to the new page's main content
export function useRouteFocus(mainRef) {
  const location = useLocation()
  const navType = useNavigationType()
  const first = useRef(true)

  // Track the scroll position of the current history entry. The history-state
  // check ignores scroll events that land after the next entry has been pushed.
  useEffect(() => {
    const key = location.key
    const onScroll = () => {
      if ((window.history.state?.key ?? 'default') === key) positions.set(key, window.scrollY)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [location.key])

  useIsoLayoutEffect(() => {
    if (first.current) {
      first.current = false
      return
    }
    if (navType === 'POP' && positions.has(location.key)) {
      window.scrollTo(0, positions.get(location.key))
      mainRef.current?.focus({ preventScroll: true })
      return
    }
    if (location.hash) {
      const target = document.getElementById(decodeURIComponent(location.hash.slice(1)))
      if (target) {
        target.scrollIntoView()
        target.focus?.({ preventScroll: true })
        return
      }
    }
    window.scrollTo(0, 0)
    mainRef.current?.focus({ preventScroll: true })
  }, [location.pathname, location.hash, location.key, navType, mainRef])
}
