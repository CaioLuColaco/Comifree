import React, { useCallback } from 'react';
import {StatusBar, SafeAreaView } from 'react-native';
import Cesta from './src/telas/Cesta';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  // Loading fonts
  const  [fontsLoaded] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  })

  // Configurations to show a loader while fonts are loading
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  // General Return
  return (
    <SafeAreaView onLayout={onLayoutRootView}>
      <StatusBar />
      <Cesta />
    </SafeAreaView>
  );
}
