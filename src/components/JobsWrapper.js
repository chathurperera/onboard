import React, { useState } from "react";
import styles from "../components/jobsWrapper.module.scss";
import Job from "./Job";
import data from '../data.json';
import MoreDetails from "./MoreDetails";
import JobAlert from "./JobAlert";

export default function JobsWrapper() {
  const [expandDetails, setExpandDetails] = useState(false);
  const [listings, setListings] = useState(data);
  const [selectedJob, setSelectedJob] = useState({});

function toggleSave(id){
 setListings((prevListings) => {
   return prevListings.map((listing) => {
     return listing.id === id ? {...listing,save:!listing.save} : listing
   })
 })
}
function toggleMoreDetails(id){
  
return (
  setSelectedJob(listings.find(listing => listing.id === id)),
  setExpandDetails((prevState) => !prevState));
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
    return <Job job={job} key={job.id} toggleSave={() => toggleSave(job.id)} toggleMoreDetails={() => toggleMoreDetails(job.id)} />
  })
  return (
    <div className={styles.jobsWrapper}>
      <div style={wrapperStyles}>
        <div style={jobsContainer}>
          {
            jobsList
          }
        </div>
      </div>
        <MoreDetails styles={expandJobInfo} moreDetails={selectedJob} />
        <JobAlert showAlert={expandDetails}/>

    </div>
  );
}
