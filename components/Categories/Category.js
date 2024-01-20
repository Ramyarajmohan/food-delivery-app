import { View, Text,Image } from 'react-native'
import React from 'react'

const Category = ({imgUrl,title}) => {
  return (
    <View>
      <Image source={imgUrl} className="h-20 w-20 bg-gray-100 mx-2" />
      <Text>{title}</Text>
    </View>
  )
}

export default Category