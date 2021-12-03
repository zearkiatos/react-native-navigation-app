import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
const DetailsScreen = ({ navigation }) => {
    const user = navigation.getParam('user');
    const userId = navigation.getParam('userId');
    
    return (
        <View style={styles.container}>
            <Text>Details Screen {user} {userId}</Text>
            <Button title="Go Back" onPress={() => navigation.goBack()} />
            <Button title="Change title" onPress={() => navigation.setParams({title: `User ${userId}`})} />
        </View>
    );
};

DetailsScreen.navigationOptions = ({ navigation, navigationOptions }) => {
    return {
        title: navigation.getParam('title', 'Loading...'),
        headerStyle: {
            backgroundColor: navigationOptions.headerStyle.backgroundColor
        }
    };
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