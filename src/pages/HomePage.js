import React, { useEffect } from "react";
import "../App.css";
import Search from "../components/home/Search";
import JobsWrapper from "../components/home/JobsWrapper.js";
import axios from "axios";
import { useState } from "react";


export default function HomePage() {
    
    const [fetchedJobs, setFetchedJobs] = useState(null);
    const [isEmpty, setIsEmpty] = useState(true);
        
    // useEffect(() => {
    //   axios.get('https://data.usajobs.gov/api/search?Keyword=Software',{
    //     headers:{
    //       "Host": "data.usajobs.gov",          
    //       "User-Agent": "chathuraperera007@gmail.com",          
    //       "Authorization-Key": "HkTFjHkMQq7GxG4w/xfmMgnTOFgpbXtUeQ2GdN2etfQ="      
    //     }
    //   }).then((res) => {
    //     setFetchedJobs(res.data.SearchResult.SearchResultItems);
    //     setIsEmpty(false);
    //     console.log('setFetchedJobs',fetchedJobs)
    //   })      
    // },[])
  
  return (
    <div className="main-content">
      <Search isEmpty={isEmpty} setIsEmpty={setIsEmpty}  setFetchedJobs={setFetchedJobs} />
      <JobsWrapper isEmpty={isEmpty}  fetchedJobs={fetchedJobs}/>
      
    </div>
  );
}
