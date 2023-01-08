import styles from '../styles/Home.module.css'
import useTranslation from 'next-translate/useTranslation'
import NavBar from '../components/NavBar';

const Home = () => {

  return (
    <>
      <NavBar />
      <main className={styles.main}>
        Hello world
      </main>
    </>
  )
}

export default Home;
