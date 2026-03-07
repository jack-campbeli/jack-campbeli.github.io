import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import styles from './Header.module.css'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/resume', label: 'Resume' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <header className={styles.header}>
      <div className="wrapper">
        <div className={styles.inner}>
          <Link to="/" className={styles.brand}>
            <span className={styles.brandMark}>JC</span>
            <span className={styles.brandText}>
              <span className={styles.brandName}>Jack Campbell</span>
              <span className={styles.brandRole}>Software engineer</span>
            </span>
          </Link>

          <button
            className={styles.menuButton}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            type="button"
          >
            <svg viewBox="0 0 18 15" width="18" height="15">
              <path d="M18,1.484c0,0.82-0.665,1.484-1.484,1.484H1.484C0.665,2.969,0,2.148,0,1.484l0,0C0,0.665,0.665,0,1.484,0 h15.032C17.335,0,18,0.665,18,1.484L18,1.484z M18,7.516C18,8.335,17.335,9,16.516,9H1.484C0.665,9,0,8.335,0,7.516l0,0 c0-0.82,0.665-1.484,1.484-1.484h15.032C17.335,6.031,18,6.696,18,7.516L18,7.516z M18,13.516C18,14.335,17.335,15,16.516,15H1.484 C0.665,15,0,14.335,0,13.516l0,0c0-0.82,0.665-1.483,1.484-1.483h15.032C17.335,12.031,18,12.695,18,13.516L18,13.516z" fill="currentColor" />
            </svg>
          </button>

          <div className={styles.actions}>
            <nav
              id="site-nav"
              className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}
            >
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            </nav>

            <a
              className={styles.contactLink}
              href="mailto:jackwilliamleecampbell@gmail.com"
            >
              Say hello
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
