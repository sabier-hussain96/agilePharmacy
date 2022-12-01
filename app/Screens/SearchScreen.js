import { View, Text } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

const SearchScreen = () => {
  return (
    <View>
      <View>
        <TextInput placeholder='Search for Products'></TextInput>
      </View>
    </View>
  )
}

export default SearchScreen