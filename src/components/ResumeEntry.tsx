import { ReactNode } from 'react'
import styles from './ResumeEntry.module.css'

interface ResumeEntryProps {
  children: ReactNode
  location: string
  date: string
}

export default function ResumeEntry({ children, location, date }: ResumeEntryProps) {
  return (
    <div className={styles.entry}>
      <div className={styles.meta}>
        <strong className={styles.location}>{location}</strong>
        <span className={styles.date}>{date}</span>
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  )
}
