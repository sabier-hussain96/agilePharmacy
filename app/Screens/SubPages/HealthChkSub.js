import { View, Text, TouchableOpacity, ScrollView, FlatList, Image } from 'react-native'
import React, { useState , useEffect} from 'react'
import { AppStyleSheet } from '../../Global/global'
import PackIcon from '../../../assets/Icons/Pack'
import BackIcon from '../../../assets/Icons/BackButton'
import { useNavigation } from '@react-navigation/native'
import { screenNames } from '../../Constants/Constant'
import { CartIcon } from '../../../assets/Icons/CartIcon'
import AsyncStorage from '@react-native-async-storage/async-storage'



const HealthChkSub = ({route}) => {
  const navigation = useNavigation();
 
 
 
   useEffect(() => {
    UpdatedFunction()
   }, [cartArray])
   

   const UpdatedFunction = async() =>{
     
      const values = await AsyncStorage.getItem('Updatedarray');
      console.log("CartItem......................."+values)
      setValue(JSON.parse(values))
      const newValue = JSON.parse(values)
       setCartarray(newValue)
       Setrefresh(new Date())
       console.log("This is the updated array....."+cartArray.length)
   }
  
  
  const healthSubPackData = [
    {
      id: 0,
      Text: "Comprehensive Full Body Checkup with Vitamin D & B12",
      price: "₹1549",
      orgPrice: "₹4199",
      tag: "63% OFF"
    },
    {
      id: 1,
      Text: "Healthy 2022 Full Body Checkup",
      price: "₹1049",
      orgPrice: "₹2990",
      tag: "65% OFF"
    },
    {
      id: 2,
      Text: "Basic Health Checkup",
      price: "₹725",
      orgPrice: "₹2050",
      tag: "65% OFF"
    },
    {
      id: 3,
      Text: "Aarogyam Full Body Checkup with Vitamins",
      price: "₹1999",
      orgPrice: "₹3999",
      tag: "50% OFF"
    },
    {
      id: 4,
      Text: "Advanced Full Body Checkup",
      price: "₹1049",
      orgPrice: "₹2684",
      tag: "61% OFF"
    },
    {
      id: 5,
      Text: "Aarogyam Full Body Checkup",
      price: "₹1549",
      orgPrice: "₹2999",
      tag: "48% OFF"
    },
    {
      id: 6,
      Text: "Complete Heart Health Checkup",
      price: "₹1999",
      orgPrice: "₹1999",
      tag: "41% OFF"
    },

  ]

  const [cartArray, setCartarray] = useState([])
  const [count,setCount] = useState(0)
  const [refresh,Setrefresh] = useState(new Date())
  const [disable,setDisable] = useState()
  const [value,setValue] = useState([])

  const addCart = async (fid) => {
   
  console.log("hello.......")
    setDisable(fid)
   
    const addcartItems = healthSubPackData.find(item => item.id === fid)
        
    console.log(cartArray)
    
    if(value.length === 0){
      console.log("Hello")
      
      cartArray.push(addcartItems)
      await AsyncStorage.setItem('cartItem', JSON.stringify(cartArray)) 
    }else{
   
      console.log("Hello2")
      const request ={
        Text:addcartItems.Text,
        id:addcartItems.id,
        orgPrice:addcartItems.orgPrice,
        price:addcartItems.price,
        tage:addcartItems.tag
      }
    
      setCartarray([...cartArray,request])
      
      await AsyncStorage.setItem('cartItem', JSON.stringify(cartArray),async()=>{
        await AsyncStorage.mergeItem('cartItem', JSON.stringify(value))
      }) 
    }
   
    const values = await AsyncStorage.getItem('cartItem');
    const count = JSON.parse(values).length
//  console.log("hello")
    
    setCount(count)
  
    
  }

  // const badge = async()=>{
  //   const values = await AsyncStorage.getItem('cartItem');
  //   const count = JSON.parse(values).length
  //   console.log("Getting the number of elements " + count)
  //   setCount(count)

  // }

  return (
    <View>
      <View style={AppStyleSheet.header}>
        <View style={{flexDirection:"row"}}>
          <TouchableOpacity style={{ padding: 10 }} onPress={() => {
            navigation.navigate(screenNames.Home_Screen)
          }}>
            <BackIcon stroke="black" />
          </TouchableOpacity>
          <Text style={AppStyleSheet.headerText}>Health</Text>
        </View>

        <View style={{ flexDirection: "row",marginEnd:15,marginTop:5}}>
          <View >
          <TouchableOpacity style={{ padding: 10 }} onPress={() => {
            navigation.navigate(screenNames.CART_Items)
          }} >
            <CartIcon stroke="black" />
          </TouchableOpacity>
          </View>
          <View style={{height:20,width:20,borderRadius:30,backgroundColor:"red"}} key={refresh}>
            <Text style={{color:"#FFFFFF",textAlign:"center"}}>{count}</Text>
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
          <Text style={AppStyleSheet.subCatPagesHeading}>Recommended Packages</Text>
          <FlatList
            data={healthSubPackData}
            bounces={false}
            initialScrollIndex={0}
            pagingEnabled={true}
            numColumns={Math.floor(healthSubPackData.length / 3)}
            renderItem={({ item,index }) => (
              <View style={{ justifyContent: "space-between", margin: 10 }} key={refresh}>

                <View style={{ height: 230, width: 175, borderRadius: 3, backgroundColor: "#DFEAFF", flex: 1, flexDirection: "column", padding: 10 }}>

                  <View style={{ flex: 1 }}>
                    <Text style={AppStyleSheet.subcatText}>{item.Text}</Text>
                  </View>

                  {/* Offer Tag, Price, and Book button View */}
                  <View style={{ flex: 2, justifyContent: "flex-end" }}>
                    <View style={{ flexDirection: "row" }}>
                      <View style={[AppStyleSheet.tagView]}>
                        <Text style={{ color: "#FFFFFF", fontFamily: "NotoSans-Bold", textAlign: "center" }}>{item.tag}</Text>
                      </View>
                      <View style={{ marginTop: -1 }}>
                        <Image source={require('../../../assets/Images/zigzap.png')} />
                      </View>
                    </View>

                    <View style={{ flexDirection: "row", marginTop: 5 }}>
                      <Text style={AppStyleSheet.subcatPrice}>{item.price}</Text>
                      <Text style={{ textDecorationLine: "line-through", paddingStart: 10, paddingTop: 4 }}>{item.orgPrice}</Text>
                    </View>


                    <View style={{ marginTop: 5 }} key={refresh}>
                      <TouchableOpacity style={{ borderWidth: 1, height: 25, width: 60, borderRadius: 5, borderColor: "#10847E", backgroundColor:item.id===disable? "#E0E0E0": "#FFFFFF" }}
                        onPress={() => addCart(item.id,index)} disabled={item.id === disable && true} >
                        <Text style={{ textAlign: "center", padding: 2, color: item.id === disable? "#3d3d3d": "#10847E", fontFamily: "NotoSans=ExtraBold", fontSize: 13 }}>Book</Text>
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