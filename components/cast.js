import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function Cast({cast, navigation}) {

    let personName = "Keanu Reevs"
    let characterName = "John Wick"

  return (
    <View class="my-6">
      <Text className="text-white text-lg mx-4 mb-5 mt-6">Top Cast</Text>
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerSytle={{paddingHorizontal: 15}}>
            {
                cast && cast.map((person, index)=>{
                    return (
                        <TouchableOpacity
                            key={index}
                            className="mr-4 ml-4 items-center mb-4"
                            onPress={()=> navigation.navigate('Person', person)}>
                            <View className="overflow-hidden rounded-full h-20 w-20 items-center border border-neutral-500">
                                <Image 
                                    className="rounded-2xl h-24 w-20"
                                    source={require('../assets/images/johnwick.jpeg')}/>
                            </View>
                            <Text className="text-white text-xs mt-2">
                                {
                                    characterName.length>10 ? characterName.slice(0,10)+'...': characterName
                                }
                            </Text>
                            <Text className="text-neutral-400 text-xs mt-1">
                                {
                                    personName.length>10 ? personName.slice(0,10)+'...': personName
                                }
                            </Text>
                        </TouchableOpacity>
                    )
                })
            }
        </ScrollView>
    </View>
  )
}