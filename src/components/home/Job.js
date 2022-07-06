import React, { useState, memo } from "react";
import styles from "./jobsWrapper.module.scss";
import companyLogo from "../../images/companyLogo.png";
import moreDetailsStyles from "./MoreDetails.module.scss";
import unclickedHeartBlack from "../../images/unclickedHeartBlack.png";
import clickedHeartRed from "../../images/clickedHeartRed.png";

export const Job = memo(
  ({
    setSelectedJob,
    job,
    setExpandDetails,
    selectedJob,
    expandDetails,
    toggleSave,
  }) => {
    const [focused, setFocused] = useState(false);
    const [mobileExpandView, setMobileExpandView] = useState(false);

    function selectJob(toggleFunc) {
      setFocused(!focused);
      if (window.innerWidth > 978) {
        setSelectedJob(job);
        setExpandDetails(true);
      }
      setMobileExpandView((prevState) => !prevState);
    }

    const {
      MatchedObjectId,
      MatchedObjectDescriptor: {
        PositionTitle,
        OrganizationName,
        PositionSchedule,
        JobCategory,
        PositionLocationDisplay,
        PositionRemuneration,
        UserArea: {
          Details: {
            AgencyMarketingStatement,
            KeyRequirements,
            Requirements,
            MajorDuties,
          },
        },
      },
    } = job;

    return (
      <div
        className={
          selectedJob.MatchedObjectId === MatchedObjectId && expandDetails
            ? `${styles.job} ${styles.focused}`
            : `${styles.job}`
        }
        onClick={selectJob}
      >
        <div className={styles.logoWrapper}>
          <img className={styles.logo} src={companyLogo} alt="logo" />
          <div>
            <p className={styles.jobTitle}>{PositionTitle}</p>
            <p className={styles.OrganizationName}>{OrganizationName}</p>
          </div>
          <div className={styles.saveWrap}>
            <img
              onClick={toggleSave}
              className={styles.save}
              src={job.save ? clickedHeartRed : unclickedHeartBlack}
              alt="logo"
            />
          </div>
        </div>
        <div className={styles.jobTags}>
          <div className={styles.tag}>{PositionSchedule[0].Name}</div>
          <div className={styles.tag}>{JobCategory[0].Name}</div>
        </div>

        {mobileExpandView && (
          <>
            <div className={moreDetailsStyles.mobileRoleDetails}>
              <div className={moreDetailsStyles.detail}>
                <p className={moreDetailsStyles.label}>Category</p>
                <p className={moreDetailsStyles.value}>{JobCategory[0].Name}</p>
              </div>
              <div className={moreDetailsStyles.detail}>
                <p className={moreDetailsStyles.label}>Location</p>
                <p className={moreDetailsStyles.value}>
                  {PositionLocationDisplay}
                </p>
              </div>
              <div className={moreDetailsStyles.detail}>
                <p className={moreDetailsStyles.label}>Offer Salary</p>
                <p className={moreDetailsStyles.value}>
                  {PositionRemuneration[0].MinimumRange}$ /
                  {PositionRemuneration[0].RateIntervalCode}
                </p>
              </div>
            </div>
            <div className={moreDetailsStyles.mobileDetails}>
              {AgencyMarketingStatement && (
                <div className={moreDetailsStyles.overView}>
                  <h2>Overview</h2>
                  <p>{AgencyMarketingStatement}</p>
                </div>
              )}
              {KeyRequirements.length !== 0 || Requirements ? (
                <div className={moreDetailsStyles.description}>
                  <h2>Requirements</h2>
                  <ul>
                    {KeyRequirements.length !== 0
                      ? KeyRequirements.map((point) => {
                          return <li>{point}</li>;
                        })
                      : Requirements}
                  </ul>
                </div>
              ) : (
                <div className={moreDetailsStyles.description}>
                  <h2>Duties</h2>
                  <ul>
                    {MajorDuties.map((duty) => {
                      return <li>{duty}</li>;
                    })}
                  </ul>
                </div>
              )}

              <a
                className={moreDetailsStyles.applyBtn}
                target="_blank"
                rel="noopener noreferrer"
                href={job.MatchedObjectDescriptor?.ApplyURI[0]}
              >
                Apply now
              </a>
            </div>
          </>
        )}
      </div>
    );
  }
);
export default Job;
