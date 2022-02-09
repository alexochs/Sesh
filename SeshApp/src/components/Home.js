import React from 'react';
import {
	SafeAreaView,
	StyleSheet,
	Button,
	Alert,
	ActivityIndicator,
	Text,
} from 'react-native';
import Greeting from './Greeting';

const Home = props => {
    console.log("Home props: " + JSON.stringify(props));
	return (
		<SafeAreaView style={styles.container}>
			<Greeting name={props.user.email} />
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

export default Home;
