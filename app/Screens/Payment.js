import { View, Text, TouchableOpacity, useColorScheme } from 'react-native'
import React from 'react'
import CardPayment from '../../assets/Icons/CardPayment'
import ForwardIcon from '../../assets/Icons/ForwardIcon'
import UPI from '../../assets/Icons/Upi'
import GlobeIcon from '../../assets/Icons/GlobeIcon'
import WalletIcon from '../../assets/Icons/WalletIcon'
import { useNavigation } from '@react-navigation/native'
import { screenNames } from '../Constants/Constant'

const Payment = () => {
    const navigation = useNavigation();
    const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark'

    return (
        <View style={{ flex: 1,backgroundColor:isDark? '#000000':"#E0F2F1" }}>

            <View style={{ borderWidth: 1, borderRadius: 30, marginTop: 30, marginStart: 10, marginEnd: 10,borderColor:isDark?"#FFFFFF":"#000000" }}>
                <Text style={{ textAlign: "center", padding: 20,color:isDark?'#FFFFFF':'#000000' }}>PAYMENT OPTIONS </Text>
                {/* cards option */}
                <View style={{ padding: 10 }}>
                    <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between" }} onPress={() => {
                        navigation.navigate(screenNames.Card_payment)
                    }}>
                        <View style={{ paddingTop: 10, flexDirection: "row" }}>
                            <CardPayment stroke={isDark?"#FFFFFF":"#000000"}  style={{ marginTop: 5, marginRight: 30 }} />
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ fontFamily: "NotoSans-Regular",color:isDark?'#FFFFFF':'#000000'  }}>Cards (credit/debit)</Text>
                                <Text style={{ fontFamily: "NotoSans-Regular",color:isDark?'#FFFFFF':'#000000'  }}>Pay using any credit or debit card</Text>
                            </View>

                        </View>
                        <View style={{ marginTop: 20, marginRight: 10 }}>
                            <ForwardIcon stroke={isDark?"#FFFFFF":"#000000"}  />
                        </View>
                    </TouchableOpacity>

                </View>
                {/* UPI option */}
                <View style={{ padding: 10 }}>
                    <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between" }}  onPress={() => {
                        navigation.navigate(screenNames.UPI_payment)
                    }}>
                        <View style={{ paddingTop: 10, flexDirection: "row" }}>
                            <UPI stroke={isDark?"#FFFFFF":"#000000"}  style={{ marginTop: 5, marginRight: 30 }} />
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ fontFamily: "NotoSans-Regular",color:isDark?'#FFFFFF':'#000000'  }}>UPI</Text>
                                <Text style={{ fontFamily: "NotoSans-Regular",color:isDark?'#FFFFFF':'#000000'  }}>Paytm, or PhonePe UPI App</Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 20, marginRight: 10 }}>
                            <ForwardIcon stroke={isDark?"#FFFFFF":"#000000"}  />
                        </View>
                    </TouchableOpacity>
                </View>
                {/* Net Banking */}
                <View style={{ padding: 10 }}>
                    <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between" }} onPress={() => {
                        navigation.navigate(screenNames.NetBanking_payment)
                    }}>
                        <View style={{ paddingTop: 10, flexDirection: "row" }}>
                            <GlobeIcon stroke={isDark?"#FFFFFF":"#000000"}  style={{ marginTop: 5, marginRight: 30 }} />
                            <View style={{ flexDirection: "column" }}>
                                <Text style={{ fontFamily: "NotoSans-Regular",color:isDark?'#FFFFFF':'#000000'}}>Net Banking</Text>
                                <Text style={{ fontFamily: "NotoSans-Regular",color:isDark?'#FFFFFF':'#000000'  }}>Pay using any of 40+ supported banks</Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 20, marginRight: 10 }}>
                            <ForwardIcon stroke={isDark?"#FFFFFF":"#000000"}  />
                        </View>
                    </TouchableOpacity>
                </View>
                {/* Wallets */}
                <View style={{ padding: 10 }}>
                    <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between" }} onPress={() => {
                        navigation.navigate(screenNames.Wallet_payment)
                    }}>
                        <View style={{ paddingTop: 10, flexDirection: "row" }}>
                            <WalletIcon stroke={isDark?"#FFFFFF":"#000000"}  style={{ marginTop: 5, marginRight: 30 }} />

                            <View style={{ flexDirection: "column" }}>
                                <Text style={{ fontFamily: "NotoSans-Regular",color:isDark?'#FFFFFF':'#000000'  }}>Wallets</Text>
                                <Text style={{ fontFamily: "NotoSans-Regular",color:isDark?'#FFFFFF':'#000000'  }}>Paytm</Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 20, marginRight: 10 }}>
                            <ForwardIcon stroke={isDark?"#FFFFFF":"#000000"} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Payment