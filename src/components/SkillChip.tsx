import styles from './SkillChip.module.css'

interface SkillChipProps {
  label: string
  proficient?: boolean
}

export default function SkillChip({ label, proficient }: SkillChipProps) {
  return (
    <span className={`${styles.chip} ${proficient ? styles.proficient : ''}`}>
      {label}
    </span>
  )
}
