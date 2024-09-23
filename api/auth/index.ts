import {SignUpFormInterface} from "@/api/auth/types";

export function login(email: string, password: string): Promise<string> {
  return new Promise((res) => {
    setTimeout(() => res('asfxzs12'), 1000)
  })
}

export function signUp(data: SignUpFormInterface): Promise<string> {
  return new Promise((res) => {
    setTimeout(() => res('asfxzs12'), 1000)
  })
}