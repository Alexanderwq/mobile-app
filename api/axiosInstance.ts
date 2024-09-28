import axios, {AxiosInstance} from "axios";

export const api: AxiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000',
  timeout: 1000,
  withCredentials: true,
  withXSRFToken: true,
});