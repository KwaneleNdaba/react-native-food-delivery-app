import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { COLORS, SIZES } from "../constants/theme";
import NetworkImage from "./NetworkImage";
import {RatingInput} from "react-native-stock-star-rating"

export default function StoreComponent({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.wrapper}>
      <NetworkImage
        data={item.imageUrl}
        width={SIZES.width - 80}
        height={SIZES.height / 5.8}
        radius={16}
        mode={"cover"}
      />
      <Text style={styles.heading}>{item.title}</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.time}>Delivery under</Text>
        <Text style={styles.time}>{item.time} </Text>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <RatingInput
        rating ={item.rating}
        size = {14}
        maxStarz = {5}
        setRating = {item.rating}
        bordered = {false}
        color = {COLORS.primary}

        />
         <Text style={styles.time}>{item.ratingCount} + ratings </Text>

     
      </View>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginRight: 15,
    backgroundColor: COLORS.lightWhite,
    padding: 8,
    borderRadius: 16,
  },
  heading: {
    fontSize: 14,
    fontFamily: "regular",
    color: COLORS.gray,
  },
  time: {
    fontSize: 12,
    fontFamily: "regular",
    color: COLORS.gray,
  },
});
