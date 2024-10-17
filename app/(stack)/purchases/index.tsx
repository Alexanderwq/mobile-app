import {FlatList, StyleSheet, TouchableOpacity, View} from "react-native";
import {Link} from "expo-router";

const sportsList = [
  {
    id: 1,
    name: 'Футбол'
  },
  {
    id: 2,
    name: 'Волейбол',
  }
]

type SportItem = {
  id: number,
  name: string,
}

export default function PurchasesPage() {
  const renderItem = (sport: SportItem) => (
    <TouchableOpacity style={styles.card}>
      <Link
        href={({
          pathname: '/purchases/[id]',
          params: {
            id: sport.id,
          }
        })}>
        {sport.name}
      </Link>
    </TouchableOpacity>
  )
  return (
    <View style={styles.container}>
      <FlatList
        data={sportsList}
        renderItem={(data) => renderItem(data.item)}
        ItemSeparatorComponent={() => (<View style={{marginTop: 10}}></View>)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 10,
    padding: 15,
  },
  card: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    backgroundColor: '#fff',
    borderRadius: 15,
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
  },
})