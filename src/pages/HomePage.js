import React from "react";
import "../App.css";
import Search from "../components/home/Search";
import JobsWrapper from "../components/home/JobsWrapper.js";
export default function HomePage() {
  return (
    <div className="main-content">
      <Search />
      <JobsWrapper />
    </div>
  );
}
