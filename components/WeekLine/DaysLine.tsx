import {ScrollView} from "react-native";
import DayItem from "@/components/WeekLine/DayItem";

type DaysLineProps = {
    days: Date[],
    selectedDay: Date,
    onPressDay(value: Date): void,
}

export default function DaysLine(props: DaysLineProps) {
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{maxHeight: 50}}>
            {props.days.map((day, index: number) => (
                <DayItem
                    date={day}
                    selected={day.getTime() === props.selectedDay.getTime()}
                    onPress={props.onPressDay}
                    key={index}
                />
            ))}
        </ScrollView>
    )
}
