import {View, StyleSheet, Text} from "react-native";
import DaysLine from "@/components/WeekLine/DaysLine";
import {useState} from "react";

const daysMock = [
    { date: new Date('2024-08-11') },
    { date: new Date('2024-08-12')},
    { date: new Date('2024-08-19') },
    { date: new Date('2024-08-13') },
    { date: new Date('2024-08-14') },
    { date: new Date('2024-08-15') },
    { date: new Date('2024-08-17') },
    { date: new Date('2024-08-20') },
]

export default function ScheduleScreen() {
    const [selectedDay, setSelectedDay] = useState(new Date('2024-08-19'))
    return (
        <View style={styles.container}>
            <DaysLine
                days={daysMock}
                selectedDay={selectedDay}
                onPressDay={setSelectedDay}
            />
            <Text>testing</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
    },
})