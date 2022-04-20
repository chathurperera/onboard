import React from 'react';
import styles from '../components/jobsWrapper.module.scss';
export default function JobsWrapper() {
    const wrapperStyles = {
        display: 'grid',
        gridTemplateColumns: '2fr 8fr',
        backgroundColor: 'black',
        width: '90%',
        maxWidth:  '1700px',
        margin:'0 auto',
    }

  return (
    <div style={wrapperStyles} className={styles.jobsWrapper} >
        <div></div>
    </div>
  )
}
