import { Link } from 'react-router'
import Rise from './Rise'
import './PageHeader.css'

// Inner-page header, after the reference: breadcrumb, a large uppercase H1 on
// the left; tagline, lead and actions on the right.
export default function PageHeader({ title, tagline, lead, crumbs = [], children, className = '' }) {
  return (
    <header className={`page-header ${className}`.trim()}>
      <div className="container">
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="crumbs page-header__crumbs">
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              {crumbs.map((c) => (
                <li key={c.label}>
                  {c.to ? <Link to={c.to}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <div className="page-header__grid">
          <h1 className="page-header__title display">
            <Rise text={title} />
          </h1>
          {(tagline || lead || children) && (
            <div className="page-header__side enter" style={{ '--i': 2 }}>
              {tagline && <p className="page-header__tagline display">{tagline}</p>}
              {lead && <p className="lead">{lead}</p>}
              {children && <div className="btn-row btn-row--stack-mobile">{children}</div>}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
