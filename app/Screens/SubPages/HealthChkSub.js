import { View, Text, TouchableOpacity, ScrollView, FlatList, Image, useColorScheme } from 'react-native'
import React, { useState, useEffect } from 'react'
import { AppStyleSheet } from '../../Global/global'
import PackIcon from '../../../assets/Icons/Pack'
import BackIcon from '../../../assets/Icons/BackButton'
import { useNavigation, useRoute } from '@react-navigation/native'
import { screenNames } from '../../Constants/Constant'
import { CartIcon } from '../../../assets/Icons/CartIcon'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'





const HealthChkSub = ({ route }) => {
  const navigation = useNavigation();

  useEffect(() => {
    UpdatedFunction()
    getData()
  }, [])


  const UpdatedFunction = async () => {
    const values = await AsyncStorage.getItem('cartItem');
    console.log("Updated function cart item length ===== " + values.length)
    setValue(JSON.parse(values))
    const newValue = JSON.parse(values)
    setCartarray(newValue)
    Setrefresh(new Date())
    if (newValue.length > 0) {
      // console.log("L1")
      setCount(newValue.length)
    }

  }

  const [subCat, setSubCat] = useState([])
  const getData = async () => {
    try {

      const response = await axios.get("https://dummyjson.com/products")
      const jsonArr = (response.data.products)
      const dummy = [];
      for (var i = 0; i < jsonArr.length; i++) {
        if (jsonArr[i].brand === route?.params.brand) {
          dummy.push(jsonArr[i])
        }
      }
      setSubCat(dummy)
    } catch (error) {
      console.log(error)
    }

  }

  const [cartArray, setCartarray] = useState([])
  const [count, setCount] = useState(0)
  const [refresh, Setrefresh] = useState(new Date())
  const [disable, setDisable] = useState()
  const [value, setValue] = useState([])

  const addCart = async (fid) => {
    // console.log(fid)
    setDisable(fid)
    const addcartItems = subCat.find(item => item.id === fid)
    // console.log(addcartItems)
    if (value.length === 0) {
      console.log("Deleted array length is zero still")
      const request = {
        Text: addcartItems.title,
        id: addcartItems.id,
        description: addcartItems.description,
        discount: addcartItems.discountPercentage,
        price: addcartItems.price,
        brand: addcartItems.brand
      }
      cartArray.push(request)
      await AsyncStorage.setItem('cartItem', JSON.stringify(cartArray))
    } else {
      console.log("Deleted array length not zero")
      const request = {
        Text: addcartItems.title,
        id: addcartItems.id,
        description: addcartItems.description,
        discount: addcartItems.discountPercentage,
        price: addcartItems.price,
        brand: addcartItems.brand
      }
      // console.log(request)
      var dummyArray = [];
      dummyArray = [...cartArray, request]
      // console.log("this is dummyArrat" + JSON.stringify(dummyArray))
      setCartarray(dummyArray)
      await AsyncStorage.setItem('cartItem', JSON.stringify(dummyArray))
    }
    const values = await AsyncStorage.getItem('cartItem');
    const count = JSON.parse(values).length
    setCount(count)
  }

  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark'

  return (
    <View style={{backgroundColor:isDark? '#000000':"#E0F2F1",flex:1}}>
      <View style={AppStyleSheet.header}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={{ padding: 10 }} onPress={() => {
            navigation.replace(screenNames.DashBoard_Screen)
          }}>
            <BackIcon stroke={isDark?"#FFFFFF":"#000000"}  />
          </TouchableOpacity>
          <Text style={[AppStyleSheet.headerText, { color: isDark ? '#FFFFFF' : '#000000' }]}>{route?.params.brand}</Text>
        </View>

        <View style={{ flexDirection: "row", marginEnd: 15, marginTop: 5 }}>
          <View >
            <TouchableOpacity style={{ padding: 10 }} onPress={() => {
              navigation.navigate(screenNames.CART_Items, {
                brand: route?.params.brand,
                cart: cartArray
              })
            }} >
              <CartIcon stroke={isDark?"#FFFFFF":"#000000"}  />
            </TouchableOpacity>
          </View>
          <View style={{ height: 20, width: 20, borderRadius: 30, backgroundColor: "red" }} key={refresh}>
            <Text style={{ color: "#FFFFFF", textAlign: "center" }}>{count}</Text>
          </View>

        </View>

      </View>
      <ScrollView>
        {/* <View style={AppStyleSheet.subCatHead}>
        <TouchableOpacity style={AppStyleSheet.subCatfirstBtn}><Text style={AppStyleSheet.subCatfirstText}>All</Text></TouchableOpacity>
        <TouchableOpacity style={AppStyleSheet.subCatHeadBtn}>
          <Text style={AppStyleSheet.subCatBtnText}>Packages</Text></TouchableOpacity>
        <TouchableOpacity style={AppStyleSheet.subCatHeadBtn}><Text style={AppStyleSheet.subCatBtnText}>Lab Tests</Text></TouchableOpacity>
        </View> */}
        <View style={{ marginBottom: 70 }}>
          <Text style={[AppStyleSheet.subCatPagesHeading,{color:isDark? '#FFFFFF':"#000000"}]}>Recommended Packages</Text>
          <FlatList
            horizontal
            data={subCat}
            bounces={false}
            initialScrollIndex={0}
            pagingEnabled={true}
            numColumns={Math.floor(subCat.length / 3)}
            key={Math.floor(subCat.length / 3)}
            renderItem={({ item, index }) => (
              <View style={{ justifyContent: "space-between", margin: 10 }} key={refresh}>

                <View style={{ height: 250, width: 175, borderRadius: 3, backgroundColor: "#DFEAFF", flex: 1, flexDirection: "column", padding: 10 }}>

                  <View style={{ flex: 1 }}>
                    <Text style={AppStyleSheet.subcatText}>{item.title}</Text>
                    <View style={{ paddingTop: 10, borderColor: "#000000" }}>
                      <Image source={{ uri: item.images[0] }} style={{ width: 150, height: 100, resizeMode: "contain" }} />
                    </View>
                  </View>


                  {/* Offer Tag, Price, and Book button View */}
                  <View style={{ flex: 2, justifyContent: "flex-end" }}>
                    <View style={{ flexDirection: "row" }}>
                      <View style={[AppStyleSheet.tagView]}>
                        <Text style={{ color: "#FFFFFF", fontFamily: "NotoSans-Bold", textAlign: "center" }}>{item.discountPercentage} %</Text>
                      </View>
                      <View style={{ marginTop: -1 }}>
                        <Image source={require('../../../assets/Images/zigzap.png')} />
                      </View>
                    </View>

                    <View style={{ flexDirection: "row", marginTop: 5 }}>
                      <Text style={AppStyleSheet.subcatPrice}>₹{item.price}</Text>
                      {/* <Text style={{ textDecorationLine: "line-through", paddingStart: 10, paddingTop: 4 }}>{item.price}</Text> */}
                    </View>


                    <View style={{ marginTop: 5 }} key={refresh}>
                      <TouchableOpacity style={{ borderWidth: 1, height: 25, width: 60, borderRadius: 5, borderColor: "#10847E", backgroundColor: item.id === disable ? "#E0E0E0" : "#FFFFFF" }}
                        onPress={() => addCart(item.id, index)} disabled={item.id === disable && true} >
                        <Text style={{ textAlign: "center", padding: 2, color: item.id === disable ? "#3d3d3d" : "#10847E", fontFamily: "NotoSans=ExtraBold", fontSize: 13 }}>Book</Text>
                      </TouchableOpacity>
                    </View>


                  </View>
                </View>
              </View>



            )}
          />
        </View>
      </ScrollView>
    </View>

  )
}

export default HealthChkSub