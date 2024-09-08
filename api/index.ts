import ScheduleListItemInterface from "@/api/types/ScheduleListItemInterface";

export default {
    getScheduleList(time: string): Promise<ScheduleListItemInterface[]> {
        const mockList = [
            {
                startTime: '14:00',
                endTime: new Date('2024-08-21 15:00').getTime(),
                trainerName: 'Маркова Алина',
                sportName: 'Йога',
            },
            {
                startTime: new Date('2024-08-21 14:00').getTime(),
                endTime: new Date('2024-08-21 15:00').getTime(),
                trainerName: 'Маркова Алина',
                sportName: 'Йога',
            },
            {
                startTime: new Date('2024-08-21 14:00').getTime(),
                endTime: new Date('2024-08-21 15:00').getTime(),
                trainerName: 'Маркова Алина',
                sportName: 'Йога',
            },
            {
                startTime: new Date('2024-08-21 14:00').getTime(),
                endTime: new Date('2024-08-21 15:00').getTime(),
                trainerName: 'Маркова Алина',
                sportName: 'Йога',
            },
        ]
        return new Promise((res) => {
            console.log(time)
            setTimeout(() => res(mockList), 3000)
        })
    },
}