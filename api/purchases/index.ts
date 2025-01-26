import api from "@/api/axiosInstance";

export async function getPurchasesList() {
  return (await api.get('/api/prices')).data
}

export async function createPaymentLink(visit: string, idTrainingType: number) {
  return (await api.post('/api/payment/create', {
    visit,
    idTrainingType,
  }))
}