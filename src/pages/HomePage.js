import React, { useEffect } from "react";
import "../App.css";
import Search from "../components/home/Search";
import JobsWrapper from "../components/home/JobsWrapper.js";
import axios from "axios";
import { useState } from "react";

export default function HomePage() {
    //FETCH JOBS
    const [fetchedJobs, setFetchedJobs] = useState(null);
        
    useEffect(() => {
      axios.get('https://data.usajobs.gov/api/search?Keyword=Software',{
        headers:{
          "Host": "data.usajobs.gov",          
          "User-Agent": "chathuraperera007@gmail.com",          
          "Authorization-Key": "HkTFjHkMQq7GxG4w/xfmMgnTOFgpbXtUeQ2GdN2etfQ="      
        }
      }).then((res) => {
        setFetchedJobs(res.data.SearchResult.SearchResultItems);
        console.log('setFetchedJobs',fetchedJobs)
      })      
    },[])
  
  return (
    <div className="main-content">
      <Search setFetchedJobs={setFetchedJobs} />
      <JobsWrapper  fetchedJobs={fetchedJobs}/>
    </div>
  );
}
