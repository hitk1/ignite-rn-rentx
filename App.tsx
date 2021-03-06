import React from 'react'
import AppLoading from 'expo-app-loading'

import { useFonts, Inter_400Regular, Inter_500Medium, } from '@expo-google-fonts/inter'
import { Archivo_400Regular, Archivo_500Medium, Archivo_600SemiBold } from '@expo-google-fonts/archivo'
import { ThemeProvider } from 'styled-components'

import appTheme from './src/styles/theme'

import { Home } from './src/screens/Home'
import { CarDetails } from './src/screens/CarDetails'
import { Scheduling } from './src/screens/Scheduling'
import { SchedulingDetails } from './src/screens/SchedulingDetails'
import { SchedulingComplete } from './src/screens/SchedulingComplete'

export default function App() {

  const [isFontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold
  })

  if (!isFontsLoaded)
    return <AppLoading />

  return (
    <ThemeProvider theme={appTheme}>
      {/* <Home /> */}
      {/* <CarDetails /> */}
      {/* <Scheduling /> */}
      {/* <SchedulingDetails /> */}
      <SchedulingComplete />
    </ThemeProvider>
  );
}
