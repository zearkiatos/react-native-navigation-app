import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/Screens/Home';
import DetailsScreen from './src/Screens/Details';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Details: {
    screen: DetailsScreen
  }
}, {
  initialRouteName: 'Home'
});



export default createAppContainer(AppNavigator);
