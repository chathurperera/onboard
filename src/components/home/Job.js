import React, { useState, memo } from "react";
import styles from "./jobsWrapper.module.scss";
import companyLogo from "../../images/companyLogo.png";
import moreDetailsStyles from "./MoreDetails.module.scss";
import save from "../../images/save.png";
import saved from "../../images/saved.png";
import unclickedHeartWhite from "../../images/unclickedHeartWhite.png";
import unclickedHeartBlack from "../../images/unclickedHeartBlack.png";
import clickedHeartWhite from "../../images/clickedHeartWhite.png";
import clickedHeartRed from "../../images/clickedHeartRed.png";

export const Job = memo((props) => {
  const [focused, setFocused] = useState(false);
  const [mobileExpandView, setMobileExpandView] = useState(false);
  function selectJob(toggleFunc) {
    setFocused(!focused);
    if (window.innerWidth > 978) {
      props.setSelectedJob(props.job);
      props.setExpandDetails(true);
    }
    setMobileExpandView((prevState) => !prevState);
  }
  console.log("job rendered");
  return (
    <div
      className={
        props.selectedJob.MatchedObjectId === props.job.MatchedObjectId &&
        props.expandDetails
          ? `${styles.job} ${styles.focused}`
          : `${styles.job}`
      }
      onClick={selectJob}
    >
      <div className={styles.logoWrapper}>
        <img className={styles.logo} src={companyLogo} alt="logo" />
        <div>
          <p className={styles.jobTitle}>
            {props.job.MatchedObjectDescriptor.PositionTitle}
          </p>
          <p className={styles.OrganizationName}>
            {props.job.MatchedObjectDescriptor.OrganizationName}
          </p>
        </div>
        <div className={styles.saveWrap}>
          <img
            onClick={props.toggleSave}
            className={styles.save}
            src={props.job.save ? clickedHeartRed : unclickedHeartBlack}
            alt="logo"
          />
        </div>
      </div>
      <div className={styles.jobTags}>
        <div className={styles.tag}>
          {props.job.MatchedObjectDescriptor.PositionSchedule[0].Name}
        </div>
        <div className={styles.tag}>
          {props.job.MatchedObjectDescriptor.JobCategory[0].Name}
        </div>
      </div>

      {/*  */}
      {mobileExpandView && (
        <>
          <div className={moreDetailsStyles.roleDetails}>
            <div className={moreDetailsStyles.detail}>
              <p className={moreDetailsStyles.label}>Category</p>
              <p className={moreDetailsStyles.value}>
                {props.job.MatchedObjectDescriptor?.JobCategory[0].Name}
              </p>
            </div>
            <div className={moreDetailsStyles.detail}>
              <p className={moreDetailsStyles.label}>Location</p>
              <p className={moreDetailsStyles.value}>
                {props.job.MatchedObjectDescriptor?.PositionLocationDisplay}
              </p>
            </div>
            <div className={moreDetailsStyles.detail}>
              <p className={moreDetailsStyles.label}>Offer Salary</p>
              <p className={moreDetailsStyles.value}>
                {
                  props.job.MatchedObjectDescriptor?.PositionRemuneration[0]
                    .MinimumRange
                }
                $ /
                {
                  props.job.MatchedObjectDescriptor?.PositionRemuneration[0]
                    .RateIntervalCode
                }
              </p>
            </div>
          </div>
          <div className={moreDetailsStyles.details}>
            <div className={moreDetailsStyles.overView}>
              <h2>Overview</h2>
              <p>
                {
                  props.job.MatchedObjectDescriptor?.UserArea.Details
                    .AgencyMarketingStatement
                }
              </p>
            </div>
            {props.job.MatchedObjectDescriptor?.UserArea.Details.KeyRequirements
              .length !== 0 ||
            props.job.MatchedObjectDescriptor?.UserArea.Details.Requirements ? (
              <div className={moreDetailsStyles.description}>
                <h2>Requirements</h2>
                <ul>
                  {props.job.MatchedObjectDescriptor?.UserArea.Details
                    .KeyRequirements.length !== 0
                    ? props.job.MatchedObjectDescriptor?.UserArea.Details.KeyRequirements.map(
                        (point) => {
                          return <li>{point}</li>;
                        }
                      )
                    : props.job.MatchedObjectDescriptor?.UserArea.Details
                        .Requirements}
                </ul>
              </div>
            ) : (
              <div className={moreDetailsStyles.description}>
                <h2>Duties</h2>
                <ul>
                  {props.job.MatchedObjectDescriptor?.UserArea.Details.MajorDuties.map(
                    (duty) => {
                      return <li>{duty}</li>;
                    }
                  )}
                </ul>
              </div>
            )}

            <a
              className={moreDetailsStyles.applyBtn}
              target="_blank"
              rel="noopener noreferrer"
              href={props.job.MatchedObjectDescriptor?.ApplyURI[0]}
            >
              Apply now
            </a>
          </div>
        </>
      )}
    </div>
  );
});
export default Job;
