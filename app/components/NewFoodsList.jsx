import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import uidata from '../constants/uidata'
import FoodComponent from './FoodComponent'
import { useNavigation } from '@react-navigation/native'


export default function NewFoodsList() {

  
const navigation = useNavigation()

  return (
    <View style = {{marginLeft: 12 , marginBottom: 10 }}>
          <FlatList
        data={uidata.foods}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{marginTop: 5, rowGap: 10, }}
        scrollEnabled
        renderItem={({item}) => (
            <FoodComponent item = {item} onPress={() => {navigation.navigate("food-nav", item)}}/>
            )}
        />

    </View>
  )
}

const styles = StyleSheet.create({})