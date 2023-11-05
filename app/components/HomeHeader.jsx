import React, { useContext, useState } from "react";
import { StyleSheet, Text } from "react-native";
import { View } from "react-native";
import AssetImage from "./AssetImage";
import { UserReversedGeoCode } from "../context/UserReversedGeoCode";
import { COLORS, SIZES } from "../constants/theme";
import { useEffect } from "react";
import { UserLocationContext } from "../context/UserLocationContext";
import * as Location from 'expo-location';

function HomeHeader() {

    const {address, setAddress} = useContext(UserReversedGeoCode);
    const {location, setLocation} = useContext(UserLocationContext);
    const [time, setTime] = useState(null)

    const reverseGeoCode = async (longitude, latitude) => {
        try {
            const reverseGeoCodeAddress = await Location.reverseGeocodeAsync({
                longitude: longitude,
                latitude: latitude
            });
    
            setAddress(reverseGeoCodeAddress[0]);
            console.log(reverseGeoCodeAddress[0])
            const greetings = getTimeOfDay();
            setTime(greetings);
        } catch (error) {
            console.error("Error during reverse geocoding:", error);
        }
    }

    useEffect(() => {
        if (location !== null) {
            reverseGeoCode(location.coords.longitude, location.coords.latitude);
            console.log("Kwanele");
        }
    }, [location]);

    const getTimeOfDay = () => {
      const now = new Date();
      const hour = now.getHours();
      if (hour >= 0 && hour < 12) {
          return "☀️";
      } else if (hour >= 12 && hour < 17) {
          return "🌤️";
      } else {
          return "🌙";
      }
  }
  

  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <View style={styles.outerStyle}>
        <AssetImage
          data={require("../../assets/images/profile.jpg")}
          width={50}
          height={55}
          mode={"cover"}
          radius={99}
        />

        <View style={styles.headerStyle}>
          <Text style = {styles.heading}>Delivering to</Text>
          <Text style = {styles.location}>{`${address.city} ${address.district} ${address.name}`}</Text>

        </View>
      </View>
      <Text style={{fontSize:36}}>
        {time}
      </Text>
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
  headerStyle: {
    marginLeft: 15,
    justifyContent: "center",
  },
  heading : {
    fontFamily: "medium",
    fontSize: SIZES.medium,
    color : COLORS.secondary
  },
  location: {
    fontFamily: "regular",
    fontSize: SIZES.small,
    color : COLORS.gray
  }
});
