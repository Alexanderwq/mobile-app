import {StyleSheet, View} from "react-native";
import {Text} from "react-native-paper";

export default function ScheduleCard() {
    return (
        <View style={styles.card}>
            <View>
                <Text>
                    18:00
                </Text>
                <Text>
                    19:00
                </Text>
            </View>
            <View style={styles.line}></View>
            <View>
                <Text>
                    Маркова Анастасия Владимировна
                </Text>
                <Text>
                    Йога
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        flexDirection: 'row',
        padding: 15,
        position: 'relative',
        gap: 30,
    },
    line: {
        width: 50,
        height: 2,
        backgroundColor: 'gray',
        transform: 'rotate(90deg)',
        position: 'absolute',
        top: '50%',
        left: 40,
        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
    },
})