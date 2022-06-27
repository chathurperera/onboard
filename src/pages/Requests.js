import React from 'react'
import empty from '../images/empty.png';
import styles from './requests.module.scss';

const Requests = () => {
  return (
    <div className={styles.requests}>
      <div className={styles.noRequests}>
      <img src={empty} alt="empty documents" />
        <p>No Requests</p>
      </div>
    </div>
  )
}

export default Requests