import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Home from '../screens/home';
import Details from '../screens/details';
import Search from '../screens/search';
import Favourites from '../screens/favourites';
import Profile from '../screens/profile'


const Bottomtabs = createBottomTabNavigator({
    Home:{
        screen: Home
    },
    Details:{
        screen: Details
    },
    Search:{
        screen: Search
    }
})

export default createStackNavigator({Bottomtabs})