import React from "react";
import Header from "./components/Header";
import "../src/App.css";
import Search from "./components/Search";
import JobsWrapper from "./components/JobsWrapper";
export default function App() {
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
