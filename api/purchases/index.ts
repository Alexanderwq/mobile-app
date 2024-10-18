import api from "@/api/axiosInstance";

export async function getPurchasesList() {
  return (await api.get('/api/prices')).data
}