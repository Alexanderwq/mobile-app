import api from "@/api/axiosInstance";

export async function getPurchasesList() {
  return (await api.get('http://localhost:8000/api/prices')).data
}