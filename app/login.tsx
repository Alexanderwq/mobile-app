import {StyleSheet, View} from "react-native";
import {Button, Text, TextInput} from "react-native-paper";
import {useState} from "react";
import {useAuth} from "@/hooks/AuthProvider";



export default function loginPage() {
  const emailRegExp = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/g
  const minPasswordLength = 6

  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const emailIsEmpty = email.length === 0
  const passwordIsEmpty = password.length === 0
  const emailError: boolean = !emailRegExp.test(email) && !emailIsEmpty
  const passwordError: boolean = password.length < minPasswordLength && !passwordIsEmpty

  const buttonDisabled: boolean = emailError || passwordError || passwordIsEmpty || emailIsEmpty

  const clickButton = async () => {
    try {
      await login(email, password)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <View style={styles.container}>
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
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 15,
  },
  button: {
    alignSelf: 'center',
    minWidth: 150,
  },
})