import axios from "axios";
import { getToken } from ".";

const api = axios.create({
  baseURL: process.env.NEXT_APP_API_URL,
});

api.interceptors.request.use(async (config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
