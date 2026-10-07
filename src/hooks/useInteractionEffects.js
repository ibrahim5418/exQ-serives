import { useEffect } from 'react'

// Pointer effects, delegated from the document so every page gets them:
// - cards light up with a soft spotlight that follows the cursor
// - primary buttons and icon buttons lean a few pixels towards the cursor
// Mouse/trackpad only, and off under prefers-reduced-motion.
const SPOT = '.card, .ind__part, .tech__item'
const MAGNET = '.btn--primary, .theme-toggle, .icon-btn'
const PULL = 0.18 // share of the cursor offset a magnetic element follows
const MAX = 6 // px

export function useInteractionEffects() {
  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!fine.matches || reduced.matches) return

    let magnet = null
    let frame = 0
    let last = null

    const release = () => {
      if (!magnet) return
      magnet.style.removeProperty('--tx')
      magnet.style.removeProperty('--ty')
      magnet.classList.remove('is-magnetic')
      magnet = null
    }

    const apply = () => {
      frame = 0
      const e = last
      const target = e.target instanceof Element ? e.target : null
      if (!target) return

      const card = target.closest(SPOT)
      if (card) {
        const r = card.getBoundingClientRect()
        card.style.setProperty('--mx', `${e.clientX - r.left}px`)
        card.style.setProperty('--my', `${e.clientY - r.top}px`)
      }

      const m = target.closest(MAGNET)
      if (m !== magnet) release()
      if (m && !m.disabled) {
        const r = m.getBoundingClientRect()
        const clamp = (v) => Math.max(-MAX, Math.min(MAX, v))
        m.style.setProperty('--tx', `${clamp((e.clientX - (r.left + r.width / 2)) * PULL)}px`)
        m.style.setProperty('--ty', `${clamp((e.clientY - (r.top + r.height / 2)) * PULL)}px`)
        m.classList.add('is-magnetic')
        magnet = m
      }
    }

    const onMove = (e) => {
      last = e
      if (!frame) frame = requestAnimationFrame(apply)
    }

    document.addEventListener('pointermove', onMove, { passive: true })
    document.documentElement.addEventListener('pointerleave', release)
    window.addEventListener('blur', release)
    return () => {
      document.removeEventListener('pointermove', onMove)
      document.documentElement.removeEventListener('pointerleave', release)
      window.removeEventListener('blur', release)
      cancelAnimationFrame(frame)
      release()
    }
  }, [])
}
