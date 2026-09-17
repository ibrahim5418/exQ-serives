import Tape from './Tape'

// A photograph with its caption plate. Every photo on the site says what it
// shows, and that it is illustrative stock until real exQ photos replace it.
export default function Figure({ image, sizes = '(min-width: 60em) 50vw, 100vw', priority = false, ratio, className = '' }) {
  const { src, srcSm, width, height, alt, caption, note = 'Illustrative photo' } = image
  return (
    <figure
      className={`figure${ratio ? ' figure--ratio' : ''} ${className}`.trim()}
      style={ratio ? { '--ratio': ratio } : undefined}
    >
      <div className="figure__frame">
        <img
          src={src}
          srcSet={srcSm ? `${srcSm} 800w, ${src} ${width}w` : undefined}
          sizes={sizes}
          width={width}
          height={height}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : undefined}
          decoding="async"
        />
      </div>
      {caption && (
        <figcaption className="figure__caption">
          <Tape>{caption}</Tape>
          <span className="figure__note">{note}</span>
        </figcaption>
      )}
    </figure>
  )
}
