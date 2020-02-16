import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements'
//Navigations
import StackMyAccount from './stackAccount'
// Screens
import HomeScreen from '../screens/HomeScreen'
import Restaurant from '../screens/Restaurant'

const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: "Inicio",
            tabBarIcon: ({ tintColor }) => < Icon name = "home"
            type = "FontAwesome"
            color = { tintColor }
            size = { 25 }
            />
        }
    },
    Restaurant: {
        screen: Restaurant,
        navigationOptions: {
            tabBarLabel: "Restaurante",
            tabBarIcon: ({ tintColor }) => < Icon name = "restaurant"
            type = "MaterialIcons"
            color = { tintColor }
            size = { 25 }
            />
        }
    },
    Account: {
        screen: StackMyAccount,
        navigationOptions: {
            tabBarLabel: "Cuenta",
            tabBarIcon: ({ tintColor }) => < Icon name = "account-circle"
            type = "MaterialIcons"
            color = { tintColor }
            size = { 25 }
            />
        }
    }
}, {
    initialRouteName: 'Account',
    tabBarOptions: {
        activeTintColor: '#4567ff',
        inactiveTintColor: '#444'

    }
});

export default createAppContainer(TabNavigator);