import { View, Text, Dimensions, FlatList, TextInput, TouchableOpacity, Image, Animated, StyleSheet, ScrollView } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import { CartIcon } from '../../assets/Icons/CartIcon'
import { DownIcon } from '../../assets/Icons/DownIcon'
import { AppStyleSheet } from '../Global/global'
import { SearchIcon } from '../../assets/Icons/SearchIcon'
import { useNavigation } from '@react-navigation/native'
import { screenNames } from '../Constants/Constant'
import { banner } from '../DummyData/Banner'
import { advertise } from '../DummyData/Advertisement'
import LabFlaskIcon from '../../assets/Icons/LabFlaskIcon'
import { healthConcern } from '../DummyData/HealthConcernData'
import AsyncStorage from '@react-native-async-storage/async-storage'




const HomeScreen = () => {

    const navigation = useNavigation();
    const getSearchView = () => {
        navigation.navigate(screenNames.Search_Screen);
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

    // Calling Sub Categories
    const token = [];
    const subCat = (healthConcern) => {
        navigation.navigate(screenNames.Health_SubCat)
    }

    useEffect(() => {
        // const badges = async () => {
        //     const values = await AsyncStorage.getItem('cartItem');
        //     const count = JSON.parse(values).length
        //     console.log("Getting the number of elements " + count)
        //     Setbadge(count)

        // }
        // badges();

    }, [])


    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 70 }}>
            {/* Header part  */}
            <View style={{ margin: 10 }}>
                <View style={AppStyleSheet.Homeheader} >
                    <View>
                        <Text style={{ fontFamily: 'NotoSans-Regular', textAlign: 'center' }}>Express delivery to</Text>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate(screenNames.Location_Screen)
                        }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontFamily: 'NotoSans-Regular', fontSize: 16, fontWeight: "bold" }}>560001,Bengaluru</Text>
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
                    <TextInput placeholder='Search Products/medicines' />
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
                            <Text style={{ textAlign: "center", marginTop: 10, fontFamily: "NotoSans-Bold" }}>{item.name}</Text>
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
                <LabFlaskIcon stroke="blue" />
                <Text style={AppStyleSheet.specialHeading}>Lab Tests by Health Concern</Text>
                {/* For multiple rows in horizantal flatlist */}



            </View>
            <ScrollView horizontal>
                <FlatList
                    data={healthConcern}
                    bounces={false}
                    initialScrollIndex={0}
                    pagingEnabled={true}
                    numColumns={Math.floor(healthConcern.length / 2)}
                    key={'#'}
                    keyExtractor={item => "#" + item.id}
                    renderItem={({ item }) => (
                        <View style={{ justifyContent: "space-between", margin: 10 }}>
                            <TouchableOpacity onPress={subCat}>
                                <Image source={item.image} style={{ width: 140, height: 150, borderRadius: 5 }} />
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </ScrollView>
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