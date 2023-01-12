import React from 'react';
import Router from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css'

const Home = () => {
  const text = {
    leftContentTitle: 'マルチステップフォーム',
    leftContentSub: 'このサイトは前に担当した開発です。',
    projName: 'Offgrid',
    projDescription: 'Offgridは、登山の初心者向けに作成しました。',
    projLink: 'https://github.com/eztree/offgrid',
    linkText: '使ってみませんか'
  }

  const linkTo = () => {
    Router.push('/signup/datePeople');
  }

  return (
    <>
      <main className='main'>
        <div className='container'>
          <div className={`left-content ${styles.heroBanner}`}>
            <div className='wrapper mb-1'>
              <h2 className='mr-1'>{text.projName}</h2>
              <a href={text.projLink}
                target="_blank"
                rel="noopener noreferrer"
                className='mr-1'
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
            <p className='mb-1'>{text.projDescription}</p>
          </div>
          <div className='right-content'>
            <h2 className='mb-1'>{text.leftContentTitle}</h2>
            <p className='mb-1'>{text.leftContentSub}</p>
            <button className={styles.button} onClick={() => linkTo()}>
              {text.linkText}
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Home;
