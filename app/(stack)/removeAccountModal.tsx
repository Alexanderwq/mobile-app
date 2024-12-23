import {Button} from "react-native-paper";
import {View} from "react-native";
import {useAuth} from "@/hooks/AuthProvider";
import {removeUser} from "@/api/auth";
import Toast from "react-native-toast-message";
import {router} from "expo-router";

export default function PasswordModal() {
    const { logOut } = useAuth()

    const removeAccount = async () => {
        try {
            await removeUser()
            logOut()
        } catch (e) {
            Toast.show({
                type: 'error',
                text1: 'Произошла ошибка на сервере!',
            })
        }
    }

    return (
        <View style={{ gap: 20, padding: 40 }}>
            <Button mode="contained" onPress={() => router.push('/profile')}>
                Отменить
            </Button>
            <Button mode="outlined" onPress={removeAccount}>
                Подтвердить
            </Button>
        </View>
    )
}