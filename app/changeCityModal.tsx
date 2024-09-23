import {FlatList, StyleSheet, TouchableOpacity, View} from "react-native";
import {Button, Text} from 'react-native-paper'
import {useState} from "react";
import {router} from "expo-router";
import { saveCity as saveCityRequest } from '@/api/changeCityModal/index'
import {useAuth} from "@/hooks/AuthProvider";

export default function ChangeCityModal() {
  const mockCities = [
    {
      id: 1,
      name: 'Ярославль',
    },
    {
      id: 2,
      name: 'Москва',
    }
  ]

  const { user } = useAuth()
  const isPresented = router.canGoBack();

  const [chosenIdCity, setChosenIdCity] = useState<number>(user?.city.id as number)

  const saveCity = async () => {
    await saveCityRequest(chosenIdCity)
    if (isPresented) {
      router.back()
    } else {
      router.push('/profile')
    }
  }

  const renderCity = (city) => (
    <TouchableOpacity
      onPress={() => setChosenIdCity(city.id)}
      style={[styles.cityCard, chosenIdCity === city.id && styles.cityCardActive]}
    >
      <Text>
        { city.name }
      </Text>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <Text variant='titleMedium'>
        Изменить город
      </Text>
      <FlatList
        data={mockCities}
        renderItem={({item}) => renderCity(item)}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} ></View>}
      />
      <Button
        style={styles.buttonSave}
        mode='contained'
        onPress={saveCity}
      >
        Сохранить
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 10,
    padding: 15,
  },
  cityCard: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    borderRadius: 12,
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
    padding: 15,
  },
  cityCardActive: {
    opacity: .5,
    border: '1px solid green',
  },
  buttonSave: {
    alignSelf: 'center',
  },
})