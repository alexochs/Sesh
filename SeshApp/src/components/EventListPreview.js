import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';

const EventListPreview = (props) => {
	const showDetails = () => {
		console.log("showDetails()");
		props.navigation.push("EventDetail", props.event);
	};

	return (
		<Pressable onPress={showDetails}>
			<View style={styles.container}>
				<Text style={styles.name}>{props.event.name}</Text>
				<Text style={styles.description}>{props.event.description}</Text>
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
