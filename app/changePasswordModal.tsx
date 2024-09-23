import {StyleSheet, View} from "react-native";
import {Button, Text, TextInput} from 'react-native-paper'
import {useState} from "react";
import {usePasswordValidation} from "@/hooks/usePasswordValidation";

export default function PasswordModal() {
  const [newPassword, setNewPassword] = useState<string>('')
  const [oldPassword, setOldPassword] = useState<string>('')
  const { passwordError: newPasswordError, passwordIsEmpty: newPasswordIsEmpty } = usePasswordValidation(newPassword)
  const { passwordError: oldPasswordError, passwordIsEmpty: oldPasswordIsEmpty } = usePasswordValidation(oldPassword)

  const buttonDisabled: boolean = oldPasswordError || newPasswordError || oldPasswordIsEmpty || newPasswordIsEmpty

  const changePassword = () => {

  }

  return (
    <View style={styles.container}>
      <Text variant='titleMedium'>
        Смена пароля
      </Text>
      <TextInput
        mode="outlined"
        label="Старый пароль"
        value={oldPassword}
        onChangeText={text => setOldPassword(text)}
      />
      <TextInput
        mode="outlined"
        label="Новый пароль"
        value={newPassword}
        onChangeText={text => setNewPassword(text)}
      />
      <Button
        style={styles.saveButton}
        disabled={buttonDisabled}
        mode="contained"
        onPress={changePassword}
      >
        Сохранить
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    gap: 10,
  },
  saveButton: {
    alignSelf: 'center',
  },
})
