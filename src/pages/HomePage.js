import React, { useEffect, useState } from "react";
import Header from "../components/Header";

import "../App.css";
import Search from "../components/Search";
import JobsWrapper from "../components/JobsWrapper";
export default function HomePage() {
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
