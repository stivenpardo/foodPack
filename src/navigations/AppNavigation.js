import React from 'react'
import { Text, View } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen'
import Restaurant from '../screens/Restaurant'

const TabNavigator = createBottomTabNavigator({
    Home: HomeScreen,
    Restaurant:Restaurant 
  }
  );
  
  export default createAppContainer(TabNavigator);