import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React,{useEffect} from 'react'
import Lottie from 'lottie-react-native'
import { useNavigation } from '@react-navigation/native'
import { screenNames } from '../Constants/Constant'


const CartEmpty = ({route}) => {
     useEffect(() => {
       console.log(route.params)
     
      
     }, [])
     
    const navigation= useNavigation()
    const category = () =>{
        navigation.navigate(screenNames.Home_Screen)
    }
  return (
    <View style={{flex:1}}>
        <ScrollView contentContainerStyle={{flex:1,justifyContent:"center",backgroundColor:"#F9F9F8"}}>
        <Image source={require('../../assets/Images/EmptyCart.png')}></Image>
        </ScrollView>
    </View>
  )
}

export default CartEmpty