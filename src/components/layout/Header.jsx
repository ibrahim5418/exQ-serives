import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { mainNav } from '../../data/navigation'
import { company } from '../../data/company'
import Wordmark from '../common/Wordmark'
import Button from '../common/Button'
import { ChevronDown, Close, Jack, Menu, Phone } from '../common/Icons'
import './Header.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const { pathname } = useLocation()
  const servicesRef = useRef(null)
  const toggleRef = useRef(null)
  const servicesBtnRef = useRef(null)

  // Close everything on navigation.
  useEffect(() => {
    setMenuOpen(false)
    setServicesOpen(false)
  }, [pathname])

  // Escape closes the open menu and returns focus to its button;
  // a click outside closes the services dropdown.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== 'Escape') return
      if (servicesOpen) {
        setServicesOpen(false)
        servicesBtnRef.current?.focus()
      }
      if (menuOpen) {
        setMenuOpen(false)
        toggleRef.current?.focus()
      }
    }
    const onClick = (e) => {
      if (servicesOpen && servicesRef.current && !servicesRef.current.contains(e.target)) setServicesOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onClick)
    }
  }, [menuOpen, servicesOpen])

  // Stop the page scrolling behind the open mobile menu.
  useEffect(() => {
    document.documentElement.classList.toggle('menu-open', menuOpen)
    return () => document.documentElement.classList.remove('menu-open')
  }, [menuOpen])

  return (
    <header className="site-header band-rack">
      <div className="container site-header__bar">
        <Link to="/" className="site-header__brand" aria-label="exQ Services, home">
          <Wordmark />
        </Link>

        <nav className="nav-desktop" aria-label="Main">
          <ul className="nav-desktop__list">
            {mainNav.map((item) =>
              item.children ? (
                <li
                  key={item.to}
                  className={`nav-desktop__item has-menu${servicesOpen ? ' is-open' : ''}`}
                  ref={servicesRef}
                >
                  <div className="nav-desktop__split">
                    <NavLink to={item.to} className="nav-link">
                      {item.label}
                    </NavLink>
                    <button
                      ref={servicesBtnRef}
                      type="button"
                      className="nav-desktop__caret"
                      aria-expanded={servicesOpen}
                      aria-controls="services-menu"
                      onClick={() => setServicesOpen((v) => !v)}
                    >
                      <ChevronDown width={16} height={16} />
                      <span className="visually-hidden">Show services</span>
                    </button>
                  </div>
                  <div id="services-menu" className="services-menu" hidden={!servicesOpen}>
                    <ul className="services-menu__list">
                      {item.children.map((child) => (
                        <li key={child.to}>
                          <NavLink to={child.to} className="services-menu__link">
                            <span className="services-menu__port tabular">{child.port}</span>
                            <Jack cable={child.cable} size={14} />
                            <span>{child.label}</span>
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                    <Link to="/services" className="services-menu__all">
                      Compare all six services
                    </Link>
                  </div>
                </li>
              ) : (
                <li key={item.to} className="nav-desktop__item">
                  <NavLink to={item.to} end={item.to === '/'} className="nav-link">
                    {item.label}
                  </NavLink>
                </li>
              ),
            )}
          </ul>
        </nav>

        <Button to="/contact" className="site-header__cta" arrow={false}>
          Get a Quote
        </Button>

        <button
          ref={toggleRef}
          type="button"
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <Close /> : <Menu />}
          <span>{menuOpen ? 'Close' : 'Menu'}</span>
        </button>
      </div>

      <div id="mobile-nav" className="mobile-nav" hidden={!menuOpen}>
        <nav className="container mobile-nav__inner" aria-label="Main">
          <ul className="mobile-nav__list">
            {mainNav.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.to === '/' || !!item.children} className="mobile-nav__link">
                  {item.label}
                </NavLink>
                {item.children && (
                  <ul className="mobile-nav__sub">
                    {item.children.map((child) => (
                      <li key={child.to}>
                        <NavLink to={child.to} className="mobile-nav__sublink">
                          <Jack cable={child.cable} size={14} />
                          {child.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="mobile-nav__foot">
            <Button to="/contact">Get a Quote</Button>
            <a className="mobile-nav__phone" href={company.phone.href}>
              <Phone width={18} height={18} />
              {company.phone.display}
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
