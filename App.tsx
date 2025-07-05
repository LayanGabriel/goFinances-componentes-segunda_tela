import 'react-native-gesture-handler';


import React from 'react';
import { Dashboard } from './src/screens/Dashboard';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import AppLoading from 'expo-app-loading'
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_900Black,
} from '@expo-google-fonts/poppins'

import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './src/Routes/app.routes';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_900Black,
  })
if (!fontsLoaded){
  return <AppLoading/>
}

  return (
     <GestureHandlerRootView>
    <ThemeProvider theme={theme}>
       <NavigationContainer>
        <AppRoutes />
       </NavigationContainer>
    </ThemeProvider>
   </GestureHandlerRootView>
  );
}

