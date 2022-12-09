import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { header_Shown, screenNames } from './app/Constants/Constant';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './app/Screens/SplashScreen';
import DashBoard from './app/Screens/DashBoard';
import SearchScreen from './app/Screens/SearchScreen';
import LocationScreen from './app/Screens/LocationScreen';
import HealthChkSub from './app/Screens/SubPages/HealthChkSub';
import CartEmpty from './app/Screens/CartEmpty';
import CartItems from './app/Screens/CartItems';
import Payment from './app/Screens/Payment';
import CardPayment from './app/Components/CardPayAnime';
import UpiPayment from './app/Components/UpiPayAnime';
import NetBankingPay from './app/Components/NetBankPayAnime';
import WalletPay from './app/Components/walletPayAnime';
import SubCategory from './app/Screens/SubCategory';
import BookedAppointment from './app/Screens/BookedAppointment';
import Notification from './app/Screens/Notification';
import { Appearance } from 'react-native';







const Stack = createStackNavigator();
const colorScheme = Appearance.getColorScheme();


function App  () {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName={screenNames.Splash_Screen}>
      <Stack.Screen name={screenNames.Splash_Screen} component={SplashScreen} options={header_Shown}/>
      <Stack.Screen name={screenNames.DashBoard_Screen} component={DashBoard} options={header_Shown}/> 
      <Stack.Screen name={screenNames.Search_Screen} component={SearchScreen} options={header_Shown}/>
      <Stack.Screen name={screenNames.Location_Screen} component={LocationScreen} options={header_Shown}/>
      <Stack.Screen name={screenNames.Health_SubCat} component={HealthChkSub} options={header_Shown}/>
      <Stack.Screen name={screenNames.Sub_Category} component={SubCategory} options={header_Shown}/>
      <Stack.Screen name={screenNames.CART_Empty} component={CartEmpty} options={header_Shown}/>
      <Stack.Screen name={screenNames.CART_Items} component={CartItems} options={header_Shown}/>
      <Stack.Screen name={screenNames.Payment_gateways} component={Payment} options={header_Shown}/>
      <Stack.Screen name={screenNames.Card_payment} component={CardPayment} options={header_Shown}/>
      <Stack.Screen name={screenNames.UPI_payment} component={UpiPayment} options={header_Shown}/>
      <Stack.Screen name={screenNames.NetBanking_payment} component={NetBankingPay} options={header_Shown}/>
      <Stack.Screen name={screenNames.Wallet_payment} component={WalletPay} options={header_Shown}/>
      <Stack.Screen name={screenNames.Booked_Appointment} component={BookedAppointment} options={header_Shown}/>
      <Stack.Screen name={screenNames.Notification} component={Notification} options={header_Shown}/>
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
