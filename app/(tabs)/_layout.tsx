import {Redirect, Tabs} from 'expo-router';
import React from "react";
import {useAuth} from "@/hooks/AuthProvider";

export default function TabLayout() {
  const { token } = useAuth()

  if (!token) {
    return <Redirect href='/login'/>
  }

  return (
    <Tabs>
      <Tabs.Screen name="index" options={{headerTitle: 'Название спортазала', title: 'Меню'}}/>
      <Tabs.Screen name="profile" options={{title: 'Профиль'}}/>
    </Tabs>
  );
}
