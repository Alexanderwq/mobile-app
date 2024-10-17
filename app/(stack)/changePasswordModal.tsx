import {StyleSheet, View} from "react-native";
import {Button, Text, TextInput} from 'react-native-paper'
import {useState} from "react";
import {usePasswordValidation} from "@/hooks/usePasswordValidation";
import {changePassword as changePasswordRequest} from '@/api/changePasswordModal'
import {useAuth} from "@/hooks/AuthProvider";
import UserInterface from "@/types/auth/UserInterface";
import {AxiosError} from "axios";
import Toast from "react-native-toast-message";
import {router} from "expo-router";

export default function PasswordModal() {
  const { user } : { user: UserInterface } = useAuth()
  const [newPassword, setNewPassword] = useState<string>('')
  const [oldPassword, setOldPassword] = useState<string>('')
  const { passwordError: newPasswordError, passwordIsEmpty: newPasswordIsEmpty } = usePasswordValidation(newPassword)
  const { passwordError: oldPasswordError, passwordIsEmpty: oldPasswordIsEmpty } = usePasswordValidation(oldPassword)

  const buttonDisabled: boolean = oldPasswordError || newPasswordError || oldPasswordIsEmpty || newPasswordIsEmpty

  const changePassword = async () => {
    try {
      await changePasswordRequest(
        user.email,
        oldPassword,
        newPassword,
      )
      router.push('/profile')
      Toast.show({
        type: 'success',
        text1: 'Пароль изменен',
      })
    } catch (err) {
      if (err instanceof AxiosError) {
        return Toast.show({
          type: 'error',
          text1: 'Ошибка',
          text2: err.response?.data.message
        })
      }
      Toast.show({
        type: 'error',
        text1: 'Произошла ошибка на сервере!',
      })
    }
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
