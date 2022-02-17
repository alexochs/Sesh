import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const EventListPreview = props => {
	return (
		<View style={styles.container}>
			<Text style={styles.name}>{props.name}</Text>
			<Text style={styles.description}>{props.description}</Text>
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
});

export default EventListPreview;
