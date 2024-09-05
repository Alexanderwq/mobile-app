import {View, StyleSheet, Dimensions} from "react-native";
import {Text} from 'react-native-paper'

export type DayItemProps = {
    day: string,
    number: number,
}

const dayInWeek = 7

const {width} = Dimensions.get('window')

export default function DayItem(props: DayItemProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.day} variant="bodyMedium">{props.day}</Text>
            <Text variant="titleMedium">{props.number}</Text>
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
})

