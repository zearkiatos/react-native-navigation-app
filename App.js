import React from 'react';
import { Text } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import HomeScreen from "./src/Screens/Home";
import DetailsScreen from "./src/Screens/Details";

// const AppNavigator = createStackNavigator(
//   {
//     Home: {
//       screen: HomeScreen
//     },
//     Details: {
//       screen: DetailsScreen
//     }
//   },
//   {
//     initialRouteName: "Home",
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor: "#fec"
//       },
//       headerTintColor: "#555",
//       headerTitleStyle: {
//         fontWeight: "900"
//       }
//     }
//   }
// );

const AppNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Details: {
      screen: DetailsScreen
    }
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#fec"
      },
      headerTintColor: "#555",
      headerTitleStyle: {
        fontWeight: "900"
      }
    }
  }
);

const RootStack = createStackNavigator({
  Main: AppNavigator,
  MyModal: () => <Text>My Modal</Text>
}, {
  modo: "modal",
  headerMode: 'none'
});

export default createAppContainer(RootStack);
