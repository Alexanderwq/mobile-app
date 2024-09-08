import {Stack} from "expo-router";

export default function PageLayout() {
    return (
        <Stack>
          <Stack.Screen name="schedule" options={{ title: 'Расписание' }} />
        </Stack>
    )
}