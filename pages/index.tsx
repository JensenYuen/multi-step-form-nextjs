import styles from '../styles/Home.module.css'
import useTranslation from 'next-translate/useTranslation'
import NavBar from '../components/NavBar';

const Home = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <NavBar />
      <main className={styles.main}>
        testing text
        {t('greeting')}
      </main>
    </>
  )
}

export default Home;
