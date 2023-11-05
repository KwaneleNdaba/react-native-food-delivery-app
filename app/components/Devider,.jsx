import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants/theme'

export default function Devider() {
  return (
    <View style ={styles.devider}>
    </View>
  )
}

const styles = StyleSheet.create({
    devider : {
        borderColor: COLORS.gray2,
        opacity: 0.7,
        width: SIZES.width - 40,
        borderWidth: 0.3,
        marginLeft: 10,
        marginBottom: 5,
        marginTop: 7

    }
})