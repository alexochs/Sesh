import React from "react";
import 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/Home';
import NewEvent from '../components/NewEvent';
import EventDetail from '../components/EventDetail';

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="NewEvent" component={NewEvent} />
          <Stack.Screen name="EventDetail" component={EventDetail} />
        </Stack.Navigator>
    );
};

export default HomeStack;
