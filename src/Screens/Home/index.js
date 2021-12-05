import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import Logo from '../../components/Logo'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button
        title="Details"
        onPress={() =>
          navigation.openDrawer()
        }
      />
    </View>
  );
};

HomeScreen.navigationOptions = {
  drawerIcon: ({ tintColor }) => {
    return <Ionicons name='ios-information-circle' size={25} color={tintColor}/>
  },
  headerTitle: <Logo />,
  headerStyle: {
      backgroundColor: '#f00'
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default HomeScreen;
