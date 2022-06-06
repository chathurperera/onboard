import React, { useState, memo } from "react";
import styles from "./jobsWrapper.module.scss";
import companyLogo from "../../images/companyLogo.png";
import save from "../../images/save.png";
import saved from "../../images/saved.png";

export const Job = memo((props) => {
  const [focused, setFocused] = useState(false);
  function selectJob(toggleFunc) {
    setFocused(!focused);
    props.setSelectedJob(props.job);
    props.setExpandDetails(true);
  }
  console.log("job rendered");
  return (
    <div
      className={
        props.selectedJob.id === props.job.id && props.expandDetails
          ? `${styles.job} ${styles.focused}`
          : `${styles.job}`
      }
      onClick={selectJob}
    >
      <div className={styles.logoWrapper}>
        <img className={styles.logo} src={companyLogo} alt="logo" />
        <img
          onClick={props.toggleSave}
          className={styles.save}
          src={props.job.save ? saved : save}
          alt="logo"
        />
      </div>
      <p className={styles.jobTitle}>{props.job.title}</p>
      <div className={styles.jobTags}>
        <div className={styles.tag}>{props.job.tags.type}</div>
        <div className={styles.tag}>{props.job.tags.seniority}</div>
        <div className={styles.tag}>{props.job.tags.salary}</div>
      </div>
      <p className={styles.jobDescription}>
        {props.job.extraDetails.description}
      </p>
      <div className={styles.buttons}>
        <button>Apply Now</button>
        <button>Learn More</button>
      </div>
    </div>
  );
});
export default Job