import { useRef } from 'react'
import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'
import { useHeadMeta } from '../../hooks/useHeadMeta'
import { useRouteFocus } from '../../hooks/useRouteFocus'

export default function Layout() {
  const mainRef = useRef(null)
  useHeadMeta()
  useRouteFocus(mainRef)

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main" ref={mainRef} tabIndex={-1} style={{ outline: 'none' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
