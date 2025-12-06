import axios from "axios";
import * as siteConfig from "../Config/Config";

// ✅ Create Axios Instance (NO TOKEN)
const Api = axios.create({
  baseURL: siteConfig.default.apiBaseURL,
  timeout: siteConfig.default.apiTimeout || 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default Api;