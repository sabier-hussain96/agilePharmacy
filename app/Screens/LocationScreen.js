import { View, Text,PermissionsAndroid } from 'react-native'
import React,{useEffect, useState} from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { CancelIcon } from '../../assets/Icons/CancelIcon'
import { AppStyleSheet } from '../Global/global'
import { LocationIcon } from '../../assets/Icons/LocationIcon'
import { AddIcon } from '../../assets/Icons/AddIcon'
import MapView from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import { useNavigation } from '@react-navigation/native'
import { screenNames } from '../Constants/Constant'

const LocationScreen = () => {
  const navigation = useNavigation();
  const [location,setLocation] = useState("")
  const getLocation = () => {
    const result = requestLocationPermission();
    result.then(res => {
      // console.log('res is:', res);
      if (res) {
        Geolocation.getCurrentPosition(
          position => {
            // console.log(position);
            setLocation(position);
          },
          error => {
            // See error code charts below.
            // console.log(error.code, error.message);
            setLocation(false);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      }
    });
    // console.log(location);
  };

    const requestLocationPermission = async () => {
   
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Geolocation Permission',
              message: 'Can we access your location?',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
          );
          console.log("Hello")
          console.log('granted', granted);
          console.log("Hello2")
          if (granted === 'granted') {
            console.log('You can use Geolocation');
            return true;
          } else {
            console.log("Hello error")
            console.log('You cannot use Geolocation');
            return false;
          }
        } catch (err) {
          return false;
        }
    }
    
    return (


        <View style={{ flex: 1, margin: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                <View style={AppStyleSheet.cancelText}>
                    <Text style={{ fontSize: 28, fontFamily: "NotoSans-ExtraBold" }}>Choose your Location</Text>
                </View>
                <View style={AppStyleSheet.cancelIcon}>
                    <TouchableOpacity onPress={()=>{
                      navigation.navigate(screenNames.Home_Screen)
                    }}>
                        <CancelIcon stroke="gray" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ marginTop: -50 }}>
                <View style={{ flexDirection: "row" }}>
                    <TextInput style={AppStyleSheet.locSearchTextInp} placeholder="Enter PIN Code"></TextInput>
                    <TouchableOpacity style={{ backgroundColor: "#10847E", height: 50, width: 100, borderTopRightRadius: 8, borderBottomRightRadius: 8 }}><Text style={{ textAlign: "center", paddingTop: 13, color: "#FFFFFF", fontSize: 17 }}>Check</Text></TouchableOpacity>
                </View>
            </View>

            <View style={{ marginTop: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <LocationIcon stroke="#10847E" />
                    <TouchableOpacity style={{ marginStart: 10 }} onPress={getLocation}>
                        <Text style={{ marginStart: 12, color: "#10847E", fontSize: 15, fontFamily: "NotoSans-Bold", fontWeight: "bold" }}>Click to get Current Location</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
            {/* Intorducing maps */}
            <View style={{ marginTop: 20 ,alignItems:"center"}}>
            <Text>Your current Location</Text>
              
                    <Text>Latitude: {location ? location.coords.latitude : null}</Text>
                    <Text>Longitude: {location ? location.coords.longitude : null}</Text>
                
            </View>

            <View style={AppStyleSheet.savedAddress}>
                <View>
                  {location ?  
                  <View style={AppStyleSheet.addressContainer}>
                    <Text style={{fontSize:12,textAlign:'center',fontFamily:"NotoSans-Bold"}}>Latitude: {location ? location.coords.latitude : null}</Text>
                    <Text style={{fontSize:11.5,textAlign:'center',fontFamily:"NotoSans-Bold"}}>Longitude: {location ? location.coords.longitude : null}</Text>
                    </View>
                    :
                    <>
                     <Text style={AppStyleSheet.saveAddText}>Saved Addresses</Text>
                    <View style={AppStyleSheet.addressContainer}>
                        <View style={AppStyleSheet.addrsIcon}>
                            <AddIcon stroke="#FFFFFF" />
                        </View>
                        <View style={AppStyleSheet.addrsIcon}>
                            <Text style={AppStyleSheet.adrsContText}>Add New Address</Text>
                        </View>

                    </View>
                    
                    </>}
                   
                </View>
            </View>

            


        </View>
    )
}

export default LocationScreen