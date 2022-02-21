import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';

const EventListPreview = props => {
	const showDetails = () => {
		console.log("showDetails()");
	};

	return (
		<Pressable onPress={showDetails}>
			<View style={styles.container}>
				<Text style={styles.name}>{props.name}</Text>
				<Text style={styles.description}>{props.description}</Text>
			</View>
		</Pressable>
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
