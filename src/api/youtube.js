import axios from "axios";
const KEY = "AIzaSyBTgxINfDQTwmDikREHX-duruInkw_yL_c";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 200,
    key: KEY
  },
  headers: {}
});