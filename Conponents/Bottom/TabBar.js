import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from '../Home';
import BottomTabBar from './BottomTabBar'

const TabBarComponent = (props) => <BottomTabBar {...props} />;

export default bottomStack = createBottomTabNavigator({
    Home: { screen: Home },
},
    {
        tabBarComponent: (props) => (
            <TabBarComponent {...props} style={{ borderTopColor: '#605F60' }} />
        ),
    });