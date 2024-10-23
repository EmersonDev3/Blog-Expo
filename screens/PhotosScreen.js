// PhotosScreen.js
import React from 'react';
import { View, Image, StyleSheet, FlatList } from 'react-native';

const photos = {
    1: [
        { id: 1, image: require('../assets/photo1.jpg') },
        { id: 2, image: require('../assets/photo2.jpg') },
    ],
    2: [
        { id: 3, image: require('../assets/photo3.jpg') },
        { id: 4, image: require('../assets/photo4.jpg') },
    ],
    3: [
        { id: 5, image: require('../assets/photo5.jpg') },
        { id: 6, image: require('../assets/photo6.jpg') },
    ],
};

const PhotosScreen = ({ route }) => {
    const { albumId } = route.params;
    console.log('Received Album ID:', albumId);
    const albumPhotos = photos[albumId] || [];

    const renderPhoto = ({ item }) => (
        <Image source={item.image} style={styles.photo} />
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={albumPhotos}
                renderItem={renderPhoto}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ECE9E6',
        padding: 10,
    },
    photo: {
        width: '48%',
        height: 150,
        margin: '1%',
        borderRadius: 10,
    },
});

export default PhotosScreen;



