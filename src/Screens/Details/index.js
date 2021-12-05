import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
const DetailsScreen = ({ navigation }) => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  useEffect(() => {
    navigation.setParams({ increment });
  }, [count]);
  const user = navigation.getParam("user");
  const userId = navigation.getParam("userId");

  return (
    <View style={styles.container}>
      <Text>
        Details Screen {user} {userId} The counter value is {count}
      </Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Button
        title="Change title"
        onPress={() => navigation.setParams({ title: `User ${userId}` })}
      />
      <Button
        title="Open Modal"
        onPress={() => navigation.navigate('MyModal')}
      />
    </View>
  );
};

DetailsScreen.navigationOptions = ({ navigation, navigationOptions }) => {
  return {
    title: navigation.getParam("title", "Loading..."),
    headerStyle: {
      backgroundColor: navigationOptions.headerStyle.backgroundColor
    },
    headerRight: (
      <Button
        onPress={() => navigation.getParam("increment")}
        title="+1"
        color="#555"
      />
    )
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default DetailsScreen;
