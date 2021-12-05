import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
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
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`
        }
        else {
          iconName = `ios-options`
        }
        return <Ionicons name={iconName} size={20} tintColor={tintColor} />
      },
      tabBarOptions: {
        activeTintColor:
          navigation.state.routeName == "Home" ? "#e91e63" : "orange",
        inactiveTintColor: "black",
        labelStyle: {
          fontSize: 16
        },
        style: {
          backgroundColor: "#fec"
        }
      }
    })
  }
);

const RootStack = createStackNavigator(
  {
    Main: AppNavigator,
    MyModal: () => <Text>My Modal</Text>
  },
  {
    modo: "modal",
    headerMode: "none"
  }
);

export default createAppContainer(RootStack);
