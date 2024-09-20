import {Redirect, router, Stack} from "expo-router";
import {List} from "react-native-paper";
import {TouchableOpacity} from "react-native";
import {useAuth} from "@/hooks/AuthProvider";
import React from "react";

export default function PageLayout() {
    const { token } = useAuth()

    if (!token) {
      return <Redirect href='/login'/>
    }

    return (
        <Stack screenOptions={{ headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <List.Icon color="rgba(1,165,221,1.00)" icon="arrow-left"/>
            </TouchableOpacity>
          )}}>
          <Stack.Screen name="schedule" options={{ title: 'Расписание' }} />
          <Stack.Screen name="team/index" options={{ title: 'Наша команда' }} />
        </Stack>
    )
}