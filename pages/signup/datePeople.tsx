import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import Overlay from '../../components/Overlay';
import styles from '../../styles/signup.module.css'
import { setTimeout } from 'timers';

const DatePeople = () => {
  const dateString = new Date().toISOString().split('T')[0];
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [peopleCount, setPeopleCount] = useState<number>(1);
  const [date, setDate] = useState<string>(dateString);
  const text = {
    "sideText": "始まりましょうか！",
    "sideTextSub": "行く場所への情報が教えてくたら、個人的なプランを準備してあげます！"
  }

  useEffect(() =>{
    setIsLoading(true);
    //useContext to be added

    setIsLoading(false);
  },[peopleCount, date])

  const convertCount = (count: string) => {
    setPeopleCount(parseInt(count))
  }

  return (
    <>
      {isLoading && <Overlay />}
      <div className='container'>
        <div className={`left-content ${styles.datePeopleBg}`}>
          <h2 className={styles.sideText}>{text.sideText}</h2>
          <h4 className={styles.sideTextSub}>{text.sideTextSub}</h4>
        </div>
        <div className='right-content'>
          <form className={styles.form}>
            <div className='mb-2'>
              <label htmlFor="date" className={`mr-1 f-500 ${styles.label}`}>日程 :</label>
              <input
                type="date"
                name="date"
                min={date}
                value={date}
                className={`${styles.input}`}
                onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className='mb-2'>
              <label htmlFor="range" className={`mr-1 f-500 ${styles.label}`}>人数 :</label>
              <input
                type="number"
                min='1'
                max='10'
                name="range"
                value={peopleCount}
                className={`${styles.input}`}
                onChange={(e) => convertCount(e.target.value)} />
            </div>
            <input type="submit" className={`${styles.btnNext}`} value='次に'/>
          </form>
        </div>
      </div>
    </>
  )
}

export default DatePeople;
