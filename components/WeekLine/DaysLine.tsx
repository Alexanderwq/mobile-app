import {ScrollView} from "react-native";
import DayItem, {DayItemProps} from "@/components/WeekLine/DayItem";

type DaysLineProps = {
    days: DayItemProps[],
}

export default function DaysLine(props: DaysLineProps) {
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {props.days.map((day: DayItemProps, index: number) => (
                <DayItem key={index.toString()} {...day} />
            ))}
        </ScrollView>
    )
}
