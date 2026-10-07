import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router'
import { onThemeChange } from '../lib/theme'

// Page-level motion, after the reference video and within the brief's limits
// (≤300ms, once per element, off under prefers-reduced-motion):
// - a sheet lifts off the new page on route changes (not on first load)
// - [data-reveal] blocks fade/slide in the first time they scroll into view
// - headlines (.rise) replay their entrance when the theme switches
export function usePageMotion(mainRef, curtainRef) {
  const { pathname } = useLocation()
  const first = useRef(true)

  // Curtain on route change.
  useEffect(() => {
    if (first.current) {
      first.current = false
      return
    }
    const el = curtainRef.current
    if (!el) return
    el.classList.remove('is-active')
    void el.offsetWidth // restart the animation
    el.classList.add('is-active')
    const done = () => el.classList.remove('is-active')
    el.addEventListener('animationend', done, { once: true })
    return () => el.removeEventListener('animationend', done)
  }, [pathname, curtainRef])

  // One-time scroll reveals. Pages are lazy chunks that can mount after this
  // effect runs, so new [data-reveal] blocks are picked up as they appear.
  useEffect(() => {
    const root = mainRef.current
    if (!root) return
    const pending = () => root.querySelectorAll('[data-reveal]:not(.is-visible)')
    if (!('IntersectionObserver' in window)) {
      const showAll = () => pending().forEach((t) => t.classList.add('is-visible'))
      showAll()
      const mo = new MutationObserver(showAll)
      mo.observe(root, { childList: true, subtree: true })
      return () => mo.disconnect()
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          io.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    )
    // Blocks already on screen show straight away; only those further down
    // wait to scroll into view.
    const watch = () =>
      pending().forEach((t) => {
        if (t.getBoundingClientRect().top < window.innerHeight) t.classList.add('is-visible')
        else io.observe(t)
      })
    watch()
    const mo = new MutationObserver(watch)
    mo.observe(root, { childList: true, subtree: true })
    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [mainRef])

  // Replay headline entrances on theme switch.
  useEffect(
    () =>
      onThemeChange(() => {
        const root = mainRef.current
        if (!root) return
        root.classList.remove('is-rising')
        void root.offsetWidth
        root.classList.add('is-rising')
      }),
    [mainRef],
  )
}
