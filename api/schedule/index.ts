import api from "@/api/axiosInstance";
import ScheduleListItemInterface from "@/api/types/ScheduleListItemInterface";

export async function getScheduleList(date: Date): Promise<ScheduleListItemInterface[]> {
  const formattedDate = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
  console.log(formattedDate)
  return (await api.get(`/api/schedule?date=${formattedDate}`)).data
}