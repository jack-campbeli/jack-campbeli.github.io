import { Link } from 'react-router-dom'
import styles from './AboutPage.module.css'

export default function AboutPage() {
  return (
    <>
      <h1 className="page-title">About</h1>
      <div className={styles.intro}>
        <div>
          <img
            src="/images/profile_photo.jpeg"
            alt="Jack Campbell"
            className={styles.photo}
          />
        </div>
        <div className={styles.text}>
          <p>Hi there, I'm Jack!</p>
          <p>
            I'm a graduate of Boston University, where I completed both my
            undergraduate and master's degrees. I'm currently working as an
            Associate Software Engineer at Tendo Systems.
          </p>
          <p>
            I love technology and enjoy diving deep into technical challenges,
            and I thrive in collaborative environments. I've always gravitated
            toward collaborative projects, work-related or not, and have a
            strong affinity for getting the most out of the people I'm working
            with.
          </p>
          <p>
            Feel free to explore my <Link to="/resume">resume</Link> to learn
            more about my experience, and check out my{' '}
            <Link to="/posts">posts</Link> to see what I've been working on.
          </p>
        </div>
      </div>
    </>
  )
}
