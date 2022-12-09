import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useRef } from 'react';
import { Animated, Dimensions, Platform, useColorScheme, TouchableNativeFeedback, View, Text } from 'react-native';
import { HomeIcon } from '../../assets/Icons/HomeIcon';
import NotificationIcon from '../../assets/Icons/NotificationIcon';
import { ProfileIcon } from '../../assets/Icons/ProfileIcon';
import { WishListIcon } from '../../assets/Icons/WishListIcon';
import { HomeOptions, listOptions, OrderOptions, ProfileOptions, screenNames } from '../Constants/Constant';
import { AppStyleSheet } from '../Global/global';
// import CartItem from './CartItems';
import Home from './HomeScreen';
import Notification from './Notification';
import Profile from './ProfileScreen';
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

  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark'
  const buttonNativeFeedback = ({ children, style, ...props }) => (
    <TouchableNativeFeedback
      {...props}
      background={TouchableNativeFeedback.Ripple('#26A69A', true)}>
      <View style={style}>{children}</View>
    </TouchableNativeFeedback>
  );

  return (
    <>

      <Tab.Navigator screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: isDark ? "#000000" : "#FFFFFF",
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
        <Tab.Screen name={screenNames.Home_Screen} component={Home} options={{
          headerShown: false,
          unmountOnBlur: true,
          tabBarButton: buttonNativeFeedback,
          tabBarIcon: ({ focused }) => (
            <View style={{  // centring Tab Button...
              justifyContent: "center", alignItems: "center", height: 40
            }}>
              <HomeIcon color={focused ? "#26A69A" : isDark ? "#FFFFFF" : "#000000"} />
              <Text style={{ color: focused ? "#26A69A" : isDark ? "#FFFFFF" : "#000000", marginTop: 5, fontSize: 9, fontFamily: "NotoSans-Regular" }}>HOME</Text>
            </View>
          ),
        }} listeners={() => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: 0,
              useNativeDriver: true
            }).start();
          }
        })} />
        <Tab.Screen name={screenNames.Notification} component={Notification} options={{ headerShown: false,
    unmountOnBlur: true,
    tabBarButton: buttonNativeFeedback,
    tabBarIcon: ({ focused }) => (
        <View style={{  // centring Tab Button...
            justifyContent: "center", alignItems: "center", height: 40
        }}>
            <NotificationIcon stroke={focused ? "#26A69A" : isDark ? "#FFFFFF" : "#000000"} />
            <Text style={{ color: focused ? "#26A69A" : isDark ? "#FFFFFF" : "#000000", marginTop: 5, fontSize: 9, fontFamily: "NotoSans-Regular" }}>Notification</Text>
        </View>
    ),}} style={AppStyleSheet.tabText} listeners={() => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 1.15,
              useNativeDriver: true
            }).start();
          }
        })} />
        <Tab.Screen name={screenNames.Profile_Screen} component={Profile} options={{headerShown: false,
    unmountOnBlur: true,
    tabBarButton: buttonNativeFeedback,
    tabBarIcon: ({ focused }) => (
        <View style={{  // centring Tab Button...
            justifyContent: "center", alignItems: "center", height: 40
        }}>
            <ProfileIcon stroke={focused ? "#26A69A" : isDark ? "#FFFFFF" : "#000000"} />
            <Text style={{ color: focused ? "#26A69A" : isDark ? "#FFFFFF" : "#000000", marginTop: 5, fontSize: 9, fontFamily: "NotoSans-Regular" }}>PROFILE</Text>
        </View>
    ),}} listeners={() => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 2.3,
              useNativeDriver: true
            }).start();
          }
        })} />
        <Tab.Screen name={screenNames.WISHLIST} component={WishList} options={{headerShown: false,
    unmountOnBlur: true,
    tabBarButton: buttonNativeFeedback,
    tabBarIcon: ({ focused }) => (
        <View style={{  // centring Tab Button...
            justifyContent: "center", alignItems: "center", height: 40
        }}>
            <WishListIcon stroke={focused ? "#26A69A" : isDark ? "#FFFFFF" : "#000000" } />
            <Text style={{ color: focused ? "#26A69A" : isDark ? "#FFFFFF" : "#000000", marginTop: 5, fontSize: 9, fontFamily: "NotoSans-Regular" }}>MyList</Text>
        </View>
    ),}}
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