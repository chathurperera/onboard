import React, { useEffect, useState } from "react";
import styles from "./jobsWrapper.module.scss";
import Job from "../home/Job.js";
import jobs from "../../job.json";
import MoreDetails from "./MoreDetails";
import JobAlert from "./JobAlert";
import axios from "axios";

export const JobsWrapper = () => {
  const [expandDetails, setExpandDetails] = useState(false);
  const [listings, setListings] = useState(jobs.jobs);
  const [selectedJob, setSelectedJob] = useState({});
  const [fetchedJobs, setFetchedJobs] = useState(null);
  
  //FETCH JOBS
  useEffect(() => {
    axios.get('https://data.usajobs.gov/api/search?ResultsPerPage=20',{
      headers:{
        "Host": "data.usajobs.gov",          
        "User-Agent": "chathuraperera007@gmail.com",          
        "Authorization-Key": "HkTFjHkMQq7GxG4w/xfmMgnTOFgpbXtUeQ2GdN2etfQ="      
      }
    }).then((res) => {
      setFetchedJobs(res.data.SearchResult.SearchResultItems);
    })
    
  },[])
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
  const jobsList = listings.map((job) => {
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
  return (
    <div className={styles.jobsWrapper}>
      <div style={wrapperStyles}>
        <div style={jobsContainer}>{jobsList}</div>
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