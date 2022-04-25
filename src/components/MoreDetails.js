import React from "react";
import styles from "../components/MoreDetails.module.scss";
import companyLogo from "../images/companyLogo.png";
import shareIcon from "../images/share.png";
export default function MoreDetails(props) {
  return (
    <div className={styles.wrapper} style={props.styles}>
      <div className={styles.logoWrapper}>
        <img src={companyLogo} alt="" />
      </div>
      <div className={styles.jobTitle}>
        <h2>UI/UX Designer</h2>
        <img src={shareIcon} alt="share" />
      </div>
      <div className={styles.companyDetails}>
        <p>
          <span className={styles.companyName}>Patreon</span>
          <span className={styles.companyLocation}>Landontown, MD</span>
        </p>
        <p>
          <span className={styles.postedDate}>Posted 8 days ago</span>
          <span className={styles.applicantsCount}>98 Applicants</span>
        </p>
      </div>
    </div>
  );
}
