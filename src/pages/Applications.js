import React from 'react';
import { useState } from 'react';
import Application from '../components/applications/application';
import empty from '../images/empty.png';
import styles from './application.module.scss';

const Applications = () => {
  const [applications,setApplications] = useState([1,2,3,4]);
  return (
    <main className={styles.container}>
    <div className={styles.applications}>
     {applications.length === 0 ? <div className={styles.noApplications}>
        <img src={empty} alt="empty documents" />
        <p>No Applications</p>
      </div> : 
      applications.map(application => <Application />) 
      }
    </div>

    </main>
  )
}

export default Applications