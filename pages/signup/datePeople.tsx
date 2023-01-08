import React from 'react';
import styles from '../../styles/signup.module.css'

const DatePeople = () => {
  const sideText = 'sideText';
  const sideTextSub = 'sideTextSub';

  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftContent} id={styles.datePeopleBg}>
          <h2 className={styles.sideText}>{sideText}</h2>
          <h4 className={styles.sideTextSub}>{sideTextSub}</h4>
        </div>
        <div className={styles.rightContent}>
          right content
        </div>
      </div>
    </>
  )
}

export default DatePeople;
