import React from 'react'
import styles from "../components/jobsWrapper.module.scss";
import companyLogo from '../images/companyLogo.png';
import save from '../images/save.png';
import saved from '../images/saved.png';

export default function Job(props) {
  return (
    <div className={styles.job} onClick={props.toggleMoreDetails}>
    <div className={styles.logoWrapper}>
    <img
      className={styles.logo}
      src={companyLogo}
      alt="logo"
    />
    <img
    onClick={props.toggleSave}
      className={styles.save}
      src={props.job.save ? saved : save}
      alt="logo"
    />
    </div>
    <p className={styles.jobTitle}>{props.job.title }</p>
    <div className={styles.jobTags}>
        <div className={styles.tag}>{ props.job.tags.type}</div>
        <div className={styles.tag}>{props.job.tags.seniority}</div>
        <div className={styles.tag}>{props.job.tags.salary}</div>
    </div>
    <p className={styles.jobDescription}>{props.job.extraDetails.description}
    </p>
    <div className={styles.buttons}>
        <button>Apply Now</button>
        <button>Learn More</button>
    </div>
  </div>
  )
}
