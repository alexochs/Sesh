import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const EventDetail = ({route, navigation}) => {
	const event = route.params;

	return (
		<View style={styles.container}>
			<Text style={styles.name}>{event.name}</Text>
			<Text style={styles.description}>{event.description}</Text>
			<Text style={styles.description}>Created by: {event.creator}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		margin: 12,
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
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
