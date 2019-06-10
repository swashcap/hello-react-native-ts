import { createStackNavigator } from 'react-navigation';

import { DetailsScreen } from './components/screens/DetailsScreen';
import { ListScreen } from './components/screens/ListScreen';
import { HomeScreen } from './components/screens/HomeScreen';

export const App = createStackNavigator(
  {
    Details: DetailsScreen,
    List: ListScreen,
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
