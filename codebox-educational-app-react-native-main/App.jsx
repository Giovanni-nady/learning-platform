import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AuthContext } from './App/Context/AuthContext';
import { useEffect, useState } from 'react';
// import Services from './App/Shared/Services';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigation from './App/navigations/HomeNavigation.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './App/screens/Home/HomeScreen.tsx';
import Login from './App/screens/Auth/Login.jsx';
const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <AuthProvider
      value={{}}>
      <Layout></Layout>
    </AuthProvider>

  );
}

export const Layout = () => {

  const { authState, inLogout } = useAuth()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {authState?.authenticated ?
          <Stack.Screen name="Home" component={HomeScreen}/>
            :
          <Stack.Screen name="Login" component={Login}/>
        }
      </Stack.Navigator>
      {/* <HomeNavigation /> */}
    </NavigationContainer>
  )
}
