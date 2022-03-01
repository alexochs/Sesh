import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import firestore from "@react-native-firebase/firestore";

const EventListPreview = (props) => {
	const [username, setUsername] = React.useState('undefined');
	const [photoURL, setPhotoURL] = React.useState('undefined');

	const showDetails = () => {
		const eventDetails = {
			eventId: props.event.eventid,
			creator: props.event.creator,
			name: props.event.name,
			description: props.event.description,
			dateCreated: props.event.dateCreated,
		};
		props.navigation.push("EventDetail", eventDetails);
	};

	const fetchUserdata = () => {
		console.log("fetchUserdata() => " + props.event.creator + "\n");
		firestore()
			.collection('userdata')
			.doc(props.event.creator)
			.get()
			.then((userdataSnapshot) => {
				if (!userdataSnapshot.exists) {
					console.error("userdata not found");
					setUsername("undefined");
					setPhotoURL("undefined");
					return;
				}

				const data = userdataSnapshot.data();
				console.log("fetched data: " + data + "\n");
				setUsername(data.username);
				setPhotoURL(data.photoURL);
			});
	};

	React.useEffect(() => {
		console.log("EventListPreview useEffect()!");
		fetchUserdata();
	});

	return (
		<Pressable onPress={showDetails}>
			<View style={styles.container}>
				<Text style={styles.name}>{props.event.name}</Text>
				<Text style={styles.description}>{props.event.description}</Text>
				<Text style={styles.host}>Created by: {username}</Text>
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
	host: {
		fontSize: 12,
	},
});

export default EventListPreview;
