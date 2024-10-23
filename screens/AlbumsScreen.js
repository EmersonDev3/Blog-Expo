// AlbumsScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const albums = [
    { id: 1, title: 'Álbum de 1' },
    { id: 2, title: 'Álbum de 2' },
    { id: 3, title: 'Álbum de 3' },
];

const AlbumsScreen = ({ navigation }) => {
    const renderAlbum = ({ item }) => (
        <TouchableOpacity
            style={styles.albumButton}
            onPress={() => navigation.navigate('Photos', { albumId: item.id })}
        >
            <Text style={styles.albumTitle}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={albums}
                renderItem={renderAlbum}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ECE9E6',
        padding: 20,
    },
    albumButton: {
        padding: 15,
        backgroundColor: '#7f7fd5',
        borderRadius: 10,
        marginBottom: 15,
    },
    albumTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default AlbumsScreen;


