import React from 'react';
import {Text, StyleSheet, TextInput, Button, View, Alert } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import firestore from "@react-native-firebase/firestore";

const UserCreationName = ({navigation}) => {
	const [name, onChangeName] = React.useState(useSelector((state) => state.userCreationData.username));
	const dispatch = useDispatch();

	const validateName = async () => {
		const regexValid = String(name).toLowerCase().match(/^[a-z0-9/._-]+$/);
		if (!regexValid) {
			Alert.alert("You can only use letters, numbers and these special characters: . - _");
			return false;
		}

		if (name.length < 3) {
			Alert.alert("A bit short, isn't it? Try at least 3 characters.");
			return false;
		} 
		else if (name.length > 30) {
			Alert.alert("That's a long name... try less characters.");
			return false;
		}
		const user = await firestore().collection('takenUsernames').doc(name.toLowerCase()).get();
		if (!user.data()) {
			return true;
		}
		else if (user.data().taken) {
			Alert.alert("This username is already taken 😕");
			return false;
		}
		else {
			return true;
		}
	};

	const next = async () => {
		const available = await validateName();
		if (available) {
			dispatch({type: "USER_CREATION_USERNAME", payload: name.toLowerCase()});
			navigation.push("UserCreationPicture");
		}
	};

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.greeting}>
				<Text>What's your </Text>
				<Text style={styles.bold}>Name</Text>
				<Text>?</Text>
			</Text>
			<Text>That's your username you'll be known as</Text>
			<TextInput
				style={styles.input}
				onChangeText={onChangeName}
				value={name}
				placeholder="How do you want to be called?"
			/>
			<View style={{marginTop: 64}}>
				<Button
					title="Continue"
					onPress={() => next()}
				/>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	greeting: {
		fontSize: 30,
	},
	bold: {
		fontWeight: 'bold',
	},
	input: {
		height: 40,
		borderWidth: 2,
		borderColor: '#4570ff',
		marginTop: 12,
		padding: 10,
		borderRadius: 8,
		width: 250,
	},
});

export default UserCreationName;
