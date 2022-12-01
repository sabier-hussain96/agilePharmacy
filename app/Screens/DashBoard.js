import React, { useRef } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Animated, Dimensions, Platform } from 'react-native'
import { header_Shown, HomeOptions, listOptions, OrderOptions, ProfileOptions, screenNames } from '../Constants/Constant';
import CartItem from './CartItems'
import Profile from './ProfileScreen';
import { AppStyleSheet } from '../Global/global';
import Home from './HomeScreen';
import HomeIcon from '../../assets/Icons/HomeIcon'
import WishList from './WishList';

const Tab = createBottomTabNavigator();

function DashBoard() {
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  // Width
  function getWidth() {
    let width = Dimensions.get("window").width

    // Horizontal Padding = 20...
    width = width - 80

    // Total four Tabs...
    return width / 4
  }
  return (
    <>

      <Tab.Navigator screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'white',
          position: 'absolute',
          bottom: 0,
          // Max Height...
          height: Platform.OS === 'android' ? 70 : 60,

          // Shadow...
          shadowColor: "#FFFFFF",
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
          pressColor: "#26A69A",
          elevation: 5,
          paddingHorizontal: 20,
        },
        tabBarHideOnKeyboard: true,
      }}>
        <Tab.Screen name={screenNames.Home_Screen} component={Home} options={HomeOptions} listeners={() => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: 0,
              useNativeDriver: true
            }).start();
          }
        })} />
        <Tab.Screen name={screenNames.CART_Items} component={CartItem} options={OrderOptions} style={AppStyleSheet.tabText} listeners={() => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 1.15,
              useNativeDriver: true
            }).start();
          }
        })} />
        <Tab.Screen name={screenNames.Profile_Screen} component={Profile} options={ProfileOptions} listeners={() => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 2.3,
              useNativeDriver: true
            }).start();
          }
        })} />
        <Tab.Screen name={screenNames.WISHLIST} component={WishList} options={listOptions}
          listeners={() => ({
            // Onpress Update....
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 3.4,
                useNativeDriver: true
              }).start();
            }
          })} />
      </Tab.Navigator>

{/* Animated View  */}
      <Animated.View style={{
        width: getWidth() - 30,
        height: 4,
        borderBottomEndRadius: 50,
        borderBottomLeftRadius: 50,
        backgroundColor: '#26A69A',
        position: 'absolute',
        bottom: 67,
        
        // Horizontal Padding = 20...
        left: 38,
        borderRadius: 20,
        transform: [
          { translateX: tabOffsetValue }
        ]
      }}>

      </Animated.View>
    </>


  )
}


export default DashBoard