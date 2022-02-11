import React from 'react';
import {StyleSheet, Text} from 'react-native';

const Greeting = props => {
	return (
		<Text style={styles.greeting}>
			<Text>Hey, </Text>
			<Text style={styles.username}>{props.name} </Text>
			<Text>👋</Text>
		</Text>
	);
};

const styles = StyleSheet.create({
	greeting: {
		fontSize: 30,
	},
	username: {
		fontWeight: 'bold',
	},
});

export default Greeting;
