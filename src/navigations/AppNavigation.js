import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements'
//components
import MyAccount from '../components/MyAccoun'
import Login from '../components/Login'
// Screens
import HomeScreen from '../screens/HomeScreen'
import Restaurant from '../screens/Restaurant'

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: "Inicio",
      tabBarIcon: ({ tintColor }) => <Icon name="home" type="FontAwesome" color={tintColor} size={25} />
    }
  },
  Restaurant: {
    screen: Restaurant,
    navigationOptions: {
      tabBarLabel: "Restaurante",
      tabBarIcon: ({ tintColor }) => <Icon name="restaurant" type="MaterialIcons" color={tintColor} size={25} />
    }
  },
  Account: {
    screen: Login,
    navigationOptions: {
      tabBarLabel: "Cuenta",
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" type="MaterialIcons" color={tintColor} size={25} />
    }
  }
});

export default createAppContainer(TabNavigator);