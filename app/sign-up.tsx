import {
  StyleSheet, TouchableOpacity,
  View
} from "react-native";
import {ActivityIndicator, Button, Text, TextInput} from 'react-native-paper'
import {useState} from "react";
import {useAuth} from "@/hooks/AuthProvider";
import {useEmailValidation} from "@/hooks/useEmailValidation";
import {usePasswordValidation} from "@/hooks/usePasswordValidation";
import {router} from "expo-router";

type CityInterface = {
  id: number,
  name: string,
}

const citiesList: CityInterface[]  = [
  {
    id: 1,
    name: 'Ярославль',
  },
  {
    id: 2,
    name: 'Москва',
  },
]

export default function signUpPage() {
  const cityLabelDefault = 'Город'
  const {signUp} = useAuth()

  const [showLoader, setShowLoader] = useState<boolean>(false)
  const [chosenCity, setChosenCity] = useState<number|null>(null)
  const [email, setEmail] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [showCities, setShowCities] = useState<boolean>(false)

  const { emailError, emailIsEmpty } = useEmailValidation(email)
  const { passwordError, passwordIsEmpty } = usePasswordValidation(password)

  const getCityNameById = (id: number|null) => {
    return citiesList.find((city) => city.id === id)?.name
  }

  const textLabelCity = getCityNameById(chosenCity) || cityLabelDefault

  const nameIsEmpty = name.length === 0
  const cityIsEmpty = chosenCity === null

  const buttonDisabled: boolean = emailError ||
    passwordError ||
    passwordIsEmpty ||
    emailIsEmpty ||
    nameIsEmpty ||
    cityIsEmpty

  const clickButton = async () => {
    try {
      setShowLoader(true)
      await signUp({
        email,
        name,
        password,
        cityId: chosenCity as number,
      })
      setShowLoader(false)
    } catch (e) {
      console.log(e)
    }
  }

  const toggleCitySelect = () => {
    setShowCities(!showCities)
  }

  const setCity = (id: number) => {
    setChosenCity(id)
    toggleCitySelect()
  }

  return (
    <View style={styles.container}>
      {showLoader ? (
        <ActivityIndicator size='large' />
      ) : (
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
              label={textLabelCity}
              editable={false}
              right={<TextInput.Icon icon="chevron-down" size={20}/>}
            />
            {showCities && (
              <View style={styles.citiesList}>
                {
                  citiesList.map((city: CityInterface) => (
                    <Text
                      style={styles.citiesListText}
                      onPress={() => setCity(city.id)}
                      key={city.id}
                    >
                      { city.name }
                    </Text>
                  ))
                }
              </View>
            )}
          </TouchableOpacity>

          <TextInput
            mode="outlined"
            label="Имя"
            value={name}
            onChangeText={text => setName(text)}
          />
          <TextInput
            mode="outlined"
            label="Email"
            value={email}
            error={emailError}
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            mode="outlined"
            label="Пароль"
            value={password}
            error={passwordError}
            onChangeText={text => setPassword(text)}
          />
          <Button
            style={styles.button}
            mode="contained"
            disabled={buttonDisabled}
            onPress={clickButton}
          >
            Зарегистрироваться
          </Button>
          <Button
            mode="text"
            onPress={() => router.push('/login')}
          >
            Войти
          </Button>
        </View>
      )}
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