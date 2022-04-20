import React from 'react';
import styles from '../components/jobsWrapper.module.scss';
export default function JobsWrapper() {
    const wrapperStyles = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
    }

  return (
    <div  className={styles.jobsWrapper} >
        <div className={styles.filter}>
            <div className={styles.alertCreate}>
                <p className={styles.alertTitle}>Create Job Alert</p>
                <p className={styles.alertDescription}>Create a job alert now and never miss a job</p>
                <input type="email" name="" id="" />
                <button>Create Job Alert</button>
            </div>
        </div>
        <div style={wrapperStyles}>

        </div>
    </div>
  )
}
