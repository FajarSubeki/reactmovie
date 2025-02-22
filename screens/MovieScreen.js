import { View, Text, ScrollView, TouchableOpacity, Dimensions, Platform, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles, theme } from '../theme'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { HeartIcon } from 'react-native-heroicons/solid'
import { LinearGradient } from 'expo-linear-gradient'
import Cast from '../components/cast'
import MovieList from '../components/movieList'

var {width, height} = Dimensions.get('window');
const ios = Platform.OS == "ios"
const topMargin = ios? '': 'mt-3' 

export default function MovieScreen() {

    const {params: item} = useRoute()
    const [isFavourite, toggleFavourite] = useState(false)
    const navigation = useNavigation()
    const [cast, setCast] = useState([1,2,3,4,5])
    const [similarMovies, setSimilarMoviews] = useState([1,2,3,4,5])
    let movieName = "Avengers Infinity War"
    useEffect(() => {
        // call the movie details api
    }, [item])

  return (
    <ScrollView
        contentContainerStyle={{paddingBottom: 20}}
        className="flex-1 bg-neutral-900"
    >
        {/* back button and movie poster */}
        <View className="w-full">
            <SafeAreaView className={"absolute z-20 w-full flex-row justify-between items-center px-4" + topMargin}>
                <TouchableOpacity onPress={() => navigation.pop()} style={styles.background} className="rounded-xl p-1">
                 <ChevronLeftIcon size="28" strokeWidth={2.5} color="white"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)}>
                    <HeartIcon size="35" color={isFavourite? theme.background : "white"} />
                </TouchableOpacity>
            </SafeAreaView>
            <View>
                <Image 
                    source={require('../assets/images/mufasa.jpeg')}
                    style={{width, height: height*0.55}}
                />
                <LinearGradient
                    colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23,1)']}
                    style={{width, height: height*0.40}}
                    start={{x: 0.5, y: 0}}
                    end={{x: 0.5, y: 1}}
                    className="absolute bottom-0"
                    />
            </View>
        </View>

        {/* movie details */}
        <View style={{marginTop: -(height*0.38)}} className="space-y-3">
            {/* title */}
            <Text className="text-white text-center text-3xl font-bold tracking-wider">
                {
                    movieName
                }
            </Text>
            {/* status, release, runtime */}
            <Text className="text-neutral-400 font-semibold text-base text-center mt-3">
                Released • Thrill • Comedi
            </Text>
            {/* genres */}
            <View className="flex-row justify-center mx-4 space-x-2 mt-2">
                <Text className="text-neutral-400 font-semibold text-base text-center">
                    Action •
                </Text>
                <Text className="text-neutral-400 font-semibold text-base text-center">
                    Thrill •
                </Text>
                <Text className="text-neutral-400 font-semibold text-base text-center">
                    Comedy
                </Text>
            </View>
            {/* description */}
            <Text className="text-neutral-400 mx-4 tracking-wide mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rhoncus finibus tempus. Maecenas faucibus varius leo vel hendrerit. Donec libero mi, scelerisque eget vestibulum in, ornare vel libero. Aliquam metus ex, faucibus id justo et, suscipit placerat ligula. Donec luctus imperdiet laoreet. Suspendisse at lacus at nisi mollis maximus. Phasellus bibendum elit elementum euismod ornare. Donec pretium mauris ac semper vulputate.
            </Text>
        </View>

        {/* cast */}
        <Cast navigation={navigation} cast={cast} />

        {/* similar movies */}
        <MovieList title="Similar Movies" hideSeeAll={true} data={similarMovies}/>

    </ScrollView>
  )
}