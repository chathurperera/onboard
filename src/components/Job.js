import React from 'react'
import styles from "../components/jobsWrapper.module.scss";
import companyLogo from '../images/companyLogo.png';
import save from '../images/save.png';
import saved from '../images/saved.png';

export default function Job() {
  return (
    <div className={styles.job}>
    <div className={styles.logoWrapper}>
    <img
      className={styles.logo}
      src={companyLogo}
      alt="logo"
    />
    <img
      className={styles.save}
      src={save}
      alt="logo"
    />
    </div>
    <p className={styles.jobTitle}>UI / UX Designer</p>
    <p className={styles.jobDescription}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Cupiditate minus rerum nulla, nihil voluptatibus praesentium.
    </p>
    <div className={styles.jobTags}>
        <div className={styles.tag}>Full Time</div>
        <div className={styles.tag}>Remote</div>
        <div className={styles.tag}>LKR100,00</div>
    </div>
    <div className={styles.buttons}>
        <button>Apply Now</button>
        <button>Learn More</button>
    </div>
  </div>
  )
}
