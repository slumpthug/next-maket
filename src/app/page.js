import { Inter } from 'next/font/google'
import styles from './page.module.css'
import First from '@/components/first/First'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <First/>
    </main>
  )
}
