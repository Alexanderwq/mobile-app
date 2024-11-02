import {StyleSheet, View} from "react-native";
import {Text} from "react-native-paper";

type ScheduleCardProps = {
  startTime: string,
  endTime: string,
  trainerName: string,
  trainerLastName: string,
  sportName: string,
  address: string,
}

export default function ScheduleCard(props: ScheduleCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.timeBlock}>
        <Text>
          {props.startTime}
        </Text>
        <Text>
          {props.endTime}
        </Text>
      </View>
      <View style={styles.line}></View>
      <View>
        <Text style={styles.sportName}>
          {props.sportName}
        </Text>
        <Text>
          {props.trainerName} {props.trainerLastName}
        </Text>
        <Text>
          {props.address}
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
  timeBlock: {
    justifyContent: 'center',
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
  sportName: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
})