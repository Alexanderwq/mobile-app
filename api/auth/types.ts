export interface UserResponse {
  email: string,
  name: string,
  surName: string,
  token: string,
}

export interface SignUpFormInterface {
  email: string,
  name: string,
  surName: string,
  cityId: number,
  password: string,
}