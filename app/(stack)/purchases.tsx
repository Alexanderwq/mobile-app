import {StyleSheet, View} from "react-native";
import PurchasesCard from "@/components/PurchasesCard";

export default function PurchasesPage() {
  return (
    <View style={styles.container}>
      <PurchasesCard title={'Разовое посещение'} price={1500} />
      <PurchasesCard title={'Абонемент на месяц в тренажерный зал'} price={1500} />
      <PurchasesCard title={'Разовое посещение'} price={1500} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 10,
    paddingTop: 15,
  },
})