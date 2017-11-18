import {
  StackNavigator,
} from 'react-navigation';
import { Main } from '../MobileApp/Main';
import { Profile } from '../MobileApp/Profile'

const App = StackNavigator({
  Main: {screen: Main},
  Profile: {screen: Profile},
});
   
