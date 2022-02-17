import React from 'react';
import {
	SafeAreaView,
	View,
	StyleSheet,
	Button,
	Alert,
	ActivityIndicator,
	Text,
	FlatList
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack'; 
import firestore from "@react-native-firebase/firestore";
import { useDispatch, useSelector } from 'react-redux';
import Greeting from './Greeting';
import Map from "./Map";
import EventListPreview from './EventListPreview';

const Home = ({navigation}) => {
	const [events, setEvents] = React.useState([]);
	const dispatch = useDispatch();

	useFocusEffect(() => {
		console.log("fetching events");
		firestore()
			.collection('events')
			.get()
			.then((eventSnapshots) => {
				var eventsData = [];
				eventSnapshots.forEach((eventSnapshot) => {
					eventsData.push(eventSnapshot.data());
				});
				dispatch({type: "FETCHED_EVENTS", payload: eventsData});
				console.log(eventsData);
			});
	}, []);

	return (
		<View style={styles.container}>
			<Map />
			<Button title="New Event" onPress={() => navigation.navigate("NewEvent")}/>
			<FlatList
				data={useSelector((state) => state.events.events)}
				renderItem={({item}) => <EventListPreview name={item.name} description={item.description}/>}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
});

export default Home;
