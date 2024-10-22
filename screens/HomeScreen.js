import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const posts = [
    {
        id: 1,
        title: "What's new in 2022 Tech",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
        tag: "Technology",
    },
    {
        id: 2,
        title: "Delicious Food",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
        tag: "Food",
    },
    {
        id: 3,
        title: "Race to your heart content",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
        tag: "Automobile",
    },
];

const HomeScreen = ({ navigation }) => {
    const renderPost = ({ item }) => (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardBodyText}>{item.body}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={posts}
                renderItem={renderPost}
                keyExtractor={(item) => item.id.toString()}
            />
            <TouchableOpacity
                style={styles.albumButton}
                onPress={() => navigation.navigate('Albums')}
            >
                <Text style={styles.buttonText}>Ver Álbums</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7f7fd5',
        padding: 20,
    },
    card: {
        backgroundColor: '#ECE9E6',
        borderRadius: 10,
        marginBottom: 20,
        padding: 15,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardBodyText: {
        color: '#666',
    },
    albumButton: {
        padding: 15,
        backgroundColor: '#7f7fd5',
        borderRadius: 10,
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default HomeScreen;

