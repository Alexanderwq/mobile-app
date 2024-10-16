import api from "@/api/axiosInstance";
import TrainerCardInterface from "@/types/TrainerCardInterface";

export async function getTrainersList(): Promise<TrainerCardInterface[]> {
  return (await api.get('/api/trainers')).data
}