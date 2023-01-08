import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  const text = {
    leftContentTitle: 'マルチステップフォーム',
    leftContentSub: 'このサイトは前に担当した開発です。',
    projName: 'Offgrid',
    projDescription: 'Offgridは、登山の初心者向けに作成しました。',
    projLink: 'https://github.com/eztree/offgrid',
    linkText: '使ってみませんか'
  }

  return (
    <>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={`${styles.leftContent} ${styles.heroBanner}`}>
            <div className={`${styles.wrapper} ${styles.mb1}`}>
              <h2 className={styles.mr1}>{text.projName}</h2>
              <a href={text.projLink}
                target="_blank"
                rel="noopener noreferrer"
                className='fs-4 mx-2'
                style={{ marginRight: '1rem' }}
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
            <p className={styles.mb1}>{text.projDescription}</p>
          </div>
          <div className={styles.rightContent}>
            <h2 className={styles.mb1}>{text.leftContentTitle}</h2>
            <p className={styles.mb1}>{text.leftContentSub}</p>
            <button className={styles.button}>
              <Link href='/signup/datePeople'>{text.linkText}</Link>
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Home;
