// The exQ wordmark: "ex" in text colour, "Q" in primary, accent full stop.
// Colours come from theme tokens, so it has a light and a dark version.
export default function Wordmark({ className = '' }) {
  return (
    <span className={`wordmark ${className}`.trim()}>
      <span aria-hidden="true">
        ex<span className="wordmark__q">Q</span>
        <span className="wordmark__dot">.</span>
      </span>
      <span className="visually-hidden">exQ Services</span>
    </span>
  )
}
