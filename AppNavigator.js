import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation';

import Home from './Home';
// import Friends from './Friends';
import FirstComp from './FirstComp';
import SecComp from './SecComp';
import ThirdComp from './ThirdComp';

const AppNavigator = createStackNavigator({
    Home: { screen: Home },
    // Friends: { screen: Friends },
    FirstComp: { screen: FirstComp },
    SecComp: { screen: SecComp },
    ThirdComp: { screen: ThirdComp },
});



const AppContainer = createAppContainer(AppNavigator);


export default AppContainer;