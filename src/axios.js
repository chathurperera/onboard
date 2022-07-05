import axios from "axios";

const instance = axios.create({
  baseURL: "https://data.usajobs.gov/api/search?",
  headers: {
    Host: "data.usajobs.gov",
    "User-Agent": "chathuraperera007@gmail.com",
    "Authorization-Key": "HkTFjHkMQq7GxG4w/xfmMgnTOFgpbXtUeQ2GdN2etfQ=",
  },
});
export default instance;
