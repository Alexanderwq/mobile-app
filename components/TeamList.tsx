import {FlatList, Image, StyleSheet, View} from "react-native";
import {Divider, Text} from 'react-native-paper'
import TrainerCardInterface from "@/types/TrainerCardInterface";

export default function TeamList() {
  const teamList: TrainerCardInterface[] = [
    {
      jobTitle: 'Тренер по йоге',
      name: 'Ольга',
      avatar: 'trainer',
    },
    {
      jobTitle: 'Тренер по йоге',
      name: 'Ольга',
      avatar: 'trainer',
    },
    {
      jobTitle: 'Тренер по йоге',
      name: 'Ольга',
      avatar: 'trainer',
    },
  ]
  const imageNames = {
    trainer: require('@/assets/images/trainer.webp')
  }
  const renderItem = ({item}: { item: TrainerCardInterface }) => (
    <View style={styles.card}>
      <Image
        source={imageNames[item.avatar]}
        style={styles.avatar}
      />
      <View style={styles.cardInfo}>
        <Text variant="titleMedium">{item.name}</Text>
        <Divider/>
        <Text>{item.jobTitle}</Text>
      </View>
    </View>
  )
  return (
    <FlatList
      data={teamList}
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