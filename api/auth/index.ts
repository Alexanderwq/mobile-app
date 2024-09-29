import {SignUpFormInterface} from "@/api/auth/types";
import api from "@/api/axiosInstance";
import {AxiosPromise} from "axios";

export function login(email: string, password: string, deviceName: string): AxiosPromise<string> {
  return api.post('/api/login', {
    email,
    password,
    device_name: deviceName,
  })
}

export function signUp(data: SignUpFormInterface & { device_name }): AxiosPromise<string> {
  return api.post('/api/sign-up', data)
}