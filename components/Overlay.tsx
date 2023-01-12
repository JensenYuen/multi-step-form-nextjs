import React from 'react';
import styles from '../styles/overlay.module.css'

const Overlay = () => {

  return (
    <div className={styles.overlay}>
      <div className={styles.spinner}/>
    </div>
  );
}

export default Overlay;
