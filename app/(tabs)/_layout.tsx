import {Stack, Tabs} from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{ headerTitle: 'Название спортазала', title: 'Меню' }} />
            <Tabs.Screen name="profile" options={{ title: 'Профиль' }} />
        </Tabs>
    );
}
