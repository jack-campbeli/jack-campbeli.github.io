import { Link } from 'react-router-dom'
import styles from './AppsPage.module.css'

export default function AppsPage() {
  return (
    <div className="page-shell">
      <section className={`${styles.card} section-card`}>
        <p className="eyebrow">Apps</p>
        <h1 className="page-title">Small tools for everyday use.</h1>
        <p className="page-intro">Apps I build, with setup guides, support, and privacy information.</p>
      </section>
      <article className={`${styles.card} section-card`}>
        <p className="eyebrow">Safari extension · Free · Coming soon</p>
        <h2 className="section-heading">Desktop Please</h2>
        <p>Automatically send desktop browser requests when you visit Reddit in Safari. Set it up once, then browse as usual.</p>
        <p>For iPhone and iPad running iOS or iPadOS 16.4 or later. App Store release is in preparation.</p>
        <Link to="/apps/desktop-please">Setup, support, and privacy →</Link>
      </article>
    </div>
  )
}
