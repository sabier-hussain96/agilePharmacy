import { View, Text } from 'react-native'
import React, {useEffect} from 'react'
import Lottie from 'lottie-react-native'
import { useNavigation } from '@react-navigation/native'
import { screenNames } from '../Constants/Constant'


const SplashScreen = () => {

const navigation = useNavigation();
    useEffect(() => {
            setTimeout( () => {
                  navigation.replace(screenNames.DashBoard_Screen);
             
            }, 2500)

    },[])
    

  return (
    <View style={{flex:1, alignItems:'center',margin :'auto',backgroundColor:'#ADE4F7'}}>
      <Lottie source={require('../Global/pharmacy.json')} autoPlay loop style={{ height: 500, width: 500 }}></Lottie>
      <Text style={{fontFamily:"NotoSans-ExtraBold",fontSize:25}}>AgilePharmacy</Text>
      <Text style={{fontFamily:"NotoSans-Regular",fontSize:25,color:'orange'}}>Made in India.</Text>
    </View>
  )
}

export default SplashScreen