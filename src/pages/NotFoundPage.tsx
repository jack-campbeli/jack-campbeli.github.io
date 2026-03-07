import { Link } from 'react-router-dom'
import styles from './NotFoundPage.module.css'

export default function NotFoundPage() {
  return (
    <section className={`${styles.container} section-card`}>
      <p className="eyebrow">404</p>
      <h1 className={styles.title}>That page wandered off.</h1>
      <p className={styles.copy}>
        The link you followed doesn&apos;t match a current page on the site.
        The main pages below are still the best places to start.
      </p>
      <div className={styles.actions}>
        <Link to="/" className={styles.primaryLink}>
          Back home
        </Link>
        <Link to="/resume" className={styles.secondaryLink}>
          Open resume
        </Link>
      </div>
    </section>
  )
}
