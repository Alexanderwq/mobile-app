import api from "@/api/axiosInstance";

export async function getPaymentsList() {
  return (await api.get('/api/payment_list')).data
}