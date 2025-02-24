import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { fabllbackPersonImage, image185 } from '../api/moviedb'

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
                                    // source={require('../assets/images/johnwick.jpeg')}
                                    source={{uri: image185(person?.profile_path) || fabllbackPersonImage}}
                                    />
                            </View>
                            <Text className="text-white text-xs mt-2">
                                {
                                    person.character.length>10 ? person.character.slice(0,10)+'...': person.character
                                }
                            </Text>
                            <Text className="text-neutral-400 text-xs mt-1">
                                {
                                    person?.original_name.length>10 ? person?.original_name.slice(0,10)+'...': person?.original_name
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