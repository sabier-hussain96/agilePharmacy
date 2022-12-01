import { View, Text } from 'react-native'
import React from 'react'

const SearchIconComp = () => {
    return (
        <View style={[AppStyleSheet.searchIcon, { margin: 10 }]}>
            <View style={{ marginTop: 10, marginStart: 15 }}>
                <SearchIcon stroke="green" />
            </View>
            <TouchableOpacity style={{ marginStart: 15 }} onPress={getSearchView}>
                <TextInput/>
            </TouchableOpacity>
        </View>
    )
}

export default SearchIconComp