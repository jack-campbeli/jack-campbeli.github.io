import NavCard from '../components/NavCard'
import styles from './HomePage.module.css'

export default function HomePage() {
  return (
    <>
      <h1 className="page-title">Welcome</h1>
      <div className={styles.hero}>
        <p className={styles.intro}>
          Hi, I'm <strong>Jack Campbell</strong> — a software engineer based in
          the San Francisco Bay Area.
        </p>
        <p className={styles.sub}>
          I build software, work with data, and enjoy the collaborative side of
          engineering.
        </p>
      </div>

      <div className={styles.navCards}>
        <NavCard
          to="/about"
          label="About"
          description="Background, interests, and who I am"
        />
        <NavCard
          to="/resume"
          label="Resume"
          description="Experience, skills, and education"
        />
        <NavCard
          to="/posts"
          label="Posts"
          description="Writing, projects, and updates"
        />
      </div>
    </>
  )
}
