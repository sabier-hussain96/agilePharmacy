import { View, Text,TouchableOpacity, useColorScheme} from 'react-native'
import Lottie from 'lottie-react-native'
import React from 'react'
import axios from 'axios'

const WishList = () => {

 
  // const getProducts = async()=>{
  //   console.log("hello")
  //   try {
  //     const response = await axios.get("https://dummyjson.com/products")
  //     console.log(response.data)
  //   } catch (error) {
  //     console.log(error)
  //   }
    
  
  // }
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark'

  return (
    <View style={{ flex: 1 ,backgroundColor:isDark? '#000000':"#E0F2F1"}}>
      <View style={{ justifyContent: "flex-start" }}>
        <Lottie source={require('../Global/WishList.json')} autoPlay loop style={{ height: 400, width: 500 }}></Lottie>
        <Text style={{ fontFamily: "NotoSans-Italic", padding: 20, fontSize: 15,color:isDark?"#FFFFFF":"#000000" }}>In a e-commerce website all the wishlisted items of an User can be displayed in this page, to reduce user's time to again list the things which a user likes.</Text>
        {/* <TouchableOpacity onPress={getProducts}>
          <Text>Get Productsss</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  )
}

export default WishList