import React from 'react';
import {
	SafeAreaView,
	View,
	StyleSheet,
	Button,
	Alert,
	ActivityIndicator,
	Text,
} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack'; 
import Greeting from './Greeting';
import Map from "./Map";

const Home = ({navigation}) => {
	return (
		<View style={styles.container}>
			<Map />
			<Button title="New Event" onPress={() => navigation.navigate("NewEvent")}/>
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
