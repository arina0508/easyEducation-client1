/* eslint-disable no-undef */
import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.REACT_APP_BACKEND_UR,
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${window.localStorage.getItem(
    "token"
  )}`;

  return config;
});

export default instance;
