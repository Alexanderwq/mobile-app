import {Image, SafeAreaView, ScrollView, StyleSheet, View} from "react-native";
import {ActivityIndicator, Text} from "react-native-paper";
import React from "react";
import TrainerCardInterface from "@/types/TrainerCardInterface";
import {useQuery} from "@tanstack/react-query";
import {getTrainersList} from "@/api/team";
import {useLocalSearchParams} from "expo-router";

export default function TrainerPage() {
  const { isPending, error, data }: { isPending: boolean, error: boolean, data: TrainerCardInterface[] } = useQuery({
    queryKey: ['trainersList'],
    queryFn: () => getTrainersList(),
  })

  const { id } = useLocalSearchParams()

  const trainer = data.find(trainer => trainer.id === Number(id))

  const getSourceImg = (name) => {
    return `https://sportadminpanel.ru/images/${name}`
  }

  if (isPending) return (
    <ActivityIndicator animating={true} color="#01a5dd" size="large" />
  )

  return (
    <ScrollView style={styles.container}>
      <Text variant='titleLarge'>{trainer?.last_name} {trainer?.name}</Text>
      <Text variant='titleLarge'>{trainer?.job_title}</Text>
      <Image style={styles.img} source={{ uri: getSourceImg(trainer?.photo) }} />
      <Text variant='bodyLarge'>
        {trainer?.description}
      </Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 15,
    flex: 1,
  },
  img: {
    borderRadius: 20,
    width: 200,
    maxHeight: 250,
    alignSelf: 'center',
    marginTop: 20,
    height: 300,
    marginBottom: 20,
  },
})