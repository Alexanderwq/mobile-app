import {ScrollView, View} from "react-native";
import DayItem from "@/components/WeekLine/DayItem";

type DaysLineProps = {
    days: {date: Date}[],
    selectedDay: Date,
}

type Day = {
    date: Date,
}

export default function DaysLine(props: DaysLineProps) {
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {props.days.map((day: Day, index: number) => (
                <DayItem date={day.date} selected={day.date.getTime() === props.selectedDay.getTime()} key={index} />
            ))}
        </ScrollView>
    )
}
