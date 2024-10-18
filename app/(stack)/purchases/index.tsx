import {FlatList, StyleSheet, TouchableOpacity, View, Text} from "react-native";
import {Link} from "expo-router";
import {useQuery} from "@tanstack/react-query";
import {getPurchasesList} from "@/api/purchases";
import {ActivityIndicator} from "react-native-paper";

type SportItem = {
  id: number,
  name: string,
  one_visit: number,
  month_visit: number,
}

export default function PurchasesPage() {
  const {isPending, error, data}: { isPending: boolean, error: boolean, data: SportItem[] } = useQuery({
    queryKey: ['purchasesList'],
    queryFn: () => getPurchasesList(),
  })

  if (isPending) return (
    <ActivityIndicator style={styles.loader} animating={true} color="#01a5dd" size="large"/>
  )

  if (error) return 'Error!'

  const renderItem = (sport: SportItem) => (
    <Link
      href={({
        pathname: '/purchases/[id]',
        params: sport,
      })}
      asChild
      style={styles.link}
    >
      <TouchableOpacity style={styles.card}>
        <Text>
          {sport.name}
        </Text>
      </TouchableOpacity>
    </Link>

  )
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
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
  loader: {
    marginTop: 100,
  },
  link: {
    width: '100%',
  },
})