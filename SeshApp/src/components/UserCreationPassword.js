import React from 'react';
import {Text, StyleSheet, TextInput, Button, View, Alert } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import auth from '@react-native-firebase/auth';
import firestore from "@react-native-firebase/firestore";
import storage from '@react-native-firebase/storage';

const UserCreationPassword = ({navigation}) => {
  	const [password, onChangePassword] = React.useState("");
  	const [passwordVerify, onChangePasswordVerify] = React.useState("");
	const mail = useSelector((state) => state.userCreationData.mail);
	const username = useSelector((state) => state.userCreationData.username);
	const photoURI = useSelector((state) => state.userCreationData.photo);
	const dispatch = useDispatch();

	const validatePassword = () => {
		if (password.length < 5) {
			Alert.alert("You should use a better password 👀");
			return false;
		}
		else if (password !== passwordVerify) {
			Alert.alert("Seems like your passwords do not match 🧐");
			return false;
		}
		else {
			return true;
		}
	};

	const createUser = () => {
		auth()
		.createUserWithEmailAndPassword(mail, password)
		.then(() => {
			firestore()
				.collection("takenUsernames")
				.doc(username.toLowerCase())
				.set({taken: true})
				.then(() => {
					auth().currentUser.updateProfile({
						displayName: username.toLowerCase(),
					})
					.then(() => {
						if (photoURI) {
							storage()
							.ref(username.toLowerCase() + "-pp.jpeg")
							.putFile(photoURI)
							.then(async () => {
								const url = await storage().ref(username.toLowerCase() + "-pp.jpeg").getDownloadURL();
								auth().currentUser.updateProfile({
									photoURL: url,
								})
								.then(() => {
									Alert.alert('Your account was successfully created!');
									dispatch({type: "CLEAR_USER_CREATION_DATA"});
								})
								.catch(error => {
									console.error(error);
								});
							})
							.catch(error => {
								console.error(error);
							});
						}
						else {
							Alert.alert('Your account was successfully created!');
							dispatch({type: "CLEAR_USER_CREATION_DATA"});
						}
					})
					.catch(error => {
						console.error(error);
					});
				})
				.catch(error => {
					console.error(error);
				});
		})
		.catch(error => {
			if (error.code === 'auth/email-already-in-use') {
				Alert.alert('The email address you entered is already in use!');
			}

			if (error.code === 'auth/invalid-email') {
				Alert.alert('The email address your entered is invalid!');
			}

			console.error(error);
		});
	};

	const next = () => {
		if (validatePassword()) {
			createUser();
		}
	};

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.greeting}>
				<Text>Set your </Text>
				<Text style={styles.bold}>Password</Text>
			</Text>
			<Text>Cause you know... safety first</Text>
			<TextInput
				style={styles.input}
				onChangeText={onChangePassword}
				value={password}
				placeholder="Enter your password"
				secureTextEntry={true}
			/>
			<TextInput
				style={styles.input}
				onChangeText={onChangePasswordVerify}
				value={passwordVerify}
				placeholder="Verify your password"
				secureTextEntry={true}
			/>
			<View style={{marginTop: 64}}>
				<Button
					title="Finish"
					onPress={next}
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

export default UserCreationPassword;
