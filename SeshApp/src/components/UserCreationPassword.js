import React from 'react';
import {Text, StyleSheet, TextInput, Button, View, Alert } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

const UserCreationPassword = ({navigation}) => {
  	const [password, onChangePassword] = React.useState("");
  	const [passwordVerify, onChangePasswordVerify] = React.useState("");

	const verifyPassword = () => {
		if (password !== passwordVerify) {
			Alert.alert("Passwords do not match! Try again...");
		}
		else {
			Alert.alert("User creation process finished!");
		}
	}

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.greeting}>
				<Text>Set your </Text>
				<Text style={styles.bold}>Password</Text>
			</Text>
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
					onPress={verifyPassword}
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
