import {
  StyleSheet, TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from "react-native";
import {Button, Text, TextInput} from 'react-native-paper'
import {useState} from "react";
import {useAuth} from "@/hooks/AuthProvider";

export default function signUpPage() {
  const {signUp} = useAuth()

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const [showCities, setShowCities] = useState<boolean>(false)

  const clickButton = () => {

  }

  function toggleCitySelect() {
    setShowCities(!showCities)
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text variant='titleLarge'>
          Зарегистрироваться
        </Text>
        <TouchableOpacity
          style={styles.citiesSelect}
          onPress={toggleCitySelect}
        >
          <TextInput
            mode="outlined"
            label="Город"
            editable={false}
            right={<TextInput.Icon icon="chevron-down" size={20}/>}
          />
          {showCities && (
            <View style={styles.citiesList}>
              <Text style={styles.citiesListText}>Ярославль</Text>
              <Text style={styles.citiesListText}>Москва</Text>
            </View>
          )}
        </TouchableOpacity>

        <TextInput
          mode="outlined"
          label="Имя"
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <TextInput
          mode="outlined"
          label="Email"
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <TextInput
          mode="outlined"
          label="Пароль"
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <Button
          style={styles.button}
          mode="contained"
          onPress={clickButton}
        >
          Зарегистрироваться
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: .5,
    justifyContent: 'center',
  },
  form: {
    padding: 20,
    gap: 15,
  },
  button: {
    alignSelf: 'center',
    minWidth: 150,
  },
  citiesSelect: {
    position: 'relative',
    zIndex: 100,
  },
  citiesList: {
    position: 'absolute',
    top: '100%',
    left: 0,
    backgroundColor: 'white',
    width: '100%',
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
  },
  citiesListText: {
    color: 'black',
    border: '1px solid black',
    padding: 10,
  },
})