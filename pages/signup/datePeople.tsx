import React from 'react';
import styles from '../../styles/signup.module.css'

const DatePeople = () => {
  const text = {
    "sideText": "始まりましょうか！",
    "sideTextSub": "行く場所への情報が教えてくたら、個人的なプランを準備してあげます！"
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftContent} id={styles.datePeopleBg}>
          <h2 className={styles.sideText}>{text.sideText}</h2>
          <h4 className={styles.sideTextSub}>{text.sideTextSub}</h4>
        </div>
        <div className={styles.rightContent}>
          right content
        </div>
      </div>
    </>
  )
}

export default DatePeople;
