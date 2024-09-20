import {SignUpFormInterface, UserResponse} from "@/api/auth/types";

export function login(email: string, password: string): Promise<UserResponse> {
  const mockUser = {
    token: 'asfxzs12',
    email: 'test@test.ru',
    name: 'sanya',
    surName: 'tesSfa',
  }
  return new Promise((res) => {
    setTimeout(() => res(mockUser), 1000)
  })
}

export function signUp(data: SignUpFormInterface): Promise<UserResponse> {
  const mockUser = {
    token: 'asfxzs12',
    email: 'test@test.ru',
    name: 'sanya',
    surName: 'tesSfa',
  }
  return new Promise((res) => {
    setTimeout(() => res(mockUser), 1000)
  })
}