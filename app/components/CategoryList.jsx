import React from 'react'
import { Text } from 'react-native'
import { View } from 'react-native'
import uidata from '../constants/uidata'
import { useState } from 'react'
import { FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native'
import CategoryItem from './CategoryItem'
function CategoryList({setSelectedCategory, setSelectedSection, setSelectedValue}) {

    const [selected, setSelected] = useState(null)
    const categories = [1,2,3,4,5]

    const handleSelectedCategory = (item) => {
        if(selected === item.value){
            setSelectedCategory(null)
            setSelected(null)
            setSelectedSection(null)
            setSelectedValue(null)
        }else{
            setSelectedCategory(item._id)
            setSelectedValue(item.title)
            setSelected(item.value)
            setSelectedSection("category")
            console.log(item._id)
        }
        
    }

  return (
  <FlatList
  data= {uidata.categories}  
  showsHorizontalScrollIndicator={false}
  horizontal
  style={{marginTop: 5}}
  keyExtractor={(item) => item._id}
  renderItem={({item}) => <TouchableOpacity onPress={() => handleSelectedCategory(item)}>
    <CategoryItem category={item} selected={selected} />
  </TouchableOpacity>}
  />
  )
}

export default CategoryList
