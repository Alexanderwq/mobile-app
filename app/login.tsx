import {StyleSheet, View} from "react-native";
import {ActivityIndicator, Button, Text, TextInput} from "react-native-paper";
import {useState} from "react";
import {useAuth} from "@/hooks/AuthProvider";

export default function loginPage() {
  const emailRegExp = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/g
  const minPasswordLength = 6

  const { login } = useAuth()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [showLoader, setShowLoader] = useState<boolean>(false)

  const emailIsEmpty = email.length === 0
  const passwordIsEmpty = password.length === 0
  const emailError: boolean = !emailRegExp.test(email) && !emailIsEmpty
  const passwordError: boolean = password.length < minPasswordLength && !passwordIsEmpty

  const buttonDisabled: boolean = emailError || passwordError || passwordIsEmpty || emailIsEmpty

  const clickButton = async () => {
    try {
      setShowLoader(true)
      await login(email, password)
      setShowLoader(false)
    } catch (e) {
      console.log(e)
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