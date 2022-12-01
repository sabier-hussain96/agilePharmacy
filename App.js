import React from 'react'
import { createBottomTabNavigator, createStackNavigator } from '@react-navigation/stack';
import { header_Shown, screenNames } from './app/Constants/Constant';
import { NavigationContainer } from '@react-navigation/native';
import Home from './app/Screens/HomeScreen'
import SplashScreen from './app/Screens/SplashScreen';
import Profile from './app/Screens/ProfileScreen';
import Categories from './app/Screens/Categories';
import DashBoard from './app/Screens/DashBoard';
import SearchScreen from './app/Screens/SearchScreen';
import LocationScreen from './app/Screens/LocationScreen';
import HealthChkSub from './app/Screens/SubPages/HealthChkSub';
import CartScreen from './app/Screens/CartScreen';
import CartEmpty from './app/Screens/CartEmpty';
import CartItems from './app/Screens/CartItems';
import Payment from './app/Screens/Payment';
import CardPayment from './app/Components/CardPayAnime';
import UpiPayment from './app/Components/UpiPayAnime';
import NetBankingPay from './app/Components/NetBankPayAnime';
import WalletPay from './app/Components/walletPayAnime';






const Stack = createStackNavigator();
function App  () {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName={screenNames.Splash_Screen}>
      <Stack.Screen name={screenNames.Splash_Screen} component={SplashScreen} options={header_Shown}/>
      <Stack.Screen name={screenNames.DashBoard_Screen} component={DashBoard} options={header_Shown}/> 
      <Stack.Screen name={screenNames.Search_Screen} component={SearchScreen} options={header_Shown}/>
      <Stack.Screen name={screenNames.Location_Screen} component={LocationScreen} options={header_Shown}/>
      <Stack.Screen name={screenNames.Health_SubCat} component={HealthChkSub} options={header_Shown}/>
      <Stack.Screen name={screenNames.CART_Screen} component={CartScreen} options={header_Shown}/>
      <Stack.Screen name={screenNames.CART_Empty} component={CartEmpty} options={header_Shown}/>
      <Stack.Screen name={screenNames.CART_Items} component={CartItems} options={header_Shown}/>
      <Stack.Screen name={screenNames.Payment_gateways} component={Payment} options={header_Shown}/>
      <Stack.Screen name={screenNames.Card_payment} component={CardPayment} options={header_Shown}/>
      {/* <Stack.Screen name={screenNames.UPI_payment} component={UpiPayment} options={header_Shown}/>
      <Stack.Screen name={screenNames.NetBanking_payment} component={NetBankingPay} options={header_Shown}/>
      <Stack.Screen name={screenNames.Wallet_payment} component={WalletPay} options={header_Shown}/> */}
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
