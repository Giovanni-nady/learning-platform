import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { Button } from 'react-native'
import { AuthContext } from './../../Context/AuthContext'
import WelcomeHeader from './../../Components/WelcomeHeader'
import SearchBar from './../../Components/SearchBar'
import GlobalApi from './../../Shared/GlobalApi'
import Slider from './../../Components/Slider'
import VideoCourseList from './../../Components/VideoCourseList'
import CourseList from './../../Components/CourseList'
import { ScrollView } from 'react-native'
import { removeItem } from './../../shared/asyncStorage.js'
import { useNavigation } from '@react-navigation/native'



export default function HomeScreen() {
  const navigation = useNavigation()
  const { userData, setUserData } = useContext(AuthContext)

  const handleReset = async () => {
    await removeItem('onboarding')
    navigation.navigate("onboarding")
  }

  return (
    <ScrollView style={{ padding: 20 }}>
      <WelcomeHeader />
      <SearchBar />
      <Slider />
      <VideoCourseList />
      <CourseList type={'basic'} />
      <CourseList type={'advance'} />
      <TouchableOpacity onPress={handleReset}>
        <Text>Reset</Text>
      </TouchableOpacity>
      <View style={{ height: 100 }}>

      </View>
    </ScrollView>
  )
}