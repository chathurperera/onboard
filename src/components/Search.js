import React from "react";
import styles from "../components/search.module.scss";
import Select from "react-select";
import location from '../images/location.png'
import search from '../images/search.png'
import job from '../images/job.png'
import salary from '../images/salary.png'
import '../components/_custom-select.scss';
export default function Search() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const chipStyles = {
    background: "transparent",
    border: "1px solid rgb(199, 199, 199)",
    borderRadius: "5px" 
  }
  return (
    <div className={styles.search}>
      <div className={styles.searchWrap}>
        <div className={styles.selectWrap}>
          <img src={search} alt="" />
        <Select
        styles={chipStyles}
          isMulti
          name="colors"
          options={options}
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
