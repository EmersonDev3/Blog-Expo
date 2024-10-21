import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';



const posts = [
    {
        id: 1,
        title: "What's new in 2022 Tech",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!",
        tag: "Technology",
        user: {
            name: "Emerson",
            image: require('../assets/pexels-andrewperformance1-697509.jpg'), 
            time: "2h ago",
        },
        image: require('../assets/pexels-bertellifotografia-3764119.jpg') 
    },
    {
        id: 2,
        title: "Delicious Food",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!",
        tag: "Food",
        user: {
            name: "Renete",
            image: require('../assets/pexels-emilygarland-1499327.jpg'), 
            time: "Yesterday",
        },
        image: require('../assets/pexels-j-rald-1198771-2918513.jpg') 
    },
    {
        id: 3,
        title: "Race to your heart content",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!",
        tag: "Automobile",
        user: {
            name: "Luiz",
            image: require('../assets/pexels-marc-lloyd-654769-1462980.jpg'),
            time: "2d ago",
        },
        image: require('../assets/pexels-rfera-432059.jpg') 
    },

];


const CardsScreen = () => {
    const renderCard = ({ item }) => (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <Image source={item.image} style={styles.cardImage} />
            </View>
            <View style={styles.cardBody}>
                <Text style={[styles.tag, styles[`tag${item.tag}`]]}>{item.tag}</Text>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardBodyText}>{item.body}</Text>
            </View>
            <View style={styles.cardFooter}>
                <View style={styles.user}>
                    <Image source={item.user.image} style={styles.userImage} />
                    <View style={styles.userInfo}>
                        <Text style={styles.userName}>{item.user.name}</Text>
                        <Text style={styles.userTime}>{item.user.time}</Text>
                    </View>
                </View>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={posts}
                renderItem={renderCard}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7f7fd5',
        padding: 20,
    },
    listContainer: {
        paddingBottom: 20,
    },
    card: {
        backgroundColor: '#ECE9E6',
        borderRadius: 10,
        marginBottom: 20,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    cardHeader: {
        width: '100%',
    },
    cardImage: {
        width: '100%',
        height: 200,
        objectFit: 'cover',
    },
    cardBody: {
        padding: 15,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    cardBodyText: {
        color: '#666',
    },
    cardFooter: {
        padding: 15,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
    user: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userImage: {
        borderRadius: 20,
        width: 40,
        height: 40,
    },
    userInfo: {
        marginLeft: 10,
    },
    userName: {
        fontWeight: 'bold',
    },
    userTime: {
        color: '#666',
    },
    tag: {
        alignSelf: 'flex-start',
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 15,
        fontSize: 12,
        color: '#fff',
        marginBottom: 10,
    },
    tagTechnology: {
        backgroundColor: '#56CCF2',
    },
    tagFood: {
        backgroundColor: '#D1913C',
    },
    tagAutomobile: {
        backgroundColor: '#cb2d3e',
    },
});

export default CardsScreen;
