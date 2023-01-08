import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Footer from '../components/Footer';

const Home = () => {
  const text = {
    leftContentTitle: 'マルチステップフォーム',
    leftContentSub: 'このサイトは前に担当した開発です',
    rightContent: 'placeholder',
    linkText: '使ってみよう'
  }

  return (
    <>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={`${styles.leftContent} ${styles.heroBanner}`}>
            <h2>{text.leftContentTitle}</h2>
            <p>{text.leftContentSub}</p>
          </div>
          <div className={styles.rightContent}>
            {text.rightContent}
            <button>
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
