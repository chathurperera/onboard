import React, { useState, memo } from "react";
import styles from "./jobsWrapper.module.scss";
import companyLogo from "../../images/companyLogo.png";
import save from "../../images/save.png";
import saved from "../../images/saved.png";
import unclickedHeartWhite from "../../images/unclickedHeartWhite.png";
import unclickedHeartBlack from "../../images/unclickedHeartBlack.png";
import clickedHeartWhite from "../../images/clickedHeartWhite.png";
import clickedHeartRed from "../../images/clickedHeartRed.png";

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
        props.selectedJob.MatchedObjectId === props.job.MatchedObjectId &&
        props.expandDetails
          ? `${styles.job} ${styles.focused}`
          : `${styles.job}`
      }
      onClick={selectJob}
    >
      <div className={styles.logoWrapper}>
        <img className={styles.logo} src={companyLogo} alt="logo" />
        <div>
          <p className={styles.jobTitle}>
            {props.job.MatchedObjectDescriptor.PositionTitle}
          </p>
          <p className={styles.OrganizationName}>
            {props.job.MatchedObjectDescriptor.OrganizationName}
          </p>
        </div>
        <div className={styles.saveWrap} >
          <img
            onClick={props.toggleSave}
            className={styles.save}
            src={props.job.save ? clickedHeartRed : unclickedHeartBlack}
            alt="logo"
          />
        </div>
      </div>
      <div className={styles.jobTags}>
        <div className={styles.tag}>
          {props.job.MatchedObjectDescriptor.PositionSchedule[0].Name}
        </div>
        <div className={styles.tag}>
          {props.job.MatchedObjectDescriptor.JobCategory[0].Name}
        </div>
        {/* <div className={styles.tag}>
          {props.job.MatchedObjectDescriptor.PositionLocationDisplay}
        </div> */}
      </div>
      {/* <p className={styles.jobDescription}>
        {props.job.MatchedObjectDescriptor.UserArea.Details.JobSummary.substr(
          0,
          180
        )}...
      </p> */}
      {/* <div className={styles.buttons}>
        <button>Apply Now</button>
        <button>Learn More</button>
      </div> */}
    </div>
  );
});
export default Job;
