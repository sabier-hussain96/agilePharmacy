import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Lottie from 'lottie-react-native'
import { screenNames } from '../Constants/Constant'

const CardPayAnime = () => {
const navigation = useNavigation()

    return (
        <View style={{ flex: 1, alignItems: 'center', margin: 'auto', backgroundColor: '#ADE4F7' }}>
            <Lottie source={require('../Global/cardPayment.json')} autoPlay loop style={{ height: 500, width: 500 }}></Lottie>
            <Text style={{ fontFamily: "NotoSans-ExtraBold", fontSize: 20 }}>Payment from your card is successful</Text>
            <View style={{marginTop:20,borderWidth:1,height:40,width:120,borderRadius:30,backgroundColor:"#10847E"}}>
                <TouchableOpacity onPress={()=>{
                    navigation.navigate(screenNames.DashBoard_Screen);
                }}><Text style={{fontFamily:"NotoSans-Bold",paddingStart:20,paddingTop:6,color:"#FFFFFF"}}>Home Page</Text></TouchableOpacity>
            </View>
        </View>
    )
}

export default CardPayAnime