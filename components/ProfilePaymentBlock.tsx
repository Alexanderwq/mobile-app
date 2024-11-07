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
    <ActivityIndicator animating={true} color="#01a5dd" size="large"/>
  )

  if (error) return (
    <Text>Произошла ошибка при получении ваших оплат.</Text>
  )

  function formatDate(date: Date) {
    let dd = String(date.getDate());
    if (dd < 10) dd = '0' + dd;

    let mm = String(date.getMonth() + 1);
    if (mm < 10) mm = '0' + mm;

    let yy = String(date.getFullYear() % 100);
    if (yy < 10) yy = '0' + yy;

    return dd + '.' + mm + '.' + yy;
  }

  return (
    <View style={styles.container}>
      {data.monthSubscriptions.map(monthSubscription => (
        <View key={monthSubscription.id}>
          <Text>
            Абонемент
          </Text>
          <Text>
            { monthSubscription.name } до {formatDate(new Date(monthSubscription.created_at))}
          </Text>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    backgroundColor: '#fff',
    borderRadius: 15,
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
  },
})