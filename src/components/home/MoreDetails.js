import React from "react";
import styles from "./MoreDetails.module.scss";
import Moment from "react-moment";
import close from "../../images/cross.png";
import shareIcon from "../../images/share.png";
export default function MoreDetails(props) {
  return (
    <div className={styles.wrapper} style={props.styles}>
      <img
        src={close}
        className={styles.close}
        alt=""
        onClick={() => props.setExpandDetails(false)}
      />
      {/* <div className={styles.logoWrapper}>
        <img src={props.moreDetails.company_logo} alt="company logo" />
      </div> */}
      <div className={styles.jobTitle}>
        <h2>{props.moreDetails.MatchedObjectDescriptor?.PositionTitle}</h2>
        <img src={shareIcon} alt="share" />
      </div>
      <div className={styles.companyDetails}>
        <p>
          <span className={styles.companyName}>
            {props.moreDetails.MatchedObjectDescriptor?.OrganizationName}
          </span>
        </p>
        <p>
          <span className={styles.postedDate}>
            Posted on{" "}
            <Moment format="YYYY/MM/DD">
              {props.moreDetails.MatchedObjectDescriptor?.PublicationStartDate}
            </Moment>
          </span>
          {/* <span className={styles.applicantsCount}>98 Applicants</span> */}
        </p>
      </div>
      <div className={styles.roleDetails}>
        <div className={styles.detail}>
          <p className={styles.label}>Category</p>
          <p className={styles.value}>
            {props.moreDetails.MatchedObjectDescriptor?.JobCategory[0].Name}
          </p>
        </div>
        <div className={styles.detail}>
          <p className={styles.label}>Employee type</p>
          <p className={styles.value}>
            {props.moreDetails.MatchedObjectDescriptor?.PositionSchedule[0].Name}
          </p>
        </div>
          <div className={styles.detail}>
            <p className={styles.label}>Offer Salary</p>
            <p className={styles.value}>
              {
                props.moreDetails.MatchedObjectDescriptor?.PositionRemuneration[0].MinimumRange
              }$
              /{props.moreDetails.MatchedObjectDescriptor?.PositionRemuneration[0].RateIntervalCode}
            </p>
          </div>
        
      </div>
      <div className={styles.details}>
        <div className={styles.overView}>
          <h2>Overview</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
            reprehenderit sint? Reiciendis nam doloribus necessitatibus
            dignissimos tempora ipsum deserunt sit, pariatur nostrum saepe unde
            deleniti sapiente id voluptatum totam et repellat exercitationem
            voluptas corporis voluptate accusantium labore illum? Reiciendis
            ipsa autem porro debitis magnam mollitia eum atque laborum nemo
            eligendi!
          </p>
        </div>

        <div className={styles.description}>
          <h2>Job Description</h2>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem cumque ad amet natus ipsa perferendis magni.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem cumque ad amet natus ipsa perferendis magni.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem cumque ad amet natus ipsa perferendis magni.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem cumque ad amet natus ipsa perferendis magni.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem cumque ad amet natus ipsa perferendis magni.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
