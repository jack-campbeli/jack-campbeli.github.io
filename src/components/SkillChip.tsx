import styles from './SkillChip.module.css'

interface SkillChipProps {
  label: string
  proficient?: boolean
  small?: boolean
}

export default function SkillChip({ label, proficient, small }: SkillChipProps) {
  return (
    <span className={[styles.chip, proficient && styles.proficient, small && styles.small].filter(Boolean).join(' ')}>
      {label}
    </span>
  )
}
