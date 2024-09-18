import {StyleSheet, View} from "react-native";
import {Button, Text, TextInput} from "react-native-paper";
import {useState} from "react";

export default function loginPage() {
  const [text, setText] = useState('')

  return (
    <View style={styles.container}>
      <Text variant="titleLarge">
        Вход
      </Text>
      <TextInput
        mode="outlined"
        label="Email"
        value={text}
        onChangeText={text => setText(text)}
      />
      <TextInput
        mode="outlined"
        label="Пароль"
        value={text}
        onChangeText={text => setText(text)}
      />
      <Button
        style={styles.button}
        mode="contained"
        onPress={() => console.log('Pressed')}
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