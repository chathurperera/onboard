import React, { useState } from "react";
import styles from "./jobsWrapper.module.scss";
export default function JobAlert(props) {
  const visibility = {
    display: props.showAlert ? "none" : "block",
  };
  const [mail, setMail] = useState("");
  const submitMail = () => {
    setMail("");
  };
  return (
    <div className={styles.filter} style={visibility}>
      <div className={styles.alertCreate}>
        <p className={styles.alertTitle}>Create Job Alert</p>
        <p className={styles.alertDescription}>
          Create a job alert now and never miss a job
        </p>
        <input
          type="email"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          name=""
          id=""
        />
        <button onClick={submitMail}>Create Job Alert</button>
      </div>
    </div>
  );
}
