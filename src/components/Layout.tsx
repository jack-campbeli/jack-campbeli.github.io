import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react'
import Header from './Header'
import Footer from './Footer'
import styles from './Layout.module.css'

type Theme = 'light' | 'dark'

const THEME_COLOR = {
  light: '#fbf7f2',
  dark: '#12181b',
} satisfies Record<Theme, string>

function getSystemTheme(): Theme {
  if (typeof window === 'undefined') {
    return 'light'
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function Layout({ children }: { children: ReactNode }) {
  const headerRef = useRef<HTMLElement | null>(null)
  const [headerHeight, setHeaderHeight] = useState(0)
  const [theme, setTheme] = useState<Theme>(getSystemTheme)
  const [hasManualOverride, setHasManualOverride] = useState(false)

  useLayoutEffect(() => {
    const headerElement = headerRef.current

    if (!headerElement) {
      return
    }

    setHeaderHeight(headerElement.getBoundingClientRect().height)

    const resizeObserver = new ResizeObserver((entries) => {
      setHeaderHeight(entries[0].contentRect.height)
    })

    resizeObserver.observe(headerElement)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  const themeColorMetaRef = useRef(
    typeof document !== 'undefined'
      ? document.querySelector('meta[name="theme-color"]')
      : null,
  )

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    themeColorMetaRef.current?.setAttribute('content', THEME_COLOR[theme])
  }, [theme])

  useEffect(() => {
    if (hasManualOverride) {
      return
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleThemeChange = (event: MediaQueryListEvent) => {
      setTheme(event.matches ? 'dark' : 'light')
    }

    mediaQuery.addEventListener('change', handleThemeChange)

    return () => {
      mediaQuery.removeEventListener('change', handleThemeChange)
    }
  }, [hasManualOverride])

  const handleThemeToggle = () => {
    setHasManualOverride(true)
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))
  }

  const layoutStyle = {
    '--header-height': `${headerHeight}px`,
  } as CSSProperties

  return (
    <div className={styles.site} style={layoutStyle}>
      <div className={styles.headerRail}>
        <div className={styles.headerSticky}>
          <Header
            ref={headerRef}
            theme={theme}
            onThemeToggle={handleThemeToggle}
          />
        </div>
      </div>
      <main className="page-content">
        <div className="wrapper">{children}</div>
      </main>
      <Footer />
    </div>
  )
}
