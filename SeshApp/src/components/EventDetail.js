import React from 'react';
import {StyleSheet, Text, View, Button, Alert} from 'react-native';
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

const EventDetail = ({route, navigation}) => {
	
	const eventDetails = route.params;
	const userIsCreator = eventDetails.creator === auth().currentUser.uid;

	const deleteEvent = () => {
		console.log("deleteEvent()");
		firestore()
		 .collection("events")
		 .doc(eventDetails.eventId)
		 .delete()
		 .then(() => {
			console.log("successfully deleted event " + eventDetails.eventId);
			navigation.pop();
		 })
		 .catch((err) => {
			 Alert.alert("Error deleting event :(");
			 console.error(err);
		 });
	};

	const logoutButton = userIsCreator ? 
		<Button
			title="Delete"
			onPress={deleteEvent}
		/> 
		: <Text></Text>;

	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Text style={styles.name}>{eventDetails.name}</Text>
				<Text style={styles.description}>{eventDetails.description}</Text>
				<Text style={styles.description}>Created by: {eventDetails.creator} ({eventDetails.dateCreated})</Text>
				{logoutButton}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 12,
	},
	content: {
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
