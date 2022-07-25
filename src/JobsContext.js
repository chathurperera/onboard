import { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "./axios";

export const jobContext = createContext();

export const JobContextProvider = ({ children }) => {
  const [fetchedJobs, setFetchedJobs] = useState(null);
  const [isEmpty, setIsEmpty] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const [searchTerms, setSearchTerms] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    await axios.get("Keyword=development").then((res) => {
      setFetchedJobs(res.data.SearchResult.SearchResultItems);
      setIsEmpty(false);
    });
  }
  async function searchJobs(keywords, address) {
    setIsSearching(true);
    setIsEmpty(true);
    const keywordsStringValue = keywords.join("%");
    await axios
      .get(`Keyword=${keywordsStringValue}&LocationName=${address}`)
      .then((res) => {
        console.log('jobs detchged')
        setFetchedJobs(res.data.SearchResult.SearchResultItems);
        setIsEmpty(false);
        setIsSearching(false);
      });
  }
  return (
    <jobContext.Provider
      value={{
        fetchedJobs,
        setFetchedJobs,
        setIsEmpty,
        isEmpty,
        searchJobs,
        isSearching,
      }}
    >
      {children}
    </jobContext.Provider>
  );
};
