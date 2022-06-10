import axios from "axios";

export default axios.create({
  // WOULD CHANGE TO HOST WEBSITE ON PRODUCTION
  baseURL: "http://localhost:3500"
});