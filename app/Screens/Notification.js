import { View, Text, ScrollView, useColorScheme } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'




const Notification = () => {

  const NotificationData = [
    {
      id: 1,
      Text: "Use code STAR25, and get 25% off on particular orders",
      Title: "Just One happy, healthy saver"

    },
    {
      id: 2,
      Text: "You are using STAR25 dicount to order, *T&C",
      Title: "Thousand of people around you..."
    },
    {
      id: 3,
      Text: "You are using STAR25 dicount to order, *T&C",
      Title: "Not everyone has all the 3"
    },
    {
      id: 4,
      Text: "Terms and conditions applied for the series",
      Title: "Full time Series "
    },
    {
      id: 5,
      Text: "You are using STAR25 dicount to order, *T&C",
      Title: "Not everyone has all the 3"
    },
    {
      id: 6,
      Text: "Use code STAR25, and get 25% off on particular orders",
      Title: "Just One happy, healthy saver"
    },
    {
      id: 7,
      Text: "Terms and conditions applied for the series",
      Title: "Full time Series "
    },
    {
      id: 8,
      Text: "Use code STAR25, and get 25% off on particular orders",
      Title: "Just One happy, healthy saver"
    }


  ]

  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark'
  return (
    <View style={{ flex: 1,backgroundColor:isDark? '#000000':"#E0F2F1" }}>
      <View style={{ height: 60, borderWidth: 1}}>
        <Text style={{ fontFamily: "NotoSans-Bold", fontSize: 17, padding: 15, color:isDark?"#FFFFFF": "green", textDecorationLine: "underline" }}>Notifications</Text>
      </View>
      <ScrollView>
        {/* <FlatList
        data={NotificationData}
        renderItem={({ item }) => (
          <View style={{ height: 60, width: "auto", borderRadius: 5, marginStart: 10, marginEnd: 10, marginTop: 20, borderColor: "EDF2F9 ", borderWidth: 0.5 }}>
            <View style={{ padding: 10 }}>
              <Text style={{ fontFamily: "NotoSans-Bold", fontSize: 17 }}>{item.Title}</Text>
              <Text style={{ fontFamily: "NotoSans-Regular", fontSize: 15 }}>{item.Text}</Text>
            </View>
          </View>


        )}
      /> */}

        {NotificationData.map((item) => {
          return (
            <View style={{ height: 70, width: "auto", borderRadius: 5, marginStart: 10, marginEnd: 10, marginTop: 20, borderColor:isDark?"#FFFFFF": "EDF2F9 ", borderWidth: 0.5 }}>
              <View style={{ padding: 10 }}>
                <Text style={{ fontFamily: "NotoSans-Bold", fontSize: 17,color:isDark?"#FFFFFF":"#000000" }}>{item.Title}</Text>
                <Text style={{ fontFamily: "NotoSans-Regular", fontSize: 15,color:isDark?"#FFFFFF":"#000000"}}>{item.Text}</Text>
              </View>
            </View>

          );
        })}

      </ScrollView>
      
    </View>
  )
}

export default Notification