import { ReactNode } from 'react'
import styles from './ProjectCard.module.css'

interface ProjectCardProps {
  title: string
  href?: string
  tech: string
  children?: ReactNode
}

export default function ProjectCard({ title, href, tech, children }: ProjectCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        {href ? (
          <a className={styles.title} href={href} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        ) : (
          <span className={styles.title}>{title}</span>
        )}
        <span className={styles.tech}>{tech}</span>
      </div>
      {children}
    </div>
  )
}
