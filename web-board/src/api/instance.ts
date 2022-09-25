import axios, { AxiosInstance } from "axios";
import { store } from "@/store";

const API_BASE_URI = "http://localhost:8000/v1/";
const READ_TIMEOUT = 3000; // read timeout(ms)

function create(url: string, options = {}): AxiosInstance {
  const instance = axios.create(Object.assign({ baseURL: url }, options));
  return instance;
}

export function createUserInstance(): AxiosInstance {
  const url = `${API_BASE_URI}user/`;
  const options = {
    timeout: READ_TIMEOUT,
    headers: { "content-type": "application/json" },
  };

  return create(url, options);
}

export function setAuthorization(instance: AxiosInstance) {
  instance.interceptors.request.use(
    (config) => {
      const isAuthenticated = store.getters["user/isAuthenticated"];
      const token = store.getters["user/getToken"];

      if (isAuthenticated) {
        config.headers!.common["Authorization"] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );
}
