import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CourseDetails from '../screens/CourseDetails';
import CourseChapter from '../screens/CourseChapter';
import PlayVideo from '../screens/PlayVideo';
import { getItem } from '../shared/asyncStorage.js';
import OnboardingScreen from '../screens/Welcome/OnboardingScreen.jsx';
import Login from '../screens/Auth/Login.jsx';
import HomeScreen from '../screens/Home/HomeScreen.tsx';
import ButtonTabs from './ButtonTabs.js';

const Stack = createNativeStackNavigator();
export default function HomeNavigation() {

  const [showOnboarding, setShowOnboarding] = useState(null)

  useEffect(() => {
    checkIfAlreadyOnboarding()
  }, [])

  const checkIfAlreadyOnboarding = async () => {
    let onboarding = await getItem('onboarding')
    if (onboarding == 1) {
      console.log("hide");
      //hide onboarding
      setShowOnboarding(false)
    }
    else {
      console.log("show");
      //show onboarding
      setShowOnboarding(true)
    }
  }

  if (showOnboarding === null) {
    return null;
  }

  if (showOnboarding) {
    return (
      // <NavigationContainer>
      <Stack.Navigator initialRouteName='onboarding' screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="onboarding" component={OnboardingScreen} />
        <Stack.Screen name="login" component={Login} ></Stack.Screen>
        <Stack.Screen name="home" component={HomeScreen} ></Stack.Screen>
        <Stack.Screen name="course-detail" component={CourseDetails} ></Stack.Screen>
        <Stack.Screen name="course-chapter"
          component={CourseChapter} />
        <Stack.Screen name="play-video"
          component={PlayVideo} />
      </Stack.Navigator>
      // </NavigationContainer>
    )
  } else {
    return (
      // <NavigationContainer>
      <Stack.Navigator initialRouteName='login' screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="login" component={Login} ></Stack.Screen>
        <Stack.Screen name="onboarding" component={OnboardingScreen} />
        <Stack.Screen name="main" component={ButtonTabs} ></Stack.Screen>
        {/* <Stack.Screen name="course-detail" component={CourseDetails} ></Stack.Screen> */}
        {/* <Stack.Screen name="course-chapter" */}
        {/* component={CourseChapter} /> */}
        {/* <Stack.Screen name="play-video" */}
        {/* component={PlayVideo} /> */}
      </Stack.Navigator>
      // </NavigationContainer>
    )

  }


}