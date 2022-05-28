import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import "../src/App.css";
import Search from "./components/Search";
import JobsWrapper from "./components/JobsWrapper";
import axios from "axios";
export default function App() {
  const [post,setPosts] = useState(null);
  const options = {
    method: 'GET',
    url: 'https://arbeitnow-free-job-board.p.rapidapi.com/api/job-board-api',
    headers: {
      'Content-Type': 'application/json',
      'X-RapidAPI-Host': 'arbeitnow-free-job-board.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY ,
    }
  };

  useEffect(() => {
   axios.request(options).then((res) => {
    setPosts(res.data)
    console.log('res',res.data)
   }) 
  },[])
  return (
    <div>
      <Header />
      <div className="main-content">
        <Search />
        <JobsWrapper />
      </div>
    </div>
  );
}
