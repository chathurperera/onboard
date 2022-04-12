import React from "react";
import styles from "../components/header.module.scss";
import profileImage from "../images/profileImage.png";
import downArrow from "../images/downArrow.png";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrap}>

      <div className={styles.logo}>
          <h1>ONBOARD</h1>
      </div>
      <div className={styles.profile}>
        <img src={profileImage} className={styles.profileImage} alt="" />
        <p>Chathura perera</p>
        <img src={downArrow} className={styles.downArrow} alt="" />
      </div>
      </div>
    </header>
  );
}
