import React from "react";
import { StyleSheet } from "react-native";
import {Ionicons} from '@expo/vector-icons'
import { COLORS } from "../constants/theme";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";

function Heading({ heading, onPress }) {
  return (
    <View style={styles.heading}>
      <Text style = {styles.text}>{heading}</Text>
    
      <TouchableOpacity  onPress={onPress}>
      <Ionicons name = "grid" size = {20} color = {COLORS.secondary} />
      </TouchableOpacity>
    </View>
  );
}

export default Heading;

const styles = StyleSheet.create({
  heading: {
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 7,
    justifyContent: "space-between",
    marginRight: 16,
    marginLeft: 12,
  },
  text: {marginRight: 16, fontSize : 18 , fontFamily : "bold"}
});
