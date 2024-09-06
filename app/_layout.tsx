import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import 'react-native-reanimated';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import {Stack} from "expo-router";
SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient()

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'tomato',
      secondary: 'yellow',
    },
  };

  return (
    <PaperProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Stack screenOptions={{ tabBarActiveTintColor: 'blue', headerShown: false }}>
          <Stack.Screen name="(tabs)" />
        </Stack>
      </QueryClientProvider>
    </PaperProvider>
  );
}
