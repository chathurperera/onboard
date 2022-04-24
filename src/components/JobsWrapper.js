import React, { useState } from "react";
import styles from "../components/jobsWrapper.module.scss";
import companyLogo from '../images/companyLogo.png';
import save from '../images/save.png';
import saved from '../images/saved.png';
import Job from "./Job";
import data from '../data.json';

export default function JobsWrapper() {
  const [expandDetails, setExpandDetails] = useState(false);
  const [listings, setListings] = useState(data);
  const wrapperStyles = {
    width: "100%",
    display: expandDetails ? "grid" : "block",
    gridTemplateColumns: "1fr 2fr",
    gridGap: "20px",
  };
  const expandJobInfo = {
    display: expandDetails ? "block" : "none",
    width: "100%",
    border: "1px dashed black",
  };
  const jobsContainer = {
    marginLeft: "20px",
    display: "grid",
    gridTemplateColumns: expandDetails ? "1fr" : "1fr 1fr 1fr",
    gridGap: "20px",
  };
  const jobsList = listings.map((job,idx) => {
    return <Job job={job} key={idx} />
  })
  return (
    <div className={styles.jobsWrapper}>
      <div className={styles.filter}>
        <div className={styles.alertCreate}>
          <p className={styles.alertTitle}>Create Job Alert</p>
          <p className={styles.alertDescription}>
            Create a job alert now and never miss a job
          </p>
          <input type="email" name="" id="" />
          <button>Create Job Alert</button>
        </div>
      </div>
      <div style={wrapperStyles}>
        <div style={jobsContainer}>
          {
            jobsList
          }
        </div>
        <div style={expandJobInfo}>More Details</div>
      </div>
    </div>
  );
}
