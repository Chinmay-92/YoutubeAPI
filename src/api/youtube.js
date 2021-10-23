import axios from "axios";
const KEY = "AIzaSyDNamHBsMzkXMTijSrmlAnr3Lj5n3qTtvg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 200,
    key: KEY
  },
  headers: {}
});