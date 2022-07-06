import React from "react";
import "../App.css";
import Search from "../components/home/Search";
import JobsWrapper from "../components/home/JobsWrapper.js";
import { jobContext } from "../JobsContext";
import { useContext } from "react";

export default function HomePage() {
  const {isEmpty,fetchedJobs} = useContext(jobContext);  
  return (
    <div className="main-content">
      <Search/>
      <JobsWrapper isEmpty={isEmpty} fetchedJobs={fetchedJobs} />
    </div>
  );
}
