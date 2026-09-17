import { Link } from 'react-router'
import { ArrowRight } from './Icons'

// variant: primary (teal) | ghost (outline on dark) | ink (solid on light) | outline (on light)
export default function Button({ to, href, variant = 'primary', arrow = true, children, className = '', ...rest }) {
  const cls = `btn btn--${variant} ${className}`.trim()
  const inner = (
    <>
      <span>{children}</span>
      {arrow && <ArrowRight className="btn__arrow" width={18} height={18} />}
    </>
  )
  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {inner}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {inner}
      </a>
    )
  }
  return (
    <button className={cls} {...rest}>
      {inner}
    </button>
  )
}
