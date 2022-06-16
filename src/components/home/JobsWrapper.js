import React, { useEffect, useState } from "react";
import styles from "./jobsWrapper.module.scss";
import Job from "../home/Job.js";
import jobs from "../../job.json";
import MoreDetails from "./MoreDetails";
import JobAlert from "./JobAlert";
import axios from "axios";
import { Skeleton } from "./Skeleton";

export const JobsWrapper = ({fetchedJobs ,isEmpty}) => {
  const [expandDetails, setExpandDetails] = useState(false);
  const [listings, setListings] = useState(jobs.jobs);
  const [selectedJob, setSelectedJob] = useState({});

  //TOGGLES SAVE ICON 
  function toggleSave(id) {
    setListings((prevListings) => {
      return prevListings.map((listing) => {
        return listing.id === id
          ? { ...listing, save: !listing.save }
          : listing;
      });
    });
  }

  //OPENS AND CLOSES MORE DETAILS SECTION
  function toggleMoreDetails(id) {
    return (
      setSelectedJob(listings.find((listing) => listing.id === id)),
      setExpandDetails((prevState) => !prevState)
    );
  }

  const wrapperStyles = {
    width: "100%",
    display: expandDetails ? "grid" : "block",
    gridTemplateColumns: "1fr ",
    gridGap: "20px",
  };
  const expandJobInfo = {
    display: expandDetails ? "block" : "none",
    width: "100%",
  };
  const jobsContainer = {
    display: "grid",
    gridTemplateColumns: expandDetails ? "1fr" : "1fr",
    gridGap: "20px",
  };
  const jobsList = fetchedJobs?.map((job) => {
    return (
      <Job
        job={job}
        setSelectedJob={setSelectedJob}
        selectedJob={selectedJob}
        setExpandDetails={setExpandDetails}
        expandDetails={expandDetails}
        key={job.id}
        toggleSave={() => toggleSave(job.id)}
        toggleMoreDetails={() => toggleMoreDetails(job.id)}
      />
    );
  });
  const skeletonLoaders = [1,2,3,4,5,6,7,8,].map((box) => {
    return <Skeleton />
  })
  return (
    <div className={styles.jobsWrapper}>
      <div style={wrapperStyles}>
        <div style={jobsContainer}>{isEmpty ? skeletonLoaders : jobsList }</div>
      </div>
      <MoreDetails
        styles={expandJobInfo}
        setExpandDetails={setExpandDetails}
        moreDetails={selectedJob}
      />
      <JobAlert showAlert={expandDetails} />
    </div>
  );
}
export default JobsWrapper