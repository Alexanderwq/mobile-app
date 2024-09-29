import axios, {AxiosInstance} from "axios";
import {Platform} from "react-native";

const api: AxiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000',
  timeout: 1000,
  withCredentials: true,
  withXSRFToken: true,
});

api.interceptors.request.use(function (config) {
  const token = Platform.OS === 'web' && typeof localStorage !== 'undefined' ? localStorage.getItem('token') : ''
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api