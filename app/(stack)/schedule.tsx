import {View, StyleSheet, Text} from "react-native";
import DaysLine from "@/components/WeekLine/DaysLine";
import {useState} from "react";

const daysMock = [
    { date: new Date('2024-08-20') },
    { date: new Date('2024-08-20')},
    { date: new Date('2024-08-19') },
    { date: new Date('2024-08-20') },
    { date: new Date('2024-08-20') },
    { date: new Date('2024-08-20') },
    { date: new Date('2024-08-20') },
    { date: new Date('2024-08-20') },
]

export default function ScheduleScreen() {
    const [selectedDay, setSelectedDay] = useState(new Date('2024-08-19'))
    return (
        <View style={styles.container}>
            <DaysLine days={daysMock} selectedDay={selectedDay} />
            <Text>testing</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
    },
})