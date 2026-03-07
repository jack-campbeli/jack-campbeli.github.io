import { Link } from 'react-router-dom'
import styles from './AboutPage.module.css'

export default function AboutPage() {
  return (
    <div className="page-shell">
      <section className={`${styles.hero} section-card`}>
        <div className={styles.photoWrap}>
          <img
            src="/images/profile_photo.jpeg"
            alt="Jack Campbell"
            className={styles.photo}
          />
        </div>

        <div className={styles.copy}>
          <p className="eyebrow">About</p>
          <h1 className="page-title">Hi, I&apos;m Jack.</h1>
          <p className={styles.lead}>
            I&apos;m a software engineer who enjoys the kind of work that feels
            both technically sharp and genuinely useful to the people around it.
          </p>
          <p>
            I graduated from Boston University after completing both my
            undergraduate and master&apos;s degrees, and I&apos;m currently
            working as an Associate Software Engineer at Tendo Systems.
          </p>
          <p>
            I like digging into technical problems, but I care just as much
            about how the work feels in practice: how clearly it&apos;s scoped,
            how smoothly it&apos;s delivered, and how easy it is for other
            people to build on afterward.
          </p>
          <p>
            Collaborative environments tend to bring out my best work. I enjoy
            shared problem solving, thoughtful iteration, and helping technical
            ideas land in a way that feels clear and approachable.
          </p>
          <div className={styles.actions}>
            <Link to="/resume" className={styles.primaryLink}>
              View resume
            </Link>
            <a
              href="mailto:jackwilliamleecampbell@gmail.com"
              className={styles.secondaryLink}
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      <section className={styles.grid}>
        <article className={`${styles.card} section-card`}>
          <p className="eyebrow">What matters to me</p>
          <h2 className="section-heading">A few constants in how I work</h2>
          <ul className={styles.list}>
            <li>Clear communication beats avoidable complexity.</li>
            <li>Good software should feel dependable and easy to navigate.</li>
            <li>Strong teams usually come from generosity, curiosity, and follow-through.</li>
          </ul>
        </article>

        <article className={`${styles.card} section-card`}>
          <p className="eyebrow">Snapshot</p>
          <div className={styles.snapshotList}>
            <div>
              <span className={styles.snapshotLabel}>Based in</span>
              <strong>San Francisco Bay Area</strong>
            </div>
            <div>
              <span className={styles.snapshotLabel}>Studied at</span>
              <strong>Boston University</strong>
            </div>
            <div>
              <span className={styles.snapshotLabel}>Interested in</span>
              <strong>Software, data, and collaborative product work</strong>
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}
