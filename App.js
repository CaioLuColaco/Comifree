import React, { useCallback } from 'react';
import {StatusBar, View, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import Home from "./src/telas/Home"
import Fornecedor from "./src/telas/Fornecedor"
import Cesta from './src/telas/Cesta';

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
  return (<>
      <SafeAreaProvider onLayout={onLayoutRootView}>
       <StatusBar />
        <NavigationContainer >
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Fornecedor" component={Fornecedor} />
            <Stack.Screen name="Cesta" component={Cesta} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
      </>
  );
}
