import Home from './src/Home';
import Result from './src/Result';
import {
  createStackNavigator,
} from 'react-navigation';

const App = createStackNavigator({
  HomePage: { screen: Home },
  ResultPage: { screen: Result },
});

export default App;
