import React from "react";
import styles from "./profile.module.scss";
import close from "../images/close (2).png";
import comingSoon from "../images/comingSoon.png";
import roles from '../roles.json';

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.comingSoonImage}>
        <img src={comingSoon} alt="" />
      </div>
      <div className={styles.comingSoonText}>
        <h1>Website under construction 🚧</h1>
      </div>
    </div>
  );
};

export default Profile;
