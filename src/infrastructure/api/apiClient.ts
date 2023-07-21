import axios from "axios";
import { getTokensFromCookies } from "../cookies/tokenCookies";

const apiClient = axios.create({
  baseURL: "https://api-staging.parrot.rest/api",
});

apiClient.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/json";
    const { token } = getTokensFromCookies();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default apiClient;
