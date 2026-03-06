import { Link } from 'react-router-dom'
import styles from './NavCard.module.css'

interface NavCardProps {
  to: string
  label: string
  description: string
}

export default function NavCard({ to, label, description }: NavCardProps) {
  return (
    <Link to={to} className={styles.card}>
      <span className={styles.label}>{label}</span>
      <span className={styles.desc}>{description}</span>
    </Link>
  )
}
