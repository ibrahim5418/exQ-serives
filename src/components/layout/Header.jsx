import { useEffect, useId, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { mainNav } from '../../data/navigation'
import { practiceAreas } from '../../data/services'
import { cta } from '../../data/company'
import Wordmark from '../common/Wordmark'
import Button from '../common/Button'
import ThemeToggle from './ThemeToggle'
import { ArrowRight, ChevronDown, Close, Menu, ServiceIcon } from '../common/Icons'
import './Header.css'

const focusableSelector =
  'a[href], button:not([disabled]), input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])'

function MegaMenu({ id, open, onNavigate }) {
  return (
    <div id={id} className={`mega${open ? ' is-open' : ''}`} inert={!open}>
      <div className="container mega__inner">
        <ul className="mega__cols">
          {practiceAreas.map((area) => {
            const [main, ...more] = area.services
            return (
              <li key={area.id} className="mega__col">
                <Link to={`/services/${main.slug}`} className="mega__main" onClick={onNavigate}>
                  <span className="mega__icon">
                    <ServiceIcon name={main.icon} size={22} />
                  </span>
                  <span className="mega__label">{area.label}</span>
                  <span className="mega__text">{main.readout}</span>
                </Link>
                {more.map((s) => (
                  <Link key={s.slug} to={`/services/${s.slug}`} className="mega__more" onClick={onNavigate}>
                    {s.name}
                    <ArrowRight width={16} height={16} />
                  </Link>
                ))}
              </li>
            )
          })}
        </ul>
        <div className="mega__foot">
          <Link to="/services" className="link-arrow" onClick={onNavigate}>
            View all services <ArrowRight width={18} height={18} />
          </Link>
        </div>
      </div>
    </div>
  )
}

function MobilePanel({ id, open, onClose, closeRef }) {
  const [servicesOpen, setServicesOpen] = useState(false)
  const panelRef = useRef(null)
  const groupId = useId()

  useEffect(() => {
    if (!open) {
      setServicesOpen(false)
      return
    }
    closeRef.current?.focus()
    // Keep Tab inside the panel while it's open.
    const onKey = (e) => {
      if (e.key !== 'Tab' || !panelRef.current) return
      const items = [...panelRef.current.querySelectorAll(focusableSelector)].filter((el) => el.offsetParent !== null)
      if (!items.length) return
      const first = items[0]
      const last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, closeRef])

  return (
    <div
      id={id}
      ref={panelRef}
      className={`mpanel${open ? ' is-open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      inert={!open}
    >
      <div className="mpanel__bar container">
        <Link to="/" className="site-header__brand" aria-label="exQ Services, home" onClick={onClose}>
          <Wordmark />
        </Link>
        <button ref={closeRef} type="button" className="icon-btn" onClick={onClose}>
          <Close width={22} height={22} />
          <span className="visually-hidden">Close menu</span>
        </button>
      </div>

      <nav className="mpanel__nav container" aria-label="Main">
        <ul className="mpanel__list">
          {mainNav.map((item) =>
            item.mega ? (
              <li key={item.to}>
                <button
                  type="button"
                  className="mpanel__link mpanel__toggle"
                  aria-expanded={servicesOpen}
                  aria-controls={groupId}
                  onClick={() => setServicesOpen((v) => !v)}
                >
                  {item.label}
                  <ChevronDown width={20} height={20} />
                </button>
                <div id={groupId} className={`mpanel__group${servicesOpen ? ' is-open' : ''}`} inert={!servicesOpen}>
                  <ul className="mpanel__sub">
                    {practiceAreas.map((area) => {
                      const [main, ...more] = area.services
                      return (
                        <li key={area.id}>
                          <NavLink to={`/services/${main.slug}`} className="mpanel__sublink" onClick={onClose}>
                            <ServiceIcon name={main.icon} size={18} />
                            {area.label}
                          </NavLink>
                          {more.map((s) => (
                            <NavLink
                              key={s.slug}
                              to={`/services/${s.slug}`}
                              className="mpanel__sublink mpanel__sublink--nested"
                              onClick={onClose}
                            >
                              <ServiceIcon name={s.icon} size={18} />
                              {s.name}
                            </NavLink>
                          ))}
                        </li>
                      )
                    })}
                    <li>
                      <NavLink to="/services" end className="mpanel__sublink mpanel__all" onClick={onClose}>
                        View all services <ArrowRight width={18} height={18} />
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>
            ) : (
              <li key={item.to}>
                <NavLink to={item.to} className="mpanel__link" onClick={onClose}>
                  {item.label}
                </NavLink>
              </li>
            ),
          )}
        </ul>
      </nav>

      <div className="mpanel__foot container">
        <ThemeToggle variant="row" />
        <Button to={cta.primary.to} onClick={onClose}>
          {cta.primary.label}
        </Button>
      </div>
    </div>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const { pathname } = useLocation()
  const megaWrapRef = useRef(null)
  const megaBtnRef = useRef(null)
  const menuBtnRef = useRef(null)
  const closeRef = useRef(null)
  const megaId = useId()
  const panelId = useId()

  // Close everything on navigation.
  useEffect(() => {
    setMenuOpen(false)
    setMegaOpen(false)
  }, [pathname])

  // Solid background once scrolled; the header tucks away while scrolling
  // down and returns on the way up; a thin line tracks reading progress.
  const menusOpen = useRef(false)
  const progressRef = useRef(null)
  menusOpen.current = menuOpen || megaOpen
  useEffect(() => {
    const root = document.documentElement
    let lastY = window.scrollY
    let frame = 0
    const update = () => {
      frame = 0
      const y = window.scrollY
      const max = root.scrollHeight - window.innerHeight
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`
      setScrolled(y > 8)
      if (Math.abs(y - lastY) > 6) {
        const hide = y > lastY && y > 480 && !menusOpen.current && !document.activeElement?.closest('.site-header')
        setHidden(hide)
        lastY = y
      }
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    document.documentElement.toggleAttribute('data-header-hidden', hidden)
  }, [hidden])

  // Never hide the header while it holds focus or a menu is open.
  useEffect(() => {
    if (menuOpen || megaOpen) setHidden(false)
  }, [menuOpen, megaOpen])

  // Esc closes whichever menu is open and returns focus to its button;
  // a click outside closes the mega menu.
  useEffect(() => {
    if (!menuOpen && !megaOpen) return
    const onKey = (e) => {
      if (e.key !== 'Escape') return
      if (megaOpen) {
        setMegaOpen(false)
        megaBtnRef.current?.focus()
      }
      if (menuOpen) {
        setMenuOpen(false)
        menuBtnRef.current?.focus()
      }
    }
    const onPointer = (e) => {
      if (megaOpen && megaWrapRef.current && !megaWrapRef.current.contains(e.target)) setMegaOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
    }
  }, [menuOpen, megaOpen])

  // Lock page scroll behind the open mobile menu.
  useEffect(() => {
    document.documentElement.classList.toggle('menu-open', menuOpen)
    return () => document.documentElement.classList.remove('menu-open')
  }, [menuOpen])

  const closeMenu = () => {
    setMenuOpen(false)
    menuBtnRef.current?.focus()
  }

  return (
    <header
      className={`site-header${scrolled || megaOpen ? ' is-solid' : ''}${hidden ? ' is-hidden' : ''}`}
      onFocus={() => setHidden(false)}
    >
      <div ref={megaWrapRef} className="site-header__inner">
        <span ref={progressRef} className="site-header__progress" aria-hidden="true" />
        <div className="container site-header__bar">
          <Link to="/" className="site-header__brand" aria-label="exQ Services, home">
            <Wordmark />
          </Link>

          <nav className="nav-pill" aria-label="Main">
            <ul className="nav-pill__list">
              {mainNav.map((item) => (
                <li key={item.to}>
                  {item.mega ? (
                    <button
                      ref={megaBtnRef}
                      type="button"
                      className={`nav-link${pathname.startsWith('/services') ? ' active' : ''}`}
                      aria-expanded={megaOpen}
                      aria-controls={megaId}
                      onClick={() => setMegaOpen((v) => !v)}
                    >
                      {item.label}
                      <ChevronDown className="nav-link__caret" width={16} height={16} />
                    </button>
                  ) : (
                    <NavLink to={item.to} className="nav-link">
                      {item.label}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-header__actions">
            <ThemeToggle />
            <Button to={cta.primary.to} size="sm" className="site-header__cta">
              {cta.primary.label}
            </Button>
            <button
              ref={menuBtnRef}
              type="button"
              className="icon-btn site-header__menu"
              aria-expanded={menuOpen}
              aria-controls={panelId}
              onClick={() => setMenuOpen(true)}
            >
              <Menu width={22} height={22} />
              <span className="visually-hidden">Open menu</span>
            </button>
          </div>
        </div>

        <MegaMenu id={megaId} open={megaOpen} onNavigate={() => setMegaOpen(false)} />
      </div>

      <div className={`mpanel-scrim${menuOpen ? ' is-open' : ''}`} aria-hidden="true" onClick={closeMenu} />
      <MobilePanel id={panelId} open={menuOpen} onClose={closeMenu} closeRef={closeRef} />
    </header>
  )
}
