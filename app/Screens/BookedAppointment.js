import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import BackIcon from '../../assets/Icons/BackButton'
import { useNavigation } from '@react-navigation/native'
import { screenNames } from '../Constants/Constant'
import { SearchIcon } from '../../assets/Icons/SearchIcon'
import { Trashicon } from '../../assets/Icons/TrashIcon'
import CartEmpty from '../Screens/CartEmpty'
import AsyncStorage from '@react-native-async-storage/async-storage'



const CartItems = () => {

    const [Cartarray, setCartarray] = useState([])
    useEffect(() => {

        const fetch = async () => {
            const data = await AsyncStorage.getItem('cartItem');
            if (data !== null) {
                const values = JSON.parse(data)
                setCartarray(values);
                console.log(values)
            }

        }
        fetch();

    }, [])

    const navigation = useNavigation();

    const category = () => {
        navigation.navigate(screenNames.Home_Screen)
    }



    return (
        <View style={{ flex: 1 }}>
            {/* header for Cart */}
            <View>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity style={{ padding: 10 }} onPress={async() => {
                        navigation.replace(screenNames.Sub_Category)
                        const data = await AsyncStorage.getItem('cartItem');
                    }}>
                        <BackIcon stroke="black" />
                    </TouchableOpacity>
                    <Text style={{ fontFamily: "NotoSans-Bold", fontSize: 25 }}>CART</Text>
                    {/* <SearchIcon stroke="#000000" /> */}

                </View>
            </View>
            {/* Body of the cart */}
            <ScrollView style={{ paddingTop: 15 }}>
                {/* Advertisement part */}
                <View style={{ marginStart: 10, marginEnd: 10 }}>
                    <Image source={require('../../assets/Images/amazon.jpg')} style={{ height: 70, width: "auto", resizeMode: "contain" }}></Image>
                </View>
                <View style={{ flexDirection: "row", marginTop: 20 }}>
                    <Text style={{ paddingStart: 10, margin: 10 }}>All tests fulfilled by</Text>
                    <View>
                        <Image source={require('../../assets/Images/pharmeasy.png')} style={{ resizeMode: "cover", height: 50, width: 130, }}></Image>
                    </View>
                </View>

                {/* cart items part */}
                {Cartarray.length !== 0 ?
                    <>
                        {Cartarray.map((item) => (
                            <View style={{ height: 130, width: "auto", borderRadius: 5, marginStart: 10, marginEnd: 10, marginTop: 20, borderColor: "EDF2F9 ", borderWidth: 0.5 }}>
                                <View style={{ flexDirection: 'row', padding: 10 }}>
                                    <View>
                                        <Image source={require('../../assets/Images/careLinehand.png')} style={{ height: 30, width: 30, resizeMode: "contain" }} />
                                    </View>
                                    <View style={{ paddingStart: 10, paddingEnd: 10, width: 270 }}><Text style={{ fontSize: 16 }}>{item.Text}</Text></View>
                                    {/* <View style={{ paddingStart: 25 }}><TouchableOpacity onPress={() => deleteCart(item.id)}><Trashicon stroke="gray" /></TouchableOpacity></View> */}
                                </View>
                                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                    <View>
                                        <View style={{ flexDirection: "row", paddingStart: 50 }}>
                                            <Text style={{ textDecorationLine: 'line-through' }}>{item.orgPrice}</Text>
                                            <Text style={{ paddingStart: 10, color: "red" }}>{item.tag}</Text>
                                        </View>
                                        <View style={{ paddingStart: 50, paddingTop: 10 }}>
                                            <Text style={{ fontSize: 15, fontWeight: "800" }}>{item.price}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                        ))}
                    </>
                    : <>
                        <View style={{ flex: 1 }}>
                            <ScrollView contentContainerStyle={{ flex: 1, justifyContent: "center", backgroundColor: "#F9F9F8" }}>
                                <Image source={require('../../assets/Images/EmptyCart.png')}></Image>
                            </ScrollView>
                        </View>

                    </>
                }
            </ScrollView>
            {/* <Text style={{ padding: 10, backgroundColor: "yellow" }}>Cashback will be added to wallet in 24 hrs of successful transaction</Text> */}
            <View style={{ borderWidth: 0.3, borderColor: "gray", height: 70, }}>
                <View style={{ flexDirection: 'row', justifyContent: "center" }}>
                    {/* <View style={{padding:20}}><Text>{item.price}</Text></View> */}
                    <View style={{ height: 50, width: 250, backgroundColor: "#10847E", borderRadius: 10, margin: 10 }}>
                        <TouchableOpacity><Text style={{ textAlign: "center", color: "#FFFFFF", paddingTop: 10, fontFamily: "NotoSans-Bold", fontSize: 15 }} onPress={() => {
                            navigation.navigate(screenNames.Payment_gateways)
                        }}>Proceed to payment</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CartItems