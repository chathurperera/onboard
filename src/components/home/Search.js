import React, { useEffect, useState } from "react";
import styles from "./search.module.scss";
import close from "../../images/close.png";
import location from "../../images/location.png";
import search from "../../images/search.png";
import axios from "axios";
import PlacesAutocomplete from "react-places-autocomplete";
import scriptLoader from "react-async-script-loader";

function Search({
  setFetchedJobs,
  isEmpty,
  setIsEmpty,
  isScriptLoaded,
  isScriptLoadSucceed,
}) {
  const [occupationalSeries, setOccupationalSeries] = useState(null);
  const [codes, setCodes] = useState([]);
  const [searchTerms, setSearchTerms] = useState([]);
  const [typingText, setTypingText] = useState("");
  const [address, setAddress] = useState("");

  //FETCHING OCCUPATION CODES
  useEffect(() => {
    axios
      .get("https://data.usajobs.gov/api/codelist/occupationalseries")
      .then((res) => {
        setOccupationalSeries(res.data.CodeList[0].ValidValue);
        // console.log("occupationalSeries",res.data.CodeList[0].ValidValue );
      });
  }, []);

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

  //SEARCH JOBS
  function searchJobs(keywords) {
    console.log("search called");
    setIsEmpty(true);
    const keywordsStringValue = keywords.join("%");
    axios
      .get(
        `https://data.usajobs.gov/api/search?Keyword=${keywordsStringValue}&LocationName=${address}`,
        {
          headers: {
            Host: "data.usajobs.gov",
            "User-Agent": "chathuraperera007@gmail.com",
            "Authorization-Key": "HkTFjHkMQq7GxG4w/xfmMgnTOFgpbXtUeQ2GdN2etfQ=",
          },
        }
      )
      .then((res) => {
        setFetchedJobs(res.data.SearchResult.SearchResultItems);
        setIsEmpty(false);
      });
  }

  const handleChange = (value) => {
    setAddress(value);
  };
  return (
    <div className={styles.search}>
      <div className={styles.searchWrap}>
        <div className={styles.selectWrap}>
          <img src={search} alt="" />
          <div className={styles.inputWrap}>
            {searchTerms.slice(0, 2).map((term, index) => {
              return (
                <span className={styles.selectedTerm} key={index}>
                  <img src={close} alt="close icon" /> {term}
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
                    {suggestions.map((suggestion,index) => {
                      const style = suggestion.active
                        ? { backgroundColor: "#F5F3F3", cursor: "pointer" }
                        : { backgroundColor: "#fff", cursor: "pointer" };
                      return (
                        <div className={styles.suggestion} key={index} {...getSuggestionItemProps(suggestion, { style })}>
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
          <button onClick={() => searchJobs(searchTerms)}>Search</button>
        </div>
      </div>
    </div>
  );
}
export default scriptLoader([
  `https://maps.googleapis.com/maps/api/js?key=AIzaSyDSVCY5D7FvXBSoL20O6nxBAWrUsQrnvk0&libraries=places`,
])(Search);
