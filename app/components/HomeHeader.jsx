import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";

function HomeHeader() {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <View style={styles.outerStyle}>
        
      </View>
    </View>
  );
}

export default HomeHeader;

const styles = StyleSheet.create({
  outerStyle: {
    marginBottom: 10,
    marginHorizontal: 20,
    flexDirection: "row",
  },
});
