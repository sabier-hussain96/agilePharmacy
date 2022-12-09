import { View, Text, Dimensions, FlatList, TextInput, TouchableOpacity, Image, Animated, StyleSheet, ScrollView, useColorScheme } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import { CartIcon } from '../../assets/Icons/CartIcon'
import { DownIcon } from '../../assets/Icons/DownIcon'
import { AppStyleSheet } from '../Global/global'
import { SearchIcon } from '../../assets/Icons/SearchIcon'
import { useNavigation } from '@react-navigation/native'
import { screenNames } from '../Constants/Constant'
import { banner } from '../DummyData/Banner'
import { advertise } from '../DummyData/Advertisement'
import axios from 'axios'

const HomeScreen = () => {

 const CatgoriesImage =[
        {
            id:0,
            pictures: require("../../assets/Images/Iphone9.png"),
            name:"Iphone 9"
        },
        {
            id:1,
            pictures: require("../../assets/Images/IphoneX.png"),
            name:"IphoneX"
        },
        {
            id:2,
            pictures: require("../../assets/Images/samGal.jpg"),
            name:"Samsung"
        },
        {
            id:3,
            pictures: require("../../assets/Images/Oppo.jpg"),
            name:"Oppo"
        },
        {
            id:4,
            pictures: require("../../assets/Images/huawei.webp"),
            name:"Huawei"
        }
    ]
    const navigation = useNavigation();
    const getSearchView = () => {
        navigation.navigate(screenNames.Search_Screen);
    }

    useEffect(() => {
        getCategories()
    }, [])
    // fetching the products using API and categorizing.
    const [Products, setProducts] = useState([])
    
    const getCategories = async () => {
        try {
            const response = await axios.get("https://dummyjson.com/products")
            const jsonArr = (response.data.products)
            const dummy = []
            for (var i = 0; i < jsonArr.length; i++) {
                    if (jsonArr[i].category === "smartphones") {
                        if(jsonArr[i].brand !== jsonArr[i+1].brand){
                            const repo ={
                                id:jsonArr[i].id,
                                text:jsonArr[i].title,
                                brand:jsonArr[i].brand,
                                photo:CatgoriesImage[i].pictures
        
                            }
                            dummy.push(repo)
                        }
                    }
            }
            setProducts(dummy)
        } catch (error) {
            console.log(error)
        }

    }
    // Auto scrolling 
    useEffect(() => {
        const interval = setInterval(() => {
            var nextSlide = 0
            if (currentIndex < maxSlider) {
                nextSlide = currentIndex + 1
            }
            scrollToIndex(nextSlide, true)
            SetCurrentindex(nextSlide)
        }, 3000)
        return () => clearInterval(interval);
    })
    const data = banner;

    const scrollToIndex = (index, animated) => {
        scrollRef && scrollRef.current?.scrollToIndex({ index, animated })
    }
    const width = Dimensions.get('screen').width
    const [currentIndex, SetCurrentindex] = useState(0)
    const scrollX = useRef(new Animated.Value(0)).current;
    const [maxSlider] = useState(advertise.length - 1)
    const [badge, Setbadge] = useState("")
    const scrollRef = useRef(null)

    const colorScheme = useColorScheme();
    const isDark = colorScheme === 'dark'
    const color = isDark ? '#f1f1f1' : '#333'
    
    
  
    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 70,backgroundColor:isDark? '#212121':"#E0F2F1" }}>
            {/* Header part  */}
            <View style={{ margin: 10 }}>
                <View style={AppStyleSheet.Homeheader} >
                    <View>
                        <Text style={{ fontFamily: 'NotoSans-Regular', textAlign: 'center', color:isDark?'#FFFFFF':'#000000' }}>Express delivery to</Text>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate(screenNames.Location_Screen)
                        }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontFamily: 'NotoSans-Regular', fontSize: 16, fontWeight: "bold",  color:isDark?'#FFFFFF':'#000000' }}>560001,Bengaluru</Text>
                                <DownIcon stroke='black' />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

            {/* Search bar */}
            <View style={[AppStyleSheet.searchIcon, { margin: 10 }]}>
                <View style={{ marginTop: 10, marginStart: 15 }}>
                    <SearchIcon stroke="green" />
                </View>
                <TouchableOpacity style={{ marginStart: 15 }} onPress={getSearchView}>
                    <TextInput placeholder='Search Products/medicines' style={{color:isDark?"#FFFFFF":"#000000"}}/>
                </TouchableOpacity>
            </View>

            <View style={{ marginTop: 30, margin: 2 }}>
                <FlatList
                    horizontal
                    data={data}
                    bounces={false}
                    initialScrollIndex={0}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View key={item.id} style={{ justifyContent: "space-between", marginStart: 10 }}>
                            <Image source={item.image} style={{ width: 80, height: 80, borderRadius: 20 }} />
                            <Text style={{ textAlign: "center", marginTop: 10, fontFamily: "NotoSans-Bold",  color:isDark?'#FFFFFF':'#000000' }}>{item.name}</Text>
                        </View>
                    )}
                />

            </View>


            <View style={{ marginTop: 30 }}>
                <FlatList
                    horizontal
                    data={advertise}
                    bounces={false}
                    initialScrollIndex={0}
                    pagingEnabled={true}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                        useNativeDriver: false,
                    })}
                    ref={scrollRef}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View key={item.id}>
                            <Image source={item.image} style={{ width: Dimensions.get('screen').width, height: 200, resizeMode: "contain" }} />
                        </View>
                    )}
                />
            </View>
            {/* paginator */}
            <View style={[AppStyleSheet.paginator, { width: width }]}>
                {advertise.map((_, i) => {
                    const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
                    const dotWidth = scrollX.interpolate({
                        inputRange,
                        outputRange: [10, 20, 10],
                        extrapolate: "clamp"
                    });
                    const opacity = scrollX.interpolate({
                        inputRange,
                        outputRange: [0.1, 1, 0.1],
                        extrapolate: "clamp"
                    });

                    return <Animated.View style={[styles.dot, { width: dotWidth, opacity }]} key={i.toString()} />;
                })}
            </View>

            {/* Grid Style FlatList showing data in multiple rows and columns */}

            <View style={AppStyleSheet.Viewflaskicon}>
                {/* <LabFlaskIcon stroke="blue" /> */}
                <Text style={[AppStyleSheet.specialHeading,{color:isDark?'#FFFFFF':'#000000'}]}>Products Categories</Text>
            </View>
            {/* For multiple rows in horizantal flatlist */}
            <View>
                <FlatList
                    horizontal
                    data={Products}
                    bounces={false}
                    initialScrollIndex={0}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    renderItem={({ item }) => (
                        <View style={{ justifyContent: "space-between", margin: 10 }}>
                            <TouchableOpacity onPress={() => navigation.replace(screenNames.Health_SubCat,{
                                brand: item.brand
                            })}>
                                <Image source={item.photo} style={{ width: 180, height: 230, resizeMode: "contain" }} />
                                <Text style={{ fontFamily: "NotoSans-Bold", fontSize: 15,textAlign:"center" }}>{item.brand}</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        </ScrollView>

    )
}

export default HomeScreen
const styles = StyleSheet.create({

    dot: {
        height: 5,
        borderRadius: 5,
        backgroundColor: 'green',
        marginHorizontal: 4
    }
})