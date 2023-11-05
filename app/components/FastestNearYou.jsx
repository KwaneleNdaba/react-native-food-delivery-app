import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FoodComponent from './FoodComponent'
import uidata from '../constants/uidata'
import { FlatList } from 'react-native'

export default function FastestNearYou() {
  return (
    <View style = {{marginLeft: 12 , marginBottom: 10 }}>
    <FlatList
  data={uidata.foods}
  horizontal
  showsHorizontalScrollIndicator={false}
  style={{marginTop: 5, rowGap: 10, }}
  scrollEnabled
  renderItem={({item}) => (
      <FoodComponent item = {item} onPress={() => {}}/>
      )}
  />

</View>
  )
}

const styles = StyleSheet.create({})