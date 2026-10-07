import { Link } from 'react-router'
import { ArrowRight } from './Icons'

// variant: primary (solid) | secondary (outlined). size: md | sm
export default function Button({ to, href, variant = 'primary', size = 'md', arrow = false, icon, children, className = '', ...rest }) {
  const cls = `btn btn--${variant}${size === 'sm' ? ' btn--sm' : ''} ${className}`.trim()
  const inner = (
    <>
      {icon}
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
