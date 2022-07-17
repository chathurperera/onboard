import React, { useState } from "react";
import styles from "./search.module.scss";
import close from "../../images/close.png";
import location from "../../images/location.png";
import search from "../../images/search.png";
import PlacesAutocomplete from "react-places-autocomplete";
import scriptLoader from "react-async-script-loader";
import Loader from "../common/Loader";
import downArrow from "../../images/downArrow.png";
import { useContext } from "react";
import { jobContext } from "../../JobsContext";
function Search({ isScriptLoaded, isScriptLoadSucceed }) {
  const { isSearching, searchJobs } = useContext(jobContext);
  const [searchTerms, setSearchTerms] = useState([]);
  const [typingText, setTypingText] = useState("");
  const [address, setAddress] = useState("");
  const [toggleFilterOptions, setToggleFilterOptions] = useState({
    employmentType: false,
    ExperienceLevel: false,
    salaryRange: false,
    remote: false,
  });
  //HANDLE INPUT KEY WORDS
  const handleSearchTerm = (e) => {
    console.log(e.target.value);
    setSearchTerms((prevTerms) => {
      return [...prevTerms, e.target.value];
    });
    setTypingText("");
  };

  //HANDLE KEY PRESS
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearchTerm(e);
    }
  };

  //REMOVE SEARCH TERM
  function removeSearchTerm(index) {
    setSearchTerms((prevTerms) =>
      prevTerms.filter((term, termIndex) => termIndex !== index)
    );
  }

  const handleChange = (value) => {
    setAddress(value);
  };
  return (
    <div className={styles.search}>
      <div className={styles.searchWrap}>
        <div className={styles.selectWrap}>
          <img src={search} alt="search icon" />
          <div className={styles.inputWrap}>
            {searchTerms.slice(0, 2).map((term, index) => {
              return (
                <span className={styles.selectedTerm} key={index}>
                  <img
                    src={close}
                    alt="close icon"
                    onClick={() => removeSearchTerm(index)}
                  />{" "}
                  {term}
                </span>
              );
            })}
            {searchTerms.length > 2 && (
              <span className={styles.selectedTerm}>
                <img src={close} alt="close icon" /> + {searchTerms.length}..
              </span>
            )}
            <input
              type="text"
              placeholder="job title or keywords"
              name="searchQuery"
              id=""
              onChange={(e) => setTypingText(e.target.value)}
              value={typingText}
              onKeyPress={handleKeyPress}
            />
          </div>
          <div className={styles.options}>
            <div className={styles.option}>
              <p></p>
            </div>
          </div>
        </div>
        <div className={styles.location}>
          <img src={location} alt="" />
          {isScriptLoaded && isScriptLoadSucceed ? (
            <PlacesAutocomplete
              value={address}
              onChange={handleChange}
              onSelect={handleChange}
            >
              {({
                getInputProps,
                suggestions,
                getSuggestionItemProps,
                loading,
              }) => (
                <div className={styles.locationInputWrap}>
                  <input
                    {...getInputProps({
                      placeholder: "Anywhere",
                      // className: "location-search-input",
                    })}
                  />
                  <div className={styles.suggestionsWrap}>
                    {loading && <div>Loading...</div>}
                    {suggestions.map((suggestion, index) => {
                      const style = suggestion.active
                        ? { backgroundColor: "#F5F3F3", cursor: "pointer" }
                        : { backgroundColor: "#fff", cursor: "pointer" };
                      return (
                        <div
                          className={styles.suggestion}
                          key={index}
                          {...getSuggestionItemProps(suggestion, { style })}
                        >
                          {suggestion.description}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </PlacesAutocomplete>
          ) : (
            <></>
          )}
        </div>
        <div className={styles.searchButton}>
          <button onClick={() => searchJobs(searchTerms, address)}>
            {isSearching ? <Loader /> : "Search"}
          </button>
        </div>
        <div className={styles.filter}>
          <div
            className={styles.filterOption}
            onClick={() =>
              setToggleFilterOptions((prevState) => {
                return {
                  ...prevState,
                  employmentType: !toggleFilterOptions.employmentType,
                };
              })
            }
          >
            <h3>Type of employment</h3>{" "}
            <img
              style={{
                transform: !toggleFilterOptions.employmentType
                  ? "rotate(0deg)"
                  : "rotate(180deg)",
              }}
              src={downArrow}
              alt="arrow icon"
            />
            {toggleFilterOptions.employmentType && (
              <div className={styles.optionsPanel}>
                <label htmlFor="FT">
                  <input type="checkbox" name="" id="FT" />
                  Full Time Jobs
                </label>
                <label htmlFor="PT">
                  <input type="checkbox" name="" id="PT" />
                  Part Time Jobs
                </label>
                <label htmlFor="RJ">
                  <input type="checkbox" name="" id="RJ" />
                  Remote Jobs
                </label>
                <label htmlFor="Intern">
                  <input type="checkbox" name="" id="Intern" />
                  Internship
                </label>
                <label htmlFor="Contract">
                  <input type="checkbox" name="" id="Contract" />
                  Contract
                </label>
              </div>
            )}
          </div>
          <div
            className={styles.filterOption}
            onClick={() =>
              setToggleFilterOptions((prevState) => {
                return {
                  ...prevState,
                  employmentType: !toggleFilterOptions.employmentType,
                };
              })
            }
          >
            <h3>Experience Level</h3>{" "}
            <img
              style={{
                transform: !toggleFilterOptions.employmentType
                  ? "rotate(0deg)"
                  : "rotate(180deg)",
              }}
              src={downArrow}
              alt="arrow icon"
            />
            {toggleFilterOptions.employmentType && (
              <div className={styles.optionsPanel}>
                <label htmlFor="FT">
                  <input type="checkbox" name="" id="FT" />
                  Entry Level
                </label>
                <label htmlFor="PT">
                  <input type="checkbox" name="" id="PT" />
                  Mid Level
                </label>
                <label htmlFor="RJ">
                  <input type="checkbox" name="" id="RJ" />
                  Senior Level
                </label>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default scriptLoader([
  `https://maps.googleapis.com/maps/api/js?key=AIzaSyDSVCY5D7FvXBSoL20O6nxBAWrUsQrnvk0&libraries=places`,
])(Search);
