import styles from './NotFoundPage.module.css'

export default function NotFoundPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.code}>404</h1>
      <p><strong>Page not found :(</strong></p>
      <p>The requested page could not be found.</p>
    </div>
  )
}
