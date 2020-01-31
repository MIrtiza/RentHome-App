import { createSwitchNavigator } from 'react-navigation'

import MainTabNavigator from './MainTabNavigator'

const switchNavigator = createSwitchNavigator({
    Main: MainTabNavigator,
});

switchNavigator.path= '';

export default switchNavigator