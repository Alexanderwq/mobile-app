import axios, {AxiosInstance} from "axios";
import {Platform} from "react-native";
import * as SecureStore from "expo-secure-store";

const api: AxiosInstance = axios.create({
  baseURL: 'https://sportadminpanel.ru',
  timeout: 1000,
  withCredentials: true,
  withXSRFToken: true,
});

api.interceptors.request.use(async function (config) {
  let token;
  if (Platform.OS === 'web') {
    token = localStorage.getItem('token')
  } else {
    token = await SecureStore.getItemAsync('token')
  }
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api