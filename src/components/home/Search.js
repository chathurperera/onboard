import React, { useEffect, useState } from "react";
import styles from "./search.module.scss";
import Select from "react-select";
import categories from "../../categories.json";
import location from "../../images/location.png";
import search from "../../images/search.png";
import "./_custom-select.scss";
import axios from "axios";
export default function Search() {
  const [occupationalSeries, setOccupationalSeries] = useState(null);
  
  //FETCHING OCCUPATION CODES
  useEffect(() => {
    axios
    .get("https://data.usajobs.gov/api/codelist/occupationalseries")
    .then((res) => {
      setOccupationalSeries(res.data.CodeList[0].ValidValue);
      console.log("occupationalSeries",res.data.CodeList[0].ValidValue );
    });
  }, []);
  
  const categoriesList = occupationalSeries?.map((job) => {
    return { value: job.Code, label: job.Value };
  });

  //HANDLES THE USER INPUT
  function handleChange(e) {
    console.log(e);
  }
  const chipStyles = {
    background: "transparent",
    border: "1px solid rgb(199, 199, 199)",
    borderRadius: "5px",
  };
  return (
    <div className={styles.search}>
      <div className={styles.searchWrap}>
        <div className={styles.selectWrap}>
          <img src={search} alt="" />
          <Select
            onChange={handleChange}
            styles={chipStyles}
            isMulti
            name="colors"
            options={categoriesList}
            className={styles.customSelect}
            classNamePrefix="select"
          />
        </div>
        <div className={styles.location}>
          <img src={location} alt="" />
        </div>
        <div className={styles.searchButton}>
          <button>Search</button>
        </div>
      </div>
    </div>
  );
}
