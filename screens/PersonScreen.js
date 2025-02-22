import { View, Text, Dimensions, Platform, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles, theme } from '../theme'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { HeartIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'

var {width, height} = Dimensions.get('window')
const ios = Platform.OS == "ios"
const topMargin = ios? '': 'mt-3' 

export default function PersonScreen() {

    const navigation = useNavigation()
    const [isFavourite, toggleFavourite] = useState(false)

  return (
    <ScrollView className="flex-1 bg-neutral-900" contentContainerStyle={{paddingBottom: 20}}>
        {/* back button */}
        <SafeAreaView className={"z-20 w-full flex-row justify-between items-center px-4" + topMargin}>
            <TouchableOpacity onPress={() => navigation.pop()} style={styles.background} className="rounded-xl p-1">
                <ChevronLeftIcon size="28" strokeWidth={2.5} color="white"/>
            </TouchableOpacity>
             <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)}>
                <HeartIcon size="35" color={isFavourite? 'red' : "white"} />
            </TouchableOpacity>
        </SafeAreaView>
        {/* person details */}
        <View>
            <View className="flex-row justify-center">
                <Image />
            </View>
        </View>
    </ScrollView>
  )
}