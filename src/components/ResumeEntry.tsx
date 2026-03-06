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
      <div className={styles.body}>{children}</div>
      <div className={styles.meta}>
        <strong>{location}</strong>
        <br />
        {date}
      </div>
    </div>
  )
}
