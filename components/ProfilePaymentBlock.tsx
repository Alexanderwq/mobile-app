import {StyleSheet, View} from "react-native";
import {Text} from "react-native-paper";
import {PaymentsListInterface} from "@/api/profile/types";

type PaymentBlockProps = {
  isPending: boolean,
  error: boolean,
  data: PaymentsListInterface,
}

export default function MainMenu(props: PaymentBlockProps) {
  if (props.isPending) return (
      ''
  )

  if (props.error) return (
    <Text>Произошла ошибка при получении ваших оплат.</Text>
  )

  return (
    <View style={styles.container}>
      {props.data.oneVisits.map((oneVisit) => (
        <View style={styles.card} key={oneVisit.id}>
          <Text>
            Оплачена тренировка по { oneVisit.trainingName }
          </Text>
        </View>
      ))}
      {props.data.monthSubscriptions.map(monthSubscription => (
        <View style={styles.card} key={monthSubscription.id}>
          <Text>
            Абонемент
          </Text>
          <Text>
            { monthSubscription.name } до {monthSubscription.endDate}
          </Text>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 10,
  },
  card: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 15,
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
  },
})