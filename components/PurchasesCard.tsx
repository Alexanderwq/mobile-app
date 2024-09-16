import {StyleSheet, View} from "react-native";
import {Button, Text} from 'react-native-paper'

type PurchasesCardProps = {
  title: string,
  price: number,
}

export default function PurchasesCard(props: PurchasesCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.textContent}>
        <Text variant='bodyLarge'>{ props.title }</Text>
        <Text>Цена: { new Intl.NumberFormat('ru').format(props.price) } руб.</Text>
      </View>
      <Button style={styles.button} mode='contained'>
        Купить
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    backgroundColor: '#fff',
    borderRadius: 15,
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
  },
  textContent: {
    flex: 1,
  },
  button: {
    alignSelf: 'center',
  }
})