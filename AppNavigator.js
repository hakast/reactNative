import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation';

import Home from './Home';
import Github from './components/Github';
import Cars from './components/Cars';
import Contact from './components/Contact';
import ReadMoreHomePage from './components/ReadMoreHomePage';

const AppNavigator = createStackNavigator({
    Home: { screen: Home },
    Github: { screen: Github },
    Cars: { screen: Cars },
    Contact: { screen: Contact },
    ReadMoreHomePage: { screen: ReadMoreHomePage},
});



const AppContainer = createAppContainer(AppNavigator);


export default AppContainer;