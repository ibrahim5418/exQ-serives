import { useTheme } from '../../lib/theme'
import { Moon, Sun } from '../common/Icons'

// Desktop: an icon button between the navigation and the CTA.
// Mobile menu: a labelled "Dark mode" row with a switch (Task 8).
// Both are real <button>s with aria-pressed; icons use currentColor.
export default function ThemeToggle({ variant = 'icon' }) {
  const { theme, toggle } = useTheme()
  const dark = theme === 'dark'

  if (variant === 'row') {
    return (
      <button type="button" className="theme-row" aria-pressed={dark} onClick={toggle}>
        <span className="theme-row__label">
          <Moon width={20} height={20} />
          Dark mode
        </span>
        <span className="theme-row__switch" aria-hidden="true">
          <span className="theme-row__knob" />
        </span>
      </button>
    )
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-pressed={dark}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={toggle}
    >
      <Moon className="theme-toggle__moon" width={20} height={20} />
      <Sun className="theme-toggle__sun" width={20} height={20} />
    </button>
  )
}
