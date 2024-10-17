import {Redirect, Tabs} from 'expo-router';
import React from "react";
import {useAuth} from "@/hooks/AuthProvider";
import {FontAwesome} from "@expo/vector-icons";

export default function TabLayout() {
  const {token} = useAuth()

  if (!token) {
    return <Redirect href='/login'/>
  }

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: 'Спортивный клуб "Сокол"',
          title: 'Меню',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Профиль',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
    </Tabs>
  );
}
