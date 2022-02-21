import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const EventDetail = props => {
	return (
		<View style={styles.container}>
			<Text style={styles.name}>{props.event.name}</Text>
			<Text style={styles.description}>{props.event.description}</Text>
			<Text style={styles.description}>Created by: {props.event.creator}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		margin: 12,
	},
	name: {
		fontSize: 24,
		fontWeight: "bold",
	},
	description: {
		fontSize: 16,
	},
	creator: {

	},	fontSize: 12,
});

export default EventDetail;
