import React, { useEffect, useState } from "react";
import styles from "./jobsWrapper.module.scss";
import Job from "../home/Job.js";

import MoreDetails from "./MoreDetails";
import JobAlert from "./JobAlert";
import axios from "axios";
import { Skeleton } from "./Skeleton";
import { NoResults } from "./NoResults";
import { useContext } from "react";
import { jobContext } from "../../JobsContext";

export const JobsWrapper = ({  isEmpty }) => {
  const [expandDetails, setExpandDetails] = useState(false);
  // const [listings, setListings] = useState(jobs.jobs);
  const {fetchedJobs} = useContext(jobContext);
  const [selectedJob, setSelectedJob] = useState({});
  console.log('rederned')

  //TOGGLES SAVE ICON
  // function toggleSave(id) {
  //   setListings((prevListings) => {
  //     return prevListings.map((listing) => {
  //       return listing.id === id
  //         ? { ...listing, save: !listing.save }
  //         : listing;
  //     });
  //   });
  // }

  //OPENS AND CLOSES MORE DETAILS SECTION
  // function toggleMoreDetails(id) {
  //   return (
  //     setSelectedJob(listings.find((listing) => listing.id === id)),
  //     setExpandDetails((prevState) => !prevState)
  //   );
  // }

  const expandJobInfo = {
    display: expandDetails ? "block" : "none",
    width: "100%",
  };
  const jobsContainer = {
    // marginTop:"40px",
    display: "grid",
    gridTemplateColumns: expandDetails ? "1fr" : "1fr",
    gridGap: "20px",
  };
  const jobsList = fetchedJobs?.map((job, index) => {
    return (
      <Job
        job={job}
        setSelectedJob={setSelectedJob}
        selectedJob={selectedJob}
        setExpandDetails={setExpandDetails}
        expandDetails={expandDetails}
        key={index}
        // toggleSave={() => toggleSave(job.id)}
        // toggleMoreDetails={() => toggleMoreDetails(job.id)}
      />
    );
  });
  const skeletonLoaders = [1, 2, 3, 4, 5, 6, 7, 8].map((box) => {
    return <Skeleton key={box} />;
  });
  return (
    <>
      {!isEmpty && jobsList?.length > 0 && <h1 className={styles.jobsCount}>Jobs {jobsList.length}</h1>}
      <div
        className={styles.jobsWrapper}
        style={
          !isEmpty && fetchedJobs?.length === 0
            ? { display: "block" }
            : { display: "grid" }
        }
      >
        <div>
          <div style={jobsContainer}>
            {isEmpty ? <div className={styles.skeletonLoaders}>{skeletonLoaders}</div>  : jobsList}
          </div>
        </div>
        {!isEmpty && fetchedJobs.length === 0 ? <NoResults /> : ""}
        <MoreDetails
          styles={expandJobInfo}
          setExpandDetails={setExpandDetails}
          moreDetails={selectedJob}
        />
       {jobsList?.length > 0 && <JobAlert showAlert={expandDetails} />}
      </div>
    </>
  );
};
export default JobsWrapper;
