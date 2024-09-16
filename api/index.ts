import ScheduleListItemInterface from "@/api/types/ScheduleListItemInterface";

export default {
    getScheduleList(time: string): Promise<ScheduleListItemInterface[]> {
        const mockList = [
            {
                startTime: '14:00',
                endTime: '15:00',
                trainerName: 'Маркова Алина',
                sportName: 'Йога',
            },
            {
                startTime: '15:00',
                endTime: '16:30',
                trainerName: 'Маркова Алина',
                sportName: 'Йога',
            },
            {
                startTime: '16:00',
                endTime: '17:00',
                trainerName: 'Маркова Алина',
                sportName: 'Йога',
            },
            {
                startTime: '18:30',
                endTime: '19:30',
                trainerName: 'Маркова Алина',
                sportName: 'Йога',
            },
        ]
        return new Promise((res) => {
            console.log(time)
            setTimeout(() => res(mockList), 1000)
        })
    },
}