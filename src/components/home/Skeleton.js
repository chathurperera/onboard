import React from "react";
import styles from "./Skeleton.module.scss";
export const Skeleton = () => {
  return (
    <div className={styles.skeleton}>
      <div className={styles.logoWrap}>
        <div className={styles.logo}></div>
        <div>
          <div className={styles.title}></div>
          <div className={styles.companyName}></div>
        </div>
      </div>
      <div className={styles.moreDetails}>
        <div className={styles.detail}></div>
        <div className={styles.detail}></div>
        <div className={styles.detail}></div>
      </div>
      {/* <div className={styles.para}></div>
      <div className={styles.para}></div>
      <div className={styles.para}></div> */}
      <div className={styles.overlay}></div>
    </div>
  );
};
