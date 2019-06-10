import { createStackNavigator } from 'react-navigation';

import { DetailsScreen } from './components/screens/DetailsScreen';
import { HomeScreen } from './components/screens/HomeScreen';
import { InputScreen } from './components/screens/InputScreen';
import { ListScreen } from './components/screens/ListScreen';

export const App = createStackNavigator(
  {
    Details: DetailsScreen,
    Home: HomeScreen,
    Input: InputScreen,
    List: ListScreen
  },
  {
    cardStyle: {
      backgroundColor: 'white'
    },
    headerMode: 'none',
    initialRouteName: 'Home'
  }
);
