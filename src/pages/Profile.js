import React, { useState } from "react";
import styles from "./profile.module.scss";
import close from "../images/close (2).png";
import jobRoles from "../data.json";

const Profile = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openToRoles, setOpenToRoles] = useState([]);

  const addRole = (newRole) => {
    setOpenToRoles((prevRoles) => [...prevRoles, newRole]);
    setSearchQuery("");
  };
  return (
    <main className={styles.container}>
      <div className={styles.profile}>
        <div>
          <div className={styles.detailsSection}>
            <div className={styles.cardHeader}>BASIC INFO</div>
            <div className={styles.detailsWrapper}>
              <div className="right">
                <div className={styles.inputBox}>
                  <label htmlFor="">First Name</label>
                  <input type="text" name="" id="" />
                </div>
                <div className={styles.inputBox}>
                  <label htmlFor="">Last Name</label>
                  <input type="text" name="" id="" />
                </div>
              </div>
              <div className="right">
                <div className={styles.inputBox}>
                  <label htmlFor="">Email</label>
                  <input type="email" name="" id="" />
                </div>
                <div className={styles.inputBox}>
                  <label htmlFor="">Phone Number</label>
                  <input type="text" name="" id="" />
                </div>
              </div>
              <div className={`${styles.inputBox} ${styles.fullWidth}`}>
                <label htmlFor="">Address</label>
                <input type="text" name="" id="" />
              </div>
            </div>
          </div>
          <div className={styles.detailsSection}>
            <div className={styles.cardHeader}>EXTERNAL LINKS</div>
            <div className={styles.detailsWrapper}>
              <div className="right">
                <div className={styles.inputBox}>
                  <label htmlFor="">Linkedin</label>
                  <input type="text" name="" id="" />
                </div>
                <div className={styles.inputBox}>
                  <label htmlFor="">Github</label>
                  <input type="text" name="" id="" />
                </div>
              </div>
              <div className="right">
                <div className={styles.inputBox}>
                  <label htmlFor="">Portfolio</label>
                  <input type="text" name="" id="" />
                </div>
                <div className={styles.inputBox}>
                  <label htmlFor="">Codersrank</label>
                  <input type="text" name="" id="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.skillsSection}></div>
      </div>
    </main>
  );
};

export default Profile;
