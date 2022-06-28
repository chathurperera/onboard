import React from "react";
import styles from "./profile.module.scss";
import close from "../images/close (2).png";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.detailsSection}>
        <h3 className={styles.detailsTitle}>General</h3>
        <div className={styles.inputBox}>
          <label>Where do you live?</label>
          <input type="text" />
        </div>
        <div className={styles.inputBox}>
          <label>Your Primary Role</label>
          <input type="text" />
        </div>
        <div className={styles.inputBox}>
          <label>Other Roles you are open to</label>
          <div className={styles.openRoles}>
            <div className={styles.role}>Frontend developer <img src={close} alt="close icon" /></div>
          </div>
        </div>
      </div>
      <div className={styles.skillsSection}>

      </div>
    </div>
  );
};

export default Profile;
