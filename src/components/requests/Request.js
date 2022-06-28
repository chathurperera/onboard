import React, { useState } from "react";
import styles from "../../pages/requests.module.scss";
import companyLogo from "../../images/companyLogo.png";
import clock from "../../images/clock.png";
import marker from "../../images/marker.png";
import money from "../../images/money.png";
import expand from "../../images/angle-small-down.png";
import collapse from "../../images/angle-small-up.png";

const Request = () => {
  const [expandInfo, setExpandInfo] = useState(false);
  return (
    <div className={styles.requestCard}>
      <div className={styles.requestCardTop}>
        <div className={styles.detailsWrap}>
          <div className={styles.companyLogo}>
            <img src={companyLogo} alt="company logo" />
          </div>
          <div className={styles.details}>
            <h2 className={styles.jobTitle}>Job title</h2>
            <p className={styles.companyName}>Company Name</p>
          </div>
        </div>
        <div className={styles.btnWrap}>
          <button className={styles.acceptBtn}>Accept</button>
          <button className={styles.rejectBtn}>Reject</button>
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
        <div
          className={styles.toggle}
          onClick={() => setExpandInfo((prevState) => !prevState)}
        >
          {!expandInfo ? "Expand" : "Hide"}{" "}
          <img src={!expandInfo ? expand : collapse} alt="toggle icon" />
        </div>
      </div>
      {expandInfo && (
        <div className={styles.requestCardBottom}>
          <div>
            <h2>Overview</h2>
            <p className={styles.overview}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              quisquam doloribus iusto omnis ipsum quo praesentium?
              Exercitationem id, hic nesciunt repellat ab tempora recusandae
              molestiae! Quis distinctio ut illum necessitatibus!
            </p>
            <h2>Requirements</h2>
            <ul>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Request;
