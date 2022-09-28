import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './Home';
import UserProfile from './UserProfile';
import HomeStack from '../routes/homeStack';

const Tab = createBottomTabNavigator();

const Main = props => {
	console.log('Main props: ' + JSON.stringify(props));

	return (
		<Tab.Navigator screenOptions={{headerShown: false}}>
			<Tab.Screen
			name="HomeStack"
			component={HomeStack} />

			<Tab.Screen
			name="Profile"
			children={() => <UserProfile user={props.user}/>}/>
		</Tab.Navigator>
	);
};

export default Main;
