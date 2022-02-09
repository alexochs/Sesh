import React from 'react';

import {Button, Alert} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './Home';
import UserProfile from './UserProfile';

const Tab = createBottomTabNavigator();

const Main = props => {
	console.log('Main props: ' + JSON.stringify(props));

	return (
		<Tab.Navigator>
			<Tab.Screen
			name="Home"
			children={() => <Home user={props.user}/>}/>

			<Tab.Screen
			name="Profile"
			children={() => <UserProfile user={props.user}/>}/>
		</Tab.Navigator>
	);
};

export default Main;
