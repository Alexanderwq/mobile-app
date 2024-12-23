import {StyleSheet, View} from "react-native";
import {ActivityIndicator, Text} from "react-native-paper";
import {useQuery} from "@tanstack/react-query";
import {getPaymentsList} from "@/api/profile";
import {PaymentsListInterface} from "@/api/profile/types";

export default function MainMenu() {
  const {isPending, error, data}: { isPending: boolean, error: boolean, data: PaymentsListInterface } = useQuery({
    queryKey: ['paymentsList'],
    queryFn: () => getPaymentsList(),
  })

  if (isPending) return (
      ''
  )

  if (error) return (
    <Text>Произошла ошибка при получении ваших оплат.</Text>
  )

  return (
    <View style={styles.container}>
      {data.monthSubscriptions.map(monthSubscription => (
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