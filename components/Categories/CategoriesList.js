import {ScrollView } from 'react-native'
import React from 'react'
import Category from './Category'

const CategoriesList = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <Category imgUrl={require('../../assets/Images/Cat.png')} title={"Offers"}/>
      <Category imgUrl={require('../../assets/Images/Cat.png')} title={"Offers1"}/>
      <Category imgUrl={require('../../assets/Images/Cat.png')} title={"Offers2"}/>
      <Category imgUrl={require('../../assets/Images/Cat.png')} title={"Offers3"}/>
    </ScrollView>
  )
}

export default CategoriesList