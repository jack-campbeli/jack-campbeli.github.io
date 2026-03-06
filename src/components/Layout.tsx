import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import styles from './Layout.module.css'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.site}>
      <Header />
      <main className="page-content">
        <div className="wrapper">{children}</div>
      </main>
      <Footer />
    </div>
  )
}
