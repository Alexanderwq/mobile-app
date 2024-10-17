import { StyleSheet, View} from "react-native";
import React, {useEffect} from "react";
import {useLocalSearchParams, useNavigation} from "expo-router";
import PurchasesCard from "@/components/PurchasesCard";

export default function TrainerPage() {
  const navigation = useNavigation()
  const { id } = useLocalSearchParams()

  useEffect(() => {
    navigation.setOptions({
      title: 'Футбол'
    })
  }, [navigation])

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
    padding: 15,
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