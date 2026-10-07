import { Fragment } from 'react'

// Splits a heading into masked words that rise into place, one after another.
// The animation runs while an ancestor has .is-rising (see usePageMotion).
//   <Rise text="Some heading" />
//   <Rise lines={['Line one', 'Line two']} tones={[true, false]} />   designed lines, toned per line
export default function Rise({ text, lines, tones = [] }) {
  // Designed lines break where written from tablet width up; on phones the
  // words flow naturally so no line ends up stranded.
  if (lines) {
    let n = 0
    return lines.map((line, li) => (
      <Fragment key={line}>
        {line.split(' ').map((word, wi) => (
          <Fragment key={`${word}-${wi}`}>
            <span className={`rise${tones[li] ? ' tone' : ''}`}>
              <span className="rise__inner" style={{ '--i': n++ }}>
                {word}
              </span>
            </span>{' '}
          </Fragment>
        ))}
        {li < lines.length - 1 && <span className="rise-br" aria-hidden="true" />}
      </Fragment>
    ))
  }
  const words = String(text).split(' ')
  return words.map((word, i) => (
    <Fragment key={`${word}-${i}`}>
      <span className="rise">
        <span className="rise__inner" style={{ '--i': i }}>
          {word}
        </span>
      </span>
      {i < words.length - 1 && ' '}
    </Fragment>
  ))
}
