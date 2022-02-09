import React, {useState, useEffect} from 'react';
import {
	SafeAreaView,
	StyleSheet,
	Button,
	Alert,
	ActivityIndicator,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Main from './src/components/Main';
import Login from './src/components/Login';

import auth from '@react-native-firebase/auth';

const App = () => {
	const [initializing, setInitializing] = useState(true);
	const [user, setUser] = useState();

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

	// Loader
	if (initializing) {
		return (
			<SafeAreaView style={styles.container}>
				<ActivityIndicator size="large" />
			</SafeAreaView>
		);
	}

	// Landing screen
	if (!user) {
		return (
			<SafeAreaView style={styles.container}>
				<Login />
			</SafeAreaView>
		);
	}

	// Main screen
	return (
		<NavigationContainer>
			<Main user={user} />
		</NavigationContainer>
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
