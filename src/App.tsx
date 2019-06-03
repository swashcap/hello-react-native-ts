import { createStackNavigator } from 'react-navigation';

import { DetailsScreen } from './components/screens/DetailsScreen';
import { HomeScreen } from './components/screens/HomeScreen';

export const App = createStackNavigator(
  {
    Details: DetailsScreen,
    Home: HomeScreen
  },
  {
    cardStyle: {
      backgroundColor: 'white'
    },
    headerMode: 'none',
    initialRouteName: 'Home'
  }
);
