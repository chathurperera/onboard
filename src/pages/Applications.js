import React from 'react';
import empty from '../images/empty.png';
import styles from './application.module.scss';

const Applications = () => {
  return (
    <div className={styles.applications}>
      <div className={styles.noApplications}>
        <img src={empty} alt="empty documents" />
        <p>No Applications</p>
      </div>
    </div>
  )
}

export default Applications