import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/Screens/Home";
import DetailsScreen from "./src/Screens/Details";

const AppNavigator = createStackNavigator(
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

export default createAppContainer(AppNavigator);
