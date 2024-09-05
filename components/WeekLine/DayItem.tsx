import {View, StyleSheet, Dimensions} from "react-native";
import {Text} from 'react-native-paper'

type DayItemProps = {
    date: Date,
    selected: boolean,
}

const dayInWeek = 7

const {width} = Dimensions.get('window')

export default function DayItem(props: DayItemProps) {
    const dayNumber = props.date.getDay()
    const weekDay = () => {
        let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
        return days[props.date.getDay()]
    }

    return (
        <View style={styles.container}>
            <Text style={props.selected ? styles.selectedDay : styles.day} variant="bodyMedium">
                {weekDay()}
            </Text>
            <Text variant="titleMedium">{dayNumber}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width / dayInWeek,
        alignItems: 'center',
    },
    day: {
        fontWeight: 'bold',
        color: 'gray',
    },
    selectedDay: {
        fontWeight: 'bold',
        color: 'red',
    },
})

