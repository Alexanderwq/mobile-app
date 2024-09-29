import axios, {AxiosHeaders, AxiosInstance} from "axios";
import {Platform} from "react-native";

const token = Platform.OS === 'web' && typeof localStorage !== 'undefined' ? localStorage.getItem('token') : ''

export const api: AxiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000',
  timeout: 1000,
  withCredentials: true,
  withXSRFToken: true,
  headers: {
    Authorization: `Bearer ${token}`
  } as AxiosHeaders
});