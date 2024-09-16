import {StyleSheet, View} from "react-native";
import {Text} from "react-native-paper";

type ScheduleCardProps = {
  startTime: string,
  endTime: string,
  trainerName: string,
  sportName: string,
}

export default function ScheduleCard(props: ScheduleCardProps) {
    return (
        <View style={styles.card}>
            <View>
                <Text>
                  { props.startTime }
                </Text>
                <Text>
                  { props.endTime }
                </Text>
            </View>
            <View style={styles.line}></View>
            <View>
                <Text>
                  { props.trainerName }
                </Text>
                <Text>
                  { props.sportName }
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
        top: '100%',
        left: 40,
        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
    },
})