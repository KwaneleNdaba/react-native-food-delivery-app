import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { COLORS, SIZES } from "../constants/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import pages from './page.style'
import uidata from "../constants/uidata";
  import HomeHeader from "../components/HomeHeader";
import CategoryList from "../components/CategoryList";
import { useState } from "react";
import ChoicesList from "../components/ChoiceLists";
import Heading from "../components/Heading";
import NearbyRestaurants from "../components/NearbyRestaurants";
import Devider from "../components/Devider,";
import NewFoodsList from "../components/NewFoodsList";
import FastestNearYou from "../components/FastestNearYou";


const Home = () => {
const [selectedCategory, setSelectedCategory] =  useState(null)
const [selectedSection, setSelectedSection] =  useState(null)
const [selectedValue, setSelectedValue] =  useState(null)
const [selectedChoice, setSelectedChoice] =  useState(null)



  return (
    <SafeAreaView>
      <View style={pages.viewOne}>
        <View style={pages.viewTwo}>
    <HomeHeader/>
    <ScrollView 
    showsVerticalScrollIndicator = {false}
    style = {{borderBottomEndRadius: 30, borderBottomStartRadius:30}}
    > 
    <CategoryList
     setSelectedCategory={setSelectedCategory} 
     setSelectedValue={setSelectedValue} 
     setSelectedSection={setSelectedSection} />

     <ChoicesList setSelectedChoice = {setSelectedChoice} setSelectedSection={setSelectedSection} />
  
    <View>
    <Heading heading={"Nearby Restaurants"} onPress = {() => {}}/>
    
    <NearbyRestaurants/>

    <Devider/>

    <Heading heading={"Try Something New"} onPress = {() => {}}/>

    <NewFoodsList/>


    <Devider/>

    <Heading heading={"Fastest Near You"} onPress = {() => {}}/>

    <FastestNearYou/>


    </View>
  
    </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  
});
