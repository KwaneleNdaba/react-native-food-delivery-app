import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import { CartCountContext } from "../context/CartCountContext";
import { COLORS, SIZES } from "../constants/theme";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { FlatList } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function FoodPage({ route, navigation }) {
  const item = route.params.item;
  console.log(item);
  const [isCheckd, setIsCheckd] = useState(false);
  const [additives, setAdditives] = useState([""]);
  const [totalPrice, setTotalPrice] = useState(0);
  //  const {cartCount, setCartCount} = useContext(CartCountContext);
  const [restaurant, setRestaurant] = useState(1);
  const [count, setCount] = useState(1);
  const [preference, setPreference] = useState("");

  return (
    <ScrollView style={{ backgroundColor: COLORS.lightWhite, height: SIZES.height }}>
      <View>
        <Image
          source={{ uri: item.imageUrl[0] }}
          style={{
            width: SIZES.width,
            height: SIZES.height / 4,
            borderBottomRightRadius: 30,
            borderBottomLeftRadius: 30,
          }}
        />

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backBtn}
        >
          <Ionicons
            name="chevron-back-circle"
            size={30}
            color={COLORS.primary}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}} style={styles.shareBtn}>
          <MaterialCommunityIcons
            name="share-circle"
            size={30}
            color={COLORS.primary}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {}}
          style={{ position: "absolute", bottom: 25, right: 0 }}
        >
          <View style={styles.restBtn}>
            <Text style={styles.restText}>Open the Store</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={[styles.title, { color: COLORS.primary }]}>
            ${(item.price + totalPrice) * count}
          </Text>
        </View>
        <Text style={styles.small}>{item.description}</Text>

        <FlatList
          data={item.foodTags}
          showsVerticalScrollIndicator={false}
          horizontal
          scrollEnabled
          keyExtractor={(item) => item}
          style={{
            marginTop: 10,
          }}
          renderItem={({ item }) => (
            <View style={styles.tags}>
              <Text style={{ paddingHorizontal: 4, color: COLORS.lightWhite }}>
                {item}
              </Text>
            </View>
          )}
        />

        <Text style={[styles.title, { marginBottom: 10, marginTop: 20 }]}>
          Additives and Topppings
        </Text>
        <FlatList
          data={item.additives}
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
          keyExtractor={(item) => item.id}
          style={{
            marginTop: 10,
          }}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 10,
              }}
            >
              <BouncyCheckbox
                size={20}
                unfillColor="white"
                fillColor={COLORS.primary}
                innerIconStyle={{ borderWidth: 1 }}
                textStyle={styles.small}
                text={item.title}
              />
              <Text style={styles.small}>${item.price}</Text>
            </View>
          )}
        />

        <Text style={[styles.title, { marginBottom: 10, marginTop: 20 }]}>
          Preferences
        </Text>
        <View style={styles.input}>
          <TextInput
          placeholder="Add specific instructions" 
        value={preference}
        onChangeText={(value) => setPreference(value)}
        autoCapitalize={false}
        autoCorrect={false}
          />

        </View>
        <View style={{flexDirection: 
        'row', justifyContent:"space-between", marginTop: 20, }}>
            <Text style={[styles.title, {marginBottom:10,}]}>
                Quantity
            </Text>
        </View>


      </View>
    </ScrollView>
   
  );
}

const styles = StyleSheet.create({
  backBtn: {
    marginLeft: 12,
    alignItems: "center",
    zIndex: 999,
    position: "absolute",
    top: 20,
  },
  shareBtn: {
    marginRight: 12,
    alignItems: "center",
    zIndex: 999,
    position: "absolute",
    right: 0,
    top: 20,
  },
  restBtn: {
    borderColor: COLORS.tertiary,
    backgroundColor: COLORS.primary,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
  },
  restText: {
    color: COLORS.lightWhite,
    fontFamily: "medium",
  },
  container: {
    marginHorizontal: 12,
    marginTop: 10,
  },
  title: {
    fontSize: 22,
    fontFamily: "medium",
    color: COLORS.black,
  },
  small: {
    fontSize: 13,
    fontFamily: "regular",
    color: COLORS.gray,
    textAlign: "justify",
  },
  tags: {
    right: 10,
    marginHorizontal: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 8,
  },
  input: {
    borderColor: COLORS.primary1,
    borderWidth: 1,
    backgroundColor: COLORS.offwhite,
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 12,
    alignItems: "center",
    flexDirection:"row"
  },
});
