import {StyleSheet, Dimensions, TouchableOpacity} from "react-native";
import {Text} from 'react-native-paper'

type DayItemProps = {
    date: Date,
    selected: boolean,
    onPress(value: Date): void,
}

const dayInWeek = 7

const {width} = Dimensions.get('window')

export default function DayItem(props: DayItemProps) {
    const dayNumber = props.date.getDate()
    const weekDay = () => {
        let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
        return days[props.date.getDay()]
    }

    return (
        <TouchableOpacity style={[styles.container, props.selected && styles.selectedContainer]} onPress={() => props.onPress(props.date)}>
            <Text style={[styles.day, props.selected && styles.textWhite]} variant="bodyMedium">
                {weekDay()}
            </Text>
            <Text variant="titleMedium" style={props.selected && styles.textWhite}>{dayNumber}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width / dayInWeek,
        alignItems: 'center',
    },
    selectedContainer: {
        backgroundColor: '#01a5dd',
        borderRadius: 50,
        color: 'white',
    },
    day: {
        fontWeight: 'bold',
        color: 'gray',
    },
    textWhite: {
        color: 'white',
    },
})

