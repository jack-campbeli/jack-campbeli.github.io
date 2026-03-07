import { Link } from 'react-router-dom'
import styles from './NavCard.module.css'

type NavCardProps = {
  label: string
  description: string
} & (
  | {
      to: string
      href?: never
    }
  | {
      href: string
      to?: never
    }
)

export default function NavCard({ to, href, label, description }: NavCardProps) {
  const content = (
    <>
      <span className={styles.label}>{label}</span>
      <span className={styles.desc}>{description}</span>
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        className={styles.card}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    )
  }

  return (
    <Link to={to!} className={styles.card}>
      {content}
    </Link>
  )
}
