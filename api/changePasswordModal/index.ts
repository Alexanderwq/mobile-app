import api from "@/api/axiosInstance";

export function changePassword(email: string, current_password: string, new_password: string) {
  return api.post('/api/change_password', {
    email,
    new_password,
    current_password,
  })
}