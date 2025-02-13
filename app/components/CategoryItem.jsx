import React from 'react'
import { View } from 'react-native'
import { COLORS, SHADOWS } from '../constants/theme'
import { Image } from 'react-native'
import { Text } from 'react-native'

export default function CategoryItem({category , selected}) {
  return (
  <View style ={{
    marginLeft: 12,
    padding : 5, 
    alignItems: "center",
     width: 80,
     height:55,
     justifyContent:"center",
     borderRadius:15,
      borderWidth:0.5,  
     borderColor: category.value == selected ? COLORS.secondary : "transparent",
     shadowColor: SHADOWS.small
     }}>
   
    <Image source = {{uri: category.imageUrl}} style = {{width: 30, height : 30}} />
     <Text style ={{fontSize: 13, fontFamily: "regular"}}>
        {category.title}
     </Text>
  </View>
  )
}
