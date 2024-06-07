import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'

export default function WelcomeHeader() {
    const {userData,setUserData}=useContext(AuthContext)
  return (
    <View style={styles.container}>
        <View>
        <Text>Hello,</Text>
         <Text style={{fontSize:20,fontWeight:'bold'}}>{userData?.name}</Text>
        </View>
      <Pressable onPress={()=> setUserData(null)}>
        <Image source={{uri:userData?.picture}}
        style={{width:40,height:40,borderRadius:100}}
        />
        </Pressable>
    
    </View>
  )
}

const styles = StyleSheet.create({
        container:{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'
        }
})