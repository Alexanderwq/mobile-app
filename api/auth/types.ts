export interface UserResponse {
  email: string,
  name: string,
  token: string,
}

export interface SignUpFormInterface {
  email: string,
  name: string,
  cityId: number,
  password: string,
}