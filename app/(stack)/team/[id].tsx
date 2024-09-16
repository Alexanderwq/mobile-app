import { Image, StyleSheet, View} from "react-native";
import {Text} from "react-native-paper";
import React from "react";
import {Rating} from "react-native-ratings";

export default function TrainerPage() {
  return (
    <View style={styles.container}>
      <Text variant='titleLarge'>Воронцова Мария Дмитриевна</Text>
      <Image style={styles.img} source={require('@/assets/images/trainer.webp')} />
      <Text variant='bodyLarge'>
        Фитнес-тренер с 7-летним опытом работы в фитнес-центре. Имею 1-й взрослый разряд по плаванию.
        Разработал комплекс упражнений для начинающих, позволяющий снизить вес в 2 раза быстрее традиционных методик.
        Занимал 1 место в областных соревнованиях по кроссфиту в 2020 и 2021 годах.
      </Text>
      <Rating
        style={styles.ratingLine}
        isDisabled
        readonly
        startingValue={4.5}
      />
      <Text style={styles.rateText} variant='bodyLarge'>
        Оценка 4.5
      </Text>
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