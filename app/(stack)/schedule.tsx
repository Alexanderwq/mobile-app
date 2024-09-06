import {View, StyleSheet, FlatList, SafeAreaView} from "react-native";
import DaysLine from "@/components/WeekLine/DaysLine";
import {useState} from "react";
import ScheduleCard from "@/components/ScheduleCard";
import {ActivityIndicator} from "react-native-paper";
import { useQuery } from "@tanstack/react-query"
import ScheduleCardList from "@/components/ScheduleCardList";

const daysMock = [
    { date: new Date('2024-08-09') },
    { date: new Date('2024-08-12')},
    { date: new Date('2024-08-19') },
    { date: new Date('2024-08-13') },
    { date: new Date('2024-08-14') },
    { date: new Date('2024-08-15') },
    { date: new Date('2024-08-17') },
    { date: new Date('2024-08-20') },
]

export default function ScheduleScreen() {
    const [selectedDay, setSelectedDay] = useState<Date>(new Date('2024-08-19'))

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