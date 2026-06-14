import axios from "axios";

const API = axios.create({
  baseURL: "https://toll-management-backend-production.up.railway.app/api",
});

export default API;