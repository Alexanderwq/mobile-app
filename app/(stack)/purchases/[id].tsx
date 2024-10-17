import { StyleSheet, View} from "react-native";
import React, {useEffect} from "react";
import {useLocalSearchParams, useNavigation} from "expo-router";
import PurchasesCard from "@/components/PurchasesCard";

type TrainerPageParams = {
  name: string,
  one_visit?: number,
  month_visit?: number,
}

export default function TrainerPage() {
  const navigation = useNavigation()
  const { name, one_visit, month_visit }: TrainerPageParams = useLocalSearchParams()

  useEffect(() => {
    navigation.setOptions({
      title: name,
    })
  }, [navigation])

  return (
    <View style={styles.container}>
      {one_visit && <PurchasesCard title={'Разовое посещение'} price={one_visit} />}
      {month_visit && <PurchasesCard title={'Абонемент на месяц в тренажерный зал'} price={month_visit} />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 15,
    gap: 10,
  },
  img: {
    borderRadius: 20,
    width: 200,
    maxHeight: 250,
    alignSelf: 'center',
    marginTop: 20,
    height: '100%',
    marginBottom: 20,
  },
  ratingLine: {
    marginTop: 15,
    marginBottom: 5,
  },
  rateText: {
    alignSelf: 'center',
  },
})