import {Linking, StyleSheet, View} from "react-native";
import React, {useEffect, useState} from "react";
import {useLocalSearchParams, useNavigation} from "expo-router";
import PurchasesCard from "@/components/PurchasesCard";
import { createPaymentLink as createPaymentLinkRequest } from "@/api/purchases/index";
import Toast from "react-native-toast-message";

type TrainerPageParams = {
  name: string,
  one_visit?: number,
  month_visit?: number,
}

export default function TrainerPage() {
  const navigation = useNavigation()
  const local = useLocalSearchParams()
  const { name, one_visit, month_visit }: TrainerPageParams = useLocalSearchParams()
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    navigation.setOptions({
      title: name,
    })
  }, [navigation])

  const createPaymentLink = async (visit: string) => {
    try {
      setLoading(true)
      const url: string = (await createPaymentLinkRequest(visit, Number(local.training_type))).data;
      await Linking.openURL(url)
    } catch (e) {
      Toast.show({
        type: 'error',
        text1: 'Произошла ошибка на сервере!',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      {one_visit &&
          <PurchasesCard
              title={'Разовое посещение'}
              price={one_visit}
              loading={loading}
              pressBuy={() => createPaymentLink('one')}
          />
      }
      {month_visit &&
          <PurchasesCard
              title={'Абонемент на месяц в тренажерный зал'}
              price={month_visit}
              loading={loading}
              pressBuy={() => createPaymentLink('month')}
          />
      }
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