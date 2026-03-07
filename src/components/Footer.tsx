import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="wrapper">
        <div className={styles.inner}>
          <div className={styles.copy}>
            <p className={styles.title}>Jack Campbell</p>
            <p className={styles.description}>
              Based in the San Francisco Bay Area and focused on thoughtful,
              collaborative software.
            </p>
          </div>

          <div className={styles.links}>
            <a href="mailto:jackwilliamleecampbell@gmail.com">Email</a>
            <a
              href="https://github.com/jack-campbeli"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jack-campbell-a392191a1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
