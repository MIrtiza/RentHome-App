import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Permissions from 'expo-permissions';


import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Icon from 'react-native-vector-icons/FontAwesome';

import Splash from './screens/splash';
import Register from './screens/register';
import Login from './screens/login';
import Home from './screens/home';
import Details from './screens/details';
import Search from './screens/search';
import Favourites from './screens/favourites';
import Profile from './screens/profile'
import Signup from './screens/Signup'
import Forgot from './screens/forgot'

import FavHome from './asyncStorage/favHome'
import Bookmarked from './asyncStorage/BookmarkDetails'




const MainTabs = createBottomTabNavigator({
  Home:{
    screen: Home,
    navigationOptions: {
      tabBarLabel:"",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" size={25} color="#ddd" />
      )
    }
  },

  Details:{
    screen: Details,
    navigationOptions: {
      tabBarLabel:"",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="th-large" size={25} color="#ddd" />
      )
    }
  },

  Favourites:{
    screen: Favourites,
    navigationOptions: {
      tabBarLabel:"",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="bookmark" size={25} color="#ddd" />
      )
    }
  },
  FavHome:{
    screen: FavHome,
    navigationOptions: {
      tabBarLabel:"fav",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="bookmark" size={25} color="#ddd" />
      )
    }
  },

  Profile:{
    screen: Profile,
    navigationOptions: {
      tabBarLabel:"",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="user" size={25} color="#ddd" />
      )
    }
  },
  Search:{
    screen: Search,
    navigationOptions: {
      tabBarLabel:"",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="search" size={25} color="#ddd" />
      )
    }
  }

})


const MainNavigator = createStackNavigator({
  Splash: {screen: Splash},
  Register:{screen: Register},
  Login:{screen:Login},
  Home:{screen:MainTabs, navigationOptions:{header:null}},
  Details:{screen:MainTabs, navigationOptions:{header:null}},
  Search:{screen:Search},
  Favourites:{screen:MainTabs, navigationOptions:{header:null}},
  Profile:{screen:MainTabs, navigationOptions:{header:null}},
  Signup:{screen: Signup},
  Forgot:{screen: Forgot},
  Bookmarked: {screen: Bookmarked}
});

const Navigate = createAppContainer(MainNavigator);

export default Navigate