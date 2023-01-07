import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <>
      <main className={styles.main}>
        Hello world
      </main>
    </>
  )
}

export default Home;
