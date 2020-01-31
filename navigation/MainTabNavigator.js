import React from 'react'
import  { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Home from '../screens/home'
import Profile from '../screens/profile'
import Favorite from '../screens/favourites'




const HomeStack = createStackNavigator(
    {
        Home: Home,
    },
    config
);

HomeStack.path = '';




const Profilestack= createStackNavigator(
    {
        Profile: Profile,
    },
    config
);

Profilestack.path = '';


const Favoritestack = createStackNavigator(
    {
        Favorite: Favorite,
    },
    config
);

Favoritestack.path = '';



const tabNavigator = createBottomTabNavigator({
    HomeStack,
    Profilestack,
    Favoritestack,
});

tabNavigator.path = '';

export default tabNavigator;


