import {View, StyleSheet, FlatList, SafeAreaView} from "react-native";
import DaysLine from "@/components/WeekLine/DaysLine";
import {useState} from "react";
import ScheduleCard from "@/components/ScheduleCard";

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
    const [selectedDay, setSelectedDay] = useState(new Date('2024-08-19'))
    return (
        <View style={styles.container}>
            <DaysLine
                days={daysMock}
                selectedDay={selectedDay}
                onPressDay={setSelectedDay}
            />
            <SafeAreaView style={styles.cardList}>
                <FlatList
                    data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,  10, 11, 12, 13, 14, 15, 16]}
                    renderItem={({}) => (
                        <ScheduleCard />
                    )}
                    ItemSeparatorComponent={() => <View style={{ height: 15 }} ></View>}
                />
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        flex: 1,
    },
    cardList: {
        marginTop: 15,
        flex: 1,
    },
})