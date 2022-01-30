import React, {Component, useState, useEffect} from 'react';
import {
	SafeAreaView,
	StyleSheet,
	View,
	Button,
	Text,
	Alert,
	ActivityIndicator,
} from 'react-native';
import {useDispatch} from 'react-redux';

import Counter from './src/components/Counter';
import Greeting from './src/components/Greeting';
import Login from './src/components/Login';

import {setUser} from './src/actions/user';

import auth from '@react-native-firebase/auth';

const App = () => {
	const [initializing, setInitializing] = useState(true);
	const [user, setUser] = useState();

	const dispatch = useDispatch();

	/*const logout = () => {
		auth()
			.signOut()
			.then(() => Alert.alert('User signed out!'));
	};*/

	// Handle user state changes
	function onAuthStateChanged(user) {
		setUser(user);
		if (initializing) {
			setInitializing(false);
		}
	}

	useEffect(() => {
		const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
		return subscriber; // unsubscribe on unmount
	}, []);

	if (initializing) {
		return (
			<SafeAreaView style={styles.container}>
				<ActivityIndicator size="large" />
			</SafeAreaView>
		);
	}

	if (!user) {
		return (
			<SafeAreaView style={styles.container}>
				<Login />
			</SafeAreaView>
		);
	}

	return (
		<SafeAreaView style={styles.container}>
			<Greeting name="User" />
			<Counter />
			<Button
				title="Log out"
				onPress={() => {
					auth()
						.signOut()
						.then(() => Alert.alert('User signed out!'));
				}}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default App;
