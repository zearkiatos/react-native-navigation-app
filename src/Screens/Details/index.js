import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
const DetailsScreen = ({ navigation }) => {
    const user = navigation.getParam('user');
    const userId = navigation.getParam('userId');
    
    return (
        <View style={styles.container}>
            <Text>Details Screen {user} {userId}</Text>
            <Button title="Go Back" onPress={() => navigation.goBack()} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default DetailsScreen