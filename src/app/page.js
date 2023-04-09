import { Inter } from 'next/font/google'
import styles from './page.module.css'
import First from '@/components/first/First'
import Second from '@/components/second/Second'
import Third from '@/components/third/Third'
import Fourth from '@/components/fourth/Fourth'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <First/>
      <Second/>
      <Third/>
      <Fourth/>
    </main>
  )
}
