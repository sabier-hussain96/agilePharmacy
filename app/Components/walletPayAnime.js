import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import Lottie from 'lottie-react-native'
import { screenNames } from '../Constants/Constant'
import { useNavigation } from '@react-navigation/native'

const WalletPay = () => {
    const navigation = useNavigation()
  return (
    <View style={{ flex: 1, alignItems: 'center', margin: 'auto', backgroundColor: '#ADE4F7' }}>
            <Lottie source={require('../Global/walletSuccess.json')} autoPlay loop style={{ height: 500, width: 500 }}></Lottie>
            <Text style={{ fontFamily: "NotoSans-ExtraBold", fontSize: 20 }}>e-Wallet Payment Successful!!</Text>
            <View style={{marginTop:20,borderWidth:1,height:40,width:120,borderRadius:30,backgroundColor:"#10847E"}}>
                <TouchableOpacity onPress={()=>{
                    navigation.navigate(screenNames.DashBoard_Screen);
                }}><Text style={{fontFamily:"NotoSans-Bold",paddingStart:20,paddingTop:6,color:"#FFFFFF"}}>Home Page</Text></TouchableOpacity>
            </View>
        </View>
  )
}

export default WalletPay