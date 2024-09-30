import {View, StyleSheet} from "react-native";
import DaysLine from "@/components/WeekLine/DaysLine";
import {useState} from "react";
import ScheduleCardList from "@/components/ScheduleCardList";

const daysMock: Date[] = Array(14)
  .fill(new Date())
  .map((date: Date, index) =>
    index === 0 ? new Date(date.setDate(date.getDate())) : new Date(date.setDate(date.getDate() + 1))
  )

export default function ScheduleScreen() {
    const [selectedDay, setSelectedDay] = useState<Date>(daysMock[0])

    return (
        <View style={styles.container}>
            <DaysLine
                days={daysMock}
                selectedDay={selectedDay}
                onPressDay={setSelectedDay}
            />
            <ScheduleCardList date={selectedDay} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        flex: 1,
    },
})