import {StyleSheet, View} from "react-native";
import {ActivityIndicator, Button, Text, TextInput} from "react-native-paper";
import {useState} from "react";
import {useAuth} from "@/hooks/AuthProvider";
import {useEmailValidation} from "@/hooks/useEmailValidation";
import {usePasswordValidation} from "@/hooks/usePasswordValidation";
import {Redirect, router} from "expo-router";
import {AxiosError} from "axios";
import Toast from "react-native-toast-message";

export default function loginPage() {
  const { token, login } = useAuth()

  if (token) {
    return <Redirect href='/' />
  }

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [showLoader, setShowLoader] = useState<boolean>(false)

  const { emailError, emailIsEmpty } = useEmailValidation(email)
  const { passwordError, passwordIsEmpty } = usePasswordValidation(password)

  const buttonDisabled: boolean = emailError || passwordError || passwordIsEmpty || emailIsEmpty

  const clickButton = async () => {
    setShowLoader(true)
    try {
      await login(email, password)
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.status === 422) {
          return Toast.show({
            type: 'error',
            text1: 'Ошибка',
            text2: err.response?.data.message,
          })
        }
      }
      Toast.show({
        type: 'error',
        text1: 'Ошибка',
        text2: 'Произошла ошибка на сервере!',
      })
    } finally {
      setShowLoader(false)
    }
  }

  return (
    <View style={styles.container}>
      { showLoader ? (
        <ActivityIndicator size='large' />
      ) : (
        <View style={styles.form}>
          <Text variant="titleLarge">
            Вход
          </Text>
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
            Войти
          </Button>
          <Button
            mode="text"
            onPress={() => router.push('/sign-up')}
          >
            Зарегистрироваться
          </Button>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: .75,
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
})