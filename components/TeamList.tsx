import {FlatList, Image, StyleSheet, TouchableOpacity, View} from "react-native";
import {ActivityIndicator, Divider, Text} from 'react-native-paper'
import TrainerCardInterface from "@/types/TrainerCardInterface";
import {router} from "expo-router";
import {useQuery} from "@tanstack/react-query";
import {getTrainersList} from "@/api/team";

export default function TeamList() {
  const { isPending, error, data }: { isPending: boolean, error: boolean, data: TrainerCardInterface[] } = useQuery({
    queryKey: ['trainersList'],
    queryFn: () => getTrainersList(),
  })

  const getSourceImg = (name) => {
    return `https://sportadminpanel.ru/images/${name}`
  }

  if (isPending) return (
    <ActivityIndicator animating={true} color="#01a5dd" size="large" />
  )

  const renderItem = ({item}: { item: TrainerCardInterface }) => (
    <TouchableOpacity style={styles.card} onPress={() => router.push(`/team/${item.id}`)}>
      <Image
        source={{ uri: getSourceImg(item.photo) }}
        style={styles.avatar}
      />
      <View style={styles.cardInfo}>
        <Text variant="titleMedium">{item.name}</Text>
        <Divider/>
        <Text>{item.job_title}</Text>
      </View>
    </TouchableOpacity>
  )
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      ItemSeparatorComponent={() => (
        <View style={{height: 15}}></View>
      )}
    />
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    gap: 15,
    backgroundColor: '#fff',
    borderRadius: 12,
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
    padding: 15,
  },
  cardInfo: {
    width: '100%',
    alignSelf: 'center',
    gap: 7,
  },
  avatar: {
    height: 80,
    width: 80,
    borderRadius: 50,
  },
})