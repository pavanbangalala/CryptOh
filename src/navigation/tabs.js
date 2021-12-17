import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';

const bottomStack = createBottomTabNavigator();

const tabs = () => (
  <bottomStack.Navigator screenOptions={{headerShown: false}}>
    <bottomStack.Screen name="Home" component={Home} />
    <bottomStack.Screen name="Portfolio" component={Home} />
    <bottomStack.Screen name="Transaction" component={Home} />
    <bottomStack.Screen name="Prices" component={Home} />
    <bottomStack.Screen name="Settings" component={Home} />
  </bottomStack.Navigator>
);

export default tabs;
