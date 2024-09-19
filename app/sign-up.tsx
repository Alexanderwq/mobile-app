import {StyleSheet, View} from "react-native";
import {Button, Text, TextInput} from 'react-native-paper'
import {useState} from "react";
import {useAuth} from "@/hooks/AuthProvider";

export default function signUpPage() {
  const { signUp } = useAuth()

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const clickButton = () => {

  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text variant='titleLarge'>
          Зарегистрироваться
        </Text>
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
})