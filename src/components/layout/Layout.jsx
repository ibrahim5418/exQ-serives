import { Suspense, useRef } from 'react'
import { Outlet, useLocation } from 'react-router'
import Header from './Header'
import Footer from './Footer'
import MobileActionBar from './MobileActionBar'
import { useHeadMeta } from '../../hooks/useHeadMeta'
import { useRouteFocus } from '../../hooks/useRouteFocus'
import { usePageMotion } from '../../hooks/usePageMotion'
import { useInteractionEffects } from '../../hooks/useInteractionEffects'

export default function Layout() {
  const mainRef = useRef(null)
  const curtainRef = useRef(null)
  const { pathname } = useLocation()
  useHeadMeta()
  useRouteFocus(mainRef)
  usePageMotion(mainRef, curtainRef)
  useInteractionEffects()

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main" ref={mainRef} tabIndex={-1} className="is-rising" style={{ outline: 'none' }}>
        {/* Keyed by path so every page (including service → service) remounts and replays its entrance. */}
        <div key={pathname}>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </div>
      </main>
      <Footer />
      <MobileActionBar />
      <div ref={curtainRef} className="curtain" aria-hidden="true" />
    </>
  )
}
