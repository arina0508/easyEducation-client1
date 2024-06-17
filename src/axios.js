/* eslint-disable no-undef */
import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL,
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${window.localStorage.getItem(
    "token"
  )}`;

  return config;
});

export default instance;
