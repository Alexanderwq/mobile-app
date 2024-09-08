import {Stack, Tabs} from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{ title: 'Название спортазала' }} />
            <Tabs.Screen name="profile" options={{ title: 'Профиль' }} />
        </Tabs>
    );
}
