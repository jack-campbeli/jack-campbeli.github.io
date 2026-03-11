import { useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import styles from './Layout.module.css'

export default function Layout({ children }: { children: ReactNode }) {
  const headerRef = useRef<HTMLElement | null>(null)
  const [headerHeight, setHeaderHeight] = useState(0)

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

  const layoutStyle = {
    '--header-height': `${headerHeight}px`,
  } as CSSProperties

  return (
    <div className={styles.site} style={layoutStyle}>
      <div className={styles.headerRail}>
        <div className={styles.headerSticky}>
          <Header ref={headerRef} />
        </div>
      </div>
      <main className="page-content">
        <div className="wrapper">{children}</div>
      </main>
      <Footer />
    </div>
  )
}
