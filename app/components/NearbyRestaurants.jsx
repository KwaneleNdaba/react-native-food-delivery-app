import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import uidata from '../constants/uidata'
import StoreComponent from './StoreComponent'

export default function NearbyRestaurants() {
  return (
    <View style={{marginLeft: 12}}>
        <FlatList
        data={uidata.restaurants}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{marginTop: 5, rowGap: 10, }}
        scrollEnabled
        renderItem={({item}) => (
            <StoreComponent item ={item} onPress={() => {}} />
        )}
        />
    </View>
  )
}

const styles = StyleSheet.create({})