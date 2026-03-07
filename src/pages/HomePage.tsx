import { Link } from 'react-router-dom'
import NavCard from '../components/NavCard'
import ProjectCard from '../components/ProjectCard'
import styles from './HomePage.module.css'

export default function HomePage() {
  return (
    <div className="page-shell">
      <section className={`${styles.hero} section-card`}>
        <div className={styles.heroCopy}>
          <p className="eyebrow">Bay Area software engineer</p>
          <h1 className={styles.heroTitle}>
            Thoughtful software, clean interfaces, and collaborative work that
            feels easy to be part of.
          </h1>
          <p className={styles.heroText}>
            I&apos;m Jack Campbell. I enjoy building reliable systems, shaping
            approachable product experiences, and helping teams move from fuzzy
            ideas to polished outcomes.
          </p>

          <div className={styles.heroActions}>
            <Link to="/resume" className={styles.primaryAction}>
              View resume
            </Link>
            <Link to="/about" className={styles.secondaryAction}>
              More about me
            </Link>
          </div>
        </div>

        <div className={styles.heroPanel}>
          <div className={styles.panelItem}>
            <span className={styles.panelLabel}>Currently</span>
            <strong>Associate Software Engineer at Tendo Systems</strong>
          </div>
          <div className={styles.panelItem}>
            <span className={styles.panelLabel}>Focus</span>
            <strong>Product-minded engineering, data fluency, and smooth UX</strong>
          </div>
          <div className={styles.panelItem}>
            <span className={styles.panelLabel}>Style</span>
            <strong>Calm, collaborative, detail-first, and practical</strong>
          </div>
        </div>
      </section>

      <section className={styles.sectionBlock}>
        <div className={styles.sectionIntro}>
          <p className="eyebrow">How I work</p>
          <h2 className="section-heading">Clean and approachable is the goal.</h2>
          <p className="section-copy">
            The work I enjoy most sits at the intersection of clear thinking,
            technical depth, and a user experience that never feels heavier than
            it needs to.
          </p>
        </div>

        <div className={styles.valueGrid}>
          <article className={`${styles.valueCard} section-card`}>
            <h3>Build with structure</h3>
            <p>
              I like systems that are easy to understand, easy to maintain, and
              considerate about the people using them.
            </p>
          </article>
          <article className={`${styles.valueCard} section-card`}>
            <h3>Work well with others</h3>
            <p>
              Collaboration matters to me. Strong communication and thoughtful
              iteration usually create the best technical outcomes.
            </p>
          </article>
          <article className={`${styles.valueCard} section-card`}>
            <h3>Keep the details smooth</h3>
            <p>
              The small things count. Performance, polish, layout rhythm, and
              clarity all shape whether something feels finished.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.sectionBlock}>
        <div className={styles.sectionIntro}>
          <p className="eyebrow">Start here</p>
          <h2 className="section-heading">A quick way around the site</h2>
          <p className="section-copy">
            The home page gives the overview. The pages below go deeper when you
            want more context.
          </p>
        </div>

        <div className={styles.navCards}>
          <NavCard
            to="/about"
            label="About"
            description="A friendlier snapshot of how I think, work, and what I care about."
          />
          <NavCard
            to="/resume"
            label="Resume"
            description="Experience, skills, education, and selected projects in one clean view."
          />
          <NavCard
            href="mailto:jackwilliamleecampbell@gmail.com"
            label="Contact"
            description="Reach out directly if you want to talk about software, data, or collaboration."
          />
        </div>
      </section>

      <section className={styles.sectionBlock}>
        <div className={styles.sectionIntro}>
          <p className="eyebrow">Selected work</p>
          <h2 className="section-heading">A few things I&apos;ve built</h2>
        </div>

        <div className={styles.projectGrid}>
          <ProjectCard
            title="Department of Defense Research"
            href="https://github.com/jack-campbeli/DoD-ds701"
            tech="Python / Jupyter / API research"
          >
            <p>
              Budget and spending analysis built around the USASpending.gov API
              with clear data storytelling and visualization.
            </p>
          </ProjectCard>

          <ProjectCard
            title="Boston University SPARK! Fellowship"
            href="https://github.com/jack-campbeli/Synth-Sense"
            tech="React / ml5 / collaborative product build"
          >
            <p>
              A team-led React application combining computer vision, external
              APIs, and generative art in a structured sprint environment.
            </p>
          </ProjectCard>
        </div>
      </section>
    </div>
  )
}
