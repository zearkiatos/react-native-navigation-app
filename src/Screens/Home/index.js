import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Logo from '../../components/Logo'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button
        title="Details"
        onPress={() =>
          navigation.navigate("Details", {
            user: "Test user",
            userId: 2
          })
        }
      />
    </View>
  );
};

HomeScreen.navigationOptions = {
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
