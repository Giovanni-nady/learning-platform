import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { TouchableOpacity } from 'react-native';
import { AuthContext } from '../../Context/AuthContext';
import { useNavigation } from '@react-navigation/native';
// import Services from '../../Shared/Services';

export default function Login() {
  WebBrowser.maybeCompleteAuthSession();
  const navigation = useNavigation()
  const [accessToken, setAccessToken] = useState();
  const [userInfo, setUserInfo] = useState();
  const { userData, setUserData } = useContext(AuthContext)
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: '55959786226-e9frfu2d60hu3lt653blch82e4rhjsnp.apps.googleusercontent.com',
    iosClientId: '55959786226-e9frfu2d60hu3lt653blch82e4rhjsnp.apps.googleusercontent.com',
    expoClientId: '55959786226-llk648p590tvtaoklnv4o89mtjtenecr.apps.googleusercontent.com'
  });

  useEffect(() => {
    if (response?.type == 'success') {
      setAccessToken(response.authentication.accessToken);

      getUserData();
    }
  }, [response]);

  const getUserData = async () => {
    try {
      const resp = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${response.authentication.accessToken}` },
        }
      );

      const user = await resp.json();
      console.log("user Details", user)
      setUserInfo(user);
      setUserData(user);
      await Services.setUserAuth(user);
    } catch (error) {
      // Add your own error handler here
    }
  }
  return (
    <View className="flex-1 bg-white">
      <Image className="w-full h-[50%] bg-primaryButton" resizeMode='contain' source={require('./../../../assets/images/login-img.png')} />
      <View className="shadow-lg shadow-black flex-1 rounded-t-3xl mt-[-40] pt-[30] bg-white">
        <Text className="text-xl font-normal text-center text-accentBackground mb-2">Welcome to</Text>
        <Text className="text-3xl font-bold text-center text-primaryButton">ENGLISHOM</Text>
        <Text className="mt-4 text-xl mx-3 text-accentBackground">
          Discover Endless Possibilities: Elevate Your Career and Personal Growth with Our Diverse Course Selection.
        </Text>


        <TouchableOpacity onPress={() => promptAsync()}
          className="rounded-lg border border-primaryButton bg-primaryButton mx-[30] p-3 mt-3 flex-row justify-center">
          <Ionicons name="logo-google" size={24}
            color="white" style={{ marginRight: 10 }} />
          <Text
            className="text-base text-white text-center">
            Sign In with Google
          </Text>
        </TouchableOpacity>

        <View className="flex-row justify-between items-center my-4">
          <View className="h-0.5 bg-slate-300 w-1/3 m-2" />
          <Text className="text-black">or</Text>
          <View className="h-0.5 bg-slate-300 w-1/3 m-2" />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('main')} className="rounded-lg border border-primaryButton mx-[30] p-3 mb-10">

          <Text
            className="text-base text-primaryButton text-center">
            continue as a Guest
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

