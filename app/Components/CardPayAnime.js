import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Lottie from 'lottie-react-native'

const CardPayAnime = () => {
// const navigation = useNavigation
//     useEffect(() => {
//         setTimeout( () => {
//               navigation.replace(screenNames.DashBoard_Screen);
         
//         }, 2500)

// },[])
    return (
        <View style={{ flex: 1, alignItems: 'center', margin: 'auto', backgroundColor: '#ADE4F7' }}>
            <Lottie source={require('../Global/cardPayment.json')} autoPlay loop style={{ height: 500, width: 500 }}></Lottie>
            <Text style={{ fontFamily: "NotoSans-ExtraBold", fontSize: 20 }}>Payment from your card is successful</Text>
        </View>
    )
}

export default CardPayAnime