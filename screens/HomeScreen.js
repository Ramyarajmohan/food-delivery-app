import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { UserIcon,ChevronDownIcon,MagnifyingGlassIcon,AdjustmentsVerticalIcon } from "react-native-heroicons/mini";
import CategoriesList from '../components/Categories/CategoriesList';



const HomeScreen = () => {
    const navigation=useNavigation();
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    },[])
   
  return (
  <SafeAreaView className="bg-white pt-5">
    {/* Header */}
    <View className="flex-row items-center pb-3 mx-1">
        <Image source={require('../assets/Icons/delivery-app-icon.jpg')} className="rounded-full h-12 w-12 bg-gray-100"/>

        <View className="flex-1">
            <Text className="text-gray-400 text-xs font-bold">Deliver Now!</Text>

            <View className="flex">
                <Text className="text-lg font-bold">Current Location  
                <ChevronDownIcon size={20} color='#3ac9b0'/>
                </Text>
            </View>  
        </View>
        <UserIcon size={40} color='#3ac9b0'/>
    </View>

    {/* Search */}
    <View className="flex-row space-x-2 pb-3 mx-2 items-center">
        <View className="flex-row bg-gray-300  space-x-2 flex-1 p-2  rounded-md" >
            <MagnifyingGlassIcon size={24} color="gray"/>
            <TextInput placeholder='Restarurants and cuisines' className="text-sm align-middle" keyboardType='default'/>
        </View>
       <AdjustmentsVerticalIcon  size={20} color='#3ac9b0'/>
    </View>
     {/* body */}
     <ScrollView className="bg-gray-100">
        <CategoriesList/>
    </ScrollView>
 </SafeAreaView>
 
  )
}

export default HomeScreen;
