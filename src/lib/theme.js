import { useEffect, useState } from 'react'

// Light/dark theme (Task 8). Light is the default on a first visit whatever the
// device setting; the choice is saved under `exq-theme`. An inline script in
// index.html applies it before first paint, so there's no flash.

export const THEME_KEY = 'exq-theme'
const THEME_COLORS = { light: '#FFFFFF', dark: '#0E1726' }
const EVENT = 'exq:themechange'

export function getTheme() {
  if (typeof document === 'undefined') return 'light'
  return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme)
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLORS[theme])
  try {
    localStorage.setItem(THEME_KEY, theme)
  } catch {
    // Storage blocked: the choice still applies for this page view.
  }
}

// `origin` ({ x, y } in viewport px) is where the new theme spreads from:
// a circular reveal from the toggle where View Transitions are supported,
// otherwise a 200ms colour ease. Both stay within the brief's 200ms.
export function setTheme(theme, origin) {
  const root = document.documentElement
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const done = () => window.dispatchEvent(new CustomEvent(EVENT, { detail: theme }))

  if (origin && document.startViewTransition && !reduced) {
    const radius = Math.hypot(Math.max(origin.x, innerWidth - origin.x), Math.max(origin.y, innerHeight - origin.y))
    root.classList.add('theme-reveal')
    const transition = document.startViewTransition(() => applyTheme(theme))
    transition.ready
      .then(() =>
        root.animate(
          { clipPath: [`circle(0px at ${origin.x}px ${origin.y}px)`, `circle(${radius}px at ${origin.x}px ${origin.y}px)`] },
          { duration: 200, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', pseudoElement: '::view-transition-new(root)' },
        ),
      )
      .catch(() => {})
    transition.finished.finally(() => root.classList.remove('theme-reveal'))
    done()
    return
  }

  root.classList.add('theme-switching')
  applyTheme(theme)
  window.setTimeout(() => root.classList.remove('theme-switching'), 220)
  done()
}

export function useTheme() {
  // Server render and first client render agree on 'light'; the real value
  // is read after mount. Icons switch through CSS, so nothing flashes.
  const [theme, setState] = useState('light')

  useEffect(() => {
    setState(getTheme())
    const onChange = (e) => setState(e.detail)
    // Keep other tabs in step when the choice changes there.
    const onStorage = (e) => {
      if (e.key !== THEME_KEY) return
      const next = e.newValue === 'dark' ? 'dark' : 'light'
      document.documentElement.setAttribute('data-theme', next)
      document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLORS[next])
      setState(next)
    }
    window.addEventListener(EVENT, onChange)
    window.addEventListener('storage', onStorage)
    return () => {
      window.removeEventListener(EVENT, onChange)
      window.removeEventListener('storage', onStorage)
    }
  }, [])

  // Called from a button's onClick: the reveal starts from the button's centre.
  const toggle = (e) => {
    const r = e?.currentTarget?.getBoundingClientRect?.()
    setTheme(getTheme() === 'dark' ? 'light' : 'dark', r && { x: r.left + r.width / 2, y: r.top + r.height / 2 })
  }
  return { theme, toggle }
}

export const onThemeChange = (fn) => {
  window.addEventListener(EVENT, fn)
  return () => window.removeEventListener(EVENT, fn)
}
