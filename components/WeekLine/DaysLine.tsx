import {ScrollView} from "react-native";
import DayItem from "@/components/WeekLine/DayItem";

type DaysLineProps = {
    days: {date: Date}[],
    selectedDay: Date,
    onPressDay(value: Date): void,
}

type Day = {
    date: Date,
}

export default function DaysLine(props: DaysLineProps) {
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {props.days.map((day: Day, index: number) => (
                <DayItem
                    date={day.date}
                    selected={day.date.getTime() === props.selectedDay.getTime()}
                    onPress={props.onPressDay}
                    key={index}
                />
            ))}
        </ScrollView>
    )
}
