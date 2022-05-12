import React from "react";
import styles from "../components/jobsWrapper.module.scss";
export default function JobAlert(props) {
    const visibility = {
        display: props.showAlert ? 'none' : 'block'
    }
  return (
    <div className={styles.filter} style={visibility}>
      <div className={styles.alertCreate}>
        <p className={styles.alertTitle}>Create Job Alert</p>
        <p className={styles.alertDescription}>
          Create a job alert now and never miss a job
        </p>
        <input type="email" name="" id="" />
        <button>Create Job Alert</button>
      </div>
    </div>
  );
}
