import { 
    createAppContainer,
    createStackNavigator } from 'react-navigation';

import Home from './Home';
import Github from './components/Github';
import Cars from './components/Cars';
import Contact from './components/Contact';
import ReadMoreHomePage from './components/ReadMoreHomePage';
import Menu from './components/Menu';
import Login from './admin/Login';
import AfterLogin from './admin/AfterLogin';

const AppNavigator = createStackNavigator({
    Home: { screen: Home },
    Github: { screen: Github },
    Cars: { screen: Cars },
    Contact: { screen: Contact },
    ReadMoreHomePage: { screen: ReadMoreHomePage },
    Menu: { screen: Menu },
    Login: { screen: Login },
    AfterLogin: { screen: AfterLogin },
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;