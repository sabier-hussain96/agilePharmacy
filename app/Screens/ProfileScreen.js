import { View, Text, TouchableOpacity, useColorScheme } from 'react-native'
import Lottie from 'lottie-react-native'
import React from 'react'

const ProfileScreen = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark'
  return (
    <View style={{ flex: 1 ,backgroundColor:isDark? '#000000':"#E0F2F1" }}>
      <View style={{ justifyContent: "flex-start" }}>
        <Lottie source={require('../Global/Profile.json')} autoPlay loop style={{ height: 400, width: 500 }}></Lottie>
        <Text style={{ fontFamily: "NotoSans-Italic", padding: 20, fontSize: 15, color:isDark?"#FFFFFF":"#000000" }}>Profile page the active User details can be displayed having the address, orders, saved cards,payments and other user related details.</Text>
      </View>
    </View>
  )
}

export default ProfileScreen