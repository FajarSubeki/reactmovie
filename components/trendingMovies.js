import { View, Text, TouchableWithoutFeedback, FlatList, Image, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { image500 } from '../api/moviedb';
// import Carousel from 'react-native-snap-carousel'

var {width, height} = Dimensions.get('window');

export default function TrendingMovies({data}) {

    const navigation = useNavigation()
    const handleClick = (item)=> {
        navigation.navigate('Movie', item)
    }

    return (
        <View className="mb-6">
        <Text className="text-white text-xl mx-4 mb-5">Trending</Text>
        {/* FlatList for horizontal scrolling */}
        <FlatList
            data={data}
            horizontal
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16 }}
            renderItem={({ item }) => <MovieCard item={item} handleClick={handleClick} />}
        />
        </View>
    )
}

const MovieCard = ({item, handleClick}) => {
    return (
        <TouchableWithoutFeedback onPress={() => handleClick(item)}>
            <Image 
                // source={require('../assets/images/avengers.jpg')}
                source={{uri: image500(item.poster_path)}}
                style={{
                    width: width*0.48,
                    height: height*0.32
                }}
                className="rounded-3xl mr-6"
            />
        </TouchableWithoutFeedback>
    )
}