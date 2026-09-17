// The exQ wordmark: lowercase "ex", capital "Q", teal full stop.
export default function Wordmark({ className = '' }) {
  return (
    <span className={`wordmark ${className}`.trim()}>
      exQ
      <span className="wordmark__dot" aria-hidden="true">
        .
      </span>
      <span className="visually-hidden"> Services</span>
    </span>
  )
}
