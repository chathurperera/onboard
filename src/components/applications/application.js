import React, { useState } from "react";
import styles from "../../pages/application.module.scss";
import companyLogo from "../../images/companyLogo.png";
import clock from "../../images/clock.png";
import marker from "../../images/marker.png";
import money from "../../images/money.png";

const Application = () => {
  
  return (
    <div className={styles.applicationCard}>
      <div className={styles.requestCardTop}>
        <div className={styles.detailsWrap}>
          <div className={styles.companyLogo}>
            <img src={companyLogo} alt="company logo" />
          </div>
          <div className={styles.details}>
            <h2 className={styles.jobTitle}>Job title</h2>
            <p className={styles.companyName}>Company Name</p>
            {/* ApplicationCloseDate , location , PositionRemuneration */}
          </div>
        </div>
      </div>
      <div className={styles.pointsWrap}>
        <div className={styles.points}>
          <div className={styles.point}>
            <img src={clock} alt="clock icon" />
            closing date
          </div>
          <div className={styles.point}>
            <img src={marker} alt="marker icon" />
            Location
          </div>
          <div className={styles.point}>
            <img src={money} alt="money icon" />
            Salary
          </div>
        </div>
        {/* <div className={styles.toggle} onClick={() => setExpandInfo(prevState => !prevState )}>
          {!expandInfo ? "Expand" : "Hide"}{" "}
          <img src={!expandInfo ? expand : collapse} alt="toggle icon" />
        </div> */}
      </div>
      {/* {expandInfo && <div className={styles.applicationCardBottom}>
        <div>
            <h2>Requirements</h2>
            <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
            </ul>
        </div>

        </div>} */}
    </div>
  );
};

export default Application;
