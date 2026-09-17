import { Link } from 'react-router'
import './PageHeader.css'

// Dark header band for inner pages: breadcrumb, H1, lead, optional actions
// and an optional aside (photo or panel).
export default function PageHeader({ title, lead, crumbs = [], children, aside, cable, className = '' }) {
  return (
    <header
      className={`page-header band-rack ${aside ? 'page-header--aside' : ''} ${className}`.trim()}
      style={cable ? { '--header-cable': `var(--cable-${cable})` } : undefined}
    >
      <div className="container page-header__inner">
        <div className="page-header__main">
          {crumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="crumbs">
              <ol>
                <li>
                  <Link to="/">Home</Link>
                </li>
                {crumbs.map((c) => (
                  <li key={c.label}>{c.to ? <Link to={c.to}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}</li>
                ))}
              </ol>
            </nav>
          )}
          <h1 className="page-header__title">{title}</h1>
          {lead && <p className="lead page-header__lead">{lead}</p>}
          {children && <div className="page-header__actions">{children}</div>}
        </div>
        {aside && <div className="page-header__aside">{aside}</div>}
      </div>
      {cable && <span className="page-header__run" aria-hidden="true" />}
    </header>
  )
}
