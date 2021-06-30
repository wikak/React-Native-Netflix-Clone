import React from 'react'
import { View, Text,Image } from 'react-native'
import movie from '../../assets/data/movie';
import styles from './styles';
const firstEpisode = movie.seasons.items[0].episodes.items[0];

const MovieDetailsScreen = () => {
    return (
        <View>
            <Image style={styles.image} source={{uri: firstEpisode.poster}} />
        </View>
    )
}

export default MovieDetailsScreen;


