import { createStackNavigator } from 'react-navigation-stack';
import {NavigationActions, navigationOption, navigator} from 'react-navigation';


import Main from './pages/main';
import Product from './pages/product';


export default createStackNavigator({
    Main,
    Product
}, 
{
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#42301C"
        },
        headerTintColor: "#FFF"
    },
});