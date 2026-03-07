import ResumeEntry from '../components/ResumeEntry'
import ProjectCard from '../components/ProjectCard'
import SkillChip from '../components/SkillChip'
import styles from './ResumePage.module.css'

export default function ResumePage() {
  return (
    <div className="page-shell">
      <section className={`${styles.hero} section-card`}>
        <div>
          <p className="eyebrow">Resume</p>
          <h1 className={styles.name}>Jack Campbell</h1>
        </div>
        <div className={styles.links}>
          <a href="mailto:jackwilliamleecampbell@gmail.com">Email</a>
          <a href="https://github.com/jack-campbeli" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/jack-campbell-a392191a1/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </section>

      <section className={`${styles.section} section-card`}>
        <div className={styles.sectionHeader}>
          <h2>Education</h2>
        </div>
        <div className={styles.entries}>
          <ResumeEntry location="Boston, MA" date="May 2024">
            <strong>BOSTON UNIVERSITY</strong><br /><br />
            <strong>M.S. Data Science</strong>; <em>Dean&apos;s List: Fall 2023</em><br /><br />
            Relevant Coursework: GCP principles, classifiers,{' '}
            <a href="https://docs.google.com/document/d/1NOsExgqH_jEV_oVRPdMx0JZHlDWQFi6wJADeJ9WZqEo/edit?tab=t.0" target="_blank" rel="noopener noreferrer">OLS regression</a>
            , reinforcement learning deep learning principles,{' '}
            <a href="https://docs.google.com/document/d/1LpfRWO9o8MoUjylvxIJE1Ap2WbXYzH2JCeBXDRTwnvU/edit?tab=t.0" target="_blank" rel="noopener noreferrer">SARIMA modeling</a>
            , cryptography principles.
          </ResumeEntry>

          <ResumeEntry location="Boston, MA" date="May 2023">
            <strong>BOSTON UNIVERSITY</strong><br /><br />
            <strong>B.A. Computer Science</strong>; <em>Dean&apos;s List: Fall 2022</em><br /><br />
            Relevant Coursework: Data structures and algorithms, software engineering principles/OOP, SQL-like database principles, scrum/agile methodologies and projects.
          </ResumeEntry>
        </div>
      </section>

      <section className={`${styles.section} section-card`}>
        <div className={styles.sectionHeader}>
          <h2>Technical Skills</h2>
        </div>
        <div className={styles.skillChips}>
          <SkillChip label="Python" proficient />
          <SkillChip label="Pandas" proficient />
          <SkillChip label="Flask" proficient />
          <SkillChip label="R" proficient />
          <SkillChip label="SQL" proficient />
          <SkillChip label="QA" proficient />
          <SkillChip label="Git / GitHub" proficient />
          <SkillChip label="Scrum" proficient />
          <SkillChip label="Jinja / HTML" proficient />
          <SkillChip label="Java" />
          <SkillChip label="GCP" />
          <SkillChip label="React" />
          <SkillChip label="JavaScript" />
          <SkillChip label="UML Modeling" />
          <SkillChip label="C" />
        </div>
      </section>

      <section className={`${styles.section} section-card`}>
        <div className={styles.sectionHeader}>
          <h2>Relevant Experience</h2>
        </div>
        <div className={styles.entries}>
          <ResumeEntry location="Remote" date="November 2025 - Current">
            <strong>Tendo Systems - Associate Software Engineer</strong><br /><br />
            Contributing to core platform development by designing and implementing new algorithms and driving QDI data pipeline fixes to improve data quality and reliability.
          </ResumeEntry>

          <ResumeEntry location="Walnut Creek, CA" date="August 2024 – October 2025">
            <strong>VWHousen &amp; Associates - Project Engineer/Software Engineer</strong><br /><br />
            Independently led technical development and project management efforts to design, implement, and deploy custom software solutions automating municipal water and wastewater infrastructure workflows. Collaborated closely with stakeholders and civil engineers to identify key automation opportunities, translate operational requirements into effective software solutions, and significantly enhance productivity and efficiency by reducing critical engineering processes from weeks to days.<br /><br />
            <em>Technologies: Python, PyQt5, Pandas, Pulp, NumPy, PyInstaller, Excel, OOPJ</em>
          </ResumeEntry>

          <ResumeEntry location="Boston, MA" date="February – May 2024">
            <strong>BOSTON UNIVERSITY - CDS DS 719 Inaugural Teaching Assistant</strong><br /><br />
            Drove course design by actively shaping structure, content, and grading through direct collaboration with the professor. Led efforts to shift the course toward a hands-on, communication-focused format that equipped students to engage effectively with diverse, non-technical stakeholders in applied data science and computer science contexts.
          </ResumeEntry>

          <ResumeEntry location="Boston, MA" date="March 2024">
            <strong>MassMutual Data Days 4 Good 2024 Hackathon: BU DEI - Developer/Project Lead</strong><br /><br />
            Developed and deployed an interactive{' '}
            <a href="https://github.com/BU-Spark/dd4g-bu-tech-majors-survey" target="_blank" rel="noopener noreferrer">Shiny application</a>
            {' '}in a 4-day sprint with a mixed undergraduate and graduate team, enabling dynamic exploration and visualization of student survey data. Managed project scoping, designed intuitive data interactions, and collaborated closely with stakeholders and team members to align visualization tools with survey objectives.<br /><br />
            <em>Technologies: R, Shiny</em>
          </ResumeEntry>
        </div>
      </section>

      <section className={`${styles.section} section-card`}>
        <div className={styles.sectionHeader}>
          <h2>Highlighted University Projects</h2>
        </div>
        <div className={styles.projectGrid}>
          <ProjectCard
            title="Department of Defense Research (2023)"
            href="https://github.com/jack-campbeli/DoD-ds701"
            tech="Python/Jupyter · Seaborn · USASpending.gov API"
          >
            <p>Researched annual spending and budgetary resources of the Department of Defense and associated sub-agencies. Utilized the USASpending.gov API to query and plot annual department budget and spending, sub-agency spending, and the largest contracts per NAICS code.</p>
          </ProjectCard>

          <ProjectCard
            title="Boston University SPARK! Fellowship — React Application (2023)"
            href="https://github.com/jack-campbeli/Synth-Sense"
            tech="React.js · ml5 · HTML/CSS · Jira · Miro"
          >
            <p>As Scrum Lead, led a team of students to build an interactive{' '}
              <a href="https://synth-sense1.web.app/" target="_blank" rel="noopener noreferrer">application</a>
              {' '}combining computer vision libraries with various environmental APIs to create generative art. Facilitated Scrum meetings, represented the team with industry mentors, and significantly contributed to software development.</p>
          </ProjectCard>

          <ProjectCard
            title="Research on Student LLM Usage (2023)"
            href="https://docs.google.com/document/d/11_b9v9RKYkDU46_3_Bn7h7nzL9OEoOs7Ds2ices05X4/edit?usp=sharing"
            tech="Qualitative Research"
          >
            <p>Formulated and executed a qualitative research study on student usage and sentiment of LLMs in university settings, aiming to better align school policy with students&apos; needs and desires.</p>
          </ProjectCard>

          <ProjectCard
            title="Flask Photo Sharing Application (2023)"
            tech="Flask · Jinja/HTML · Python · MySQL Workbench"
          />

          <ProjectCard
            title="Flask Web Application (2022)"
            href="https://github.com/jack-campbeli/411-Project-Group-1"
            tech="NASA API · DALL-E API · Flask · Jinja · Python · SQLite · Bootstrap"
          />
        </div>
      </section>
    </div>
  )
}
