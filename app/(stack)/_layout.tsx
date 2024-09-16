import {router, Stack} from "expo-router";
import {List} from "react-native-paper";
import {TouchableOpacity} from "react-native";

export default function PageLayout() {
    return (
        <Stack screenOptions={{ headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <List.Icon color="rgba(1,165,221,1.00)" icon="arrow-left"/>
            </TouchableOpacity>
          )}}>
          <Stack.Screen name="schedule" options={{ title: 'Расписание' }} />
          <Stack.Screen name="team" options={{ title: 'Наша команда' }} />
        </Stack>
    )
}