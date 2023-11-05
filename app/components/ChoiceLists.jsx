import React, { useState } from 'react'
import { FlatList, TouchableOpacity, View } from 'react-native'
import { Text } from 'react-native'
import uidata from '../constants/uidata'
import { COLORS } from '../constants/theme'

export default function ChoicesList({setSelectedChoice, setSelectedSection}) {

  const [selected, setSelected] = useState(null)


  const handlePress = (item) => {
    if(selected === item.value ){
      setSelected(null)
      setSelectedChoice(null)
      setSelectedSection(null)
    }else{
      setSelected(item.value)
      setSelectedChoice(item.value)
      setSelectedSection("restaurant")
    }
  }

  return (
  <View>
    <Text style={{
    marginLeft:16,
    marginVertical:12,
    fontSize: 18,
    fontFamily: "bold"
    }}>
        Pick Restaurant
    </Text>
    <FlatList 
    data={uidata.choicesList}
    showsHorizontalScrollIndicator={false}
    keyExtractor={(item) => item.id.toString()}
    horizontal
    scrollEnabled
    style={{
      marginTop:5
    }}
    renderItem={({item}) => (
      <TouchableOpacity onPress={() => handlePress(item)} style={{backgroundColor: selected === item.value ? COLORS.secondary : COLORS.lightWhite,
        height: 40,
        borderRadius: 12,
        marginHorizontal: 8,
        justifyContent: "center"
        }}>
          <Text style={{
            marginHorizontal: 10,
            fontFamily: "regular",
            fontSize: 13,
            color : selected === item.value ? COLORS.lightWhite : COLORS.gray
          }}>
            {item.name}
          </Text>
        </TouchableOpacity>
    )

    }    
    />
  </View>
  )
}
