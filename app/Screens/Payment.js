import { View, Text, TouchableOpacity } from 'react-native'
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
    return (
        <View style={{ flex: 1 }}>

            <View style={{ borderWidth: 1, borderRadius: 30, marginTop: 30, marginStart: 10, marginEnd: 10 }}>
                <Text style={{ textAlign: "center", padding: 20 }}>PAYMENT OPTIONS </Text>
                {/* cards option */}
                <View style={{ padding: 10 }}>
                    <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between" }} onPress={() => {
                        navigation.navigate(screenNames.Card_payment)
                    }}>
                        <View style={{ paddingTop: 10, flexDirection: "row" }}>
                            <CardPayment stroke="#000000" style={{ marginTop: 5, marginRight: 30 }} />
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ fontFamily: "NotoSans-Regular" }}>Cards (credit/debit)</Text>
                                <Text>Pay using any credit or debit card</Text>
                            </View>

                        </View>
                        <View style={{ marginTop: 20, marginRight: 10 }}>
                            <ForwardIcon stroke="black" />
                        </View>
                    </TouchableOpacity>

                </View>
                {/* UPI option */}
                <View style={{ padding: 10 }}>
                    <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ paddingTop: 10, flexDirection: "row" }}>
                            <UPI stroke="black" style={{ marginTop: 5, marginRight: 30 }} />
                            <View style={{ flexDirection: 'column' }}>
                                <Text>UPI</Text>
                                <Text>Paytm, or PhonePe UPI App</Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 20, marginRight: 10 }}>
                            <ForwardIcon stroke="black" />
                        </View>
                    </TouchableOpacity>
                </View>
                {/* Net Banking */}
                <View style={{ padding: 10 }}>
                    <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between" }} >
                        <View style={{ paddingTop: 10, flexDirection: "row" }}>
                            <GlobeIcon stroke="black" style={{ marginTop: 5, marginRight: 30 }} />
                            <View style={{ flexDirection: "column" }}>
                                <Text>Net Banking</Text>
                                <Text>Pay using any of 40+ supported banks</Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 20, marginRight: 10 }}>
                            <ForwardIcon stroke="black" />
                        </View>
                    </TouchableOpacity>
                </View>
                {/* Wallets */}
                <View style={{ padding: 10 }}>
                    <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between" }} >
                        <View style={{ paddingTop: 10, flexDirection: "row" }}>
                            <WalletIcon stroke="black" style={{ marginTop: 5, marginRight: 30 }} />

                            <View style={{ flexDirection: "column" }}>
                                <Text>Wallets</Text>
                                <Text>Paytm</Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 20, marginRight: 10 }}>
                            <ForwardIcon stroke="black" />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Payment