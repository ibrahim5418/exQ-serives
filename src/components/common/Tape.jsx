// Printed label tape. Used only on real objects: ports, rack units,
// photo captions and the current navigation item. Never as a heading eyebrow.
export default function Tape({ children, tone = 'white', as: Tag = 'span', className = '', ...rest }) {
  return (
    <Tag className={`tape tape--${tone} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  )
}
