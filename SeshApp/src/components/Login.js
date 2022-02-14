import React from 'react';
import {StyleSheet, View, Text, TextInput, Button, Alert, SafeAreaView, Pressable} from 'react-native';
import auth from '@react-native-firebase/auth';

const Login = ({navigation}) => {
	const [email, onChangeEmail] = React.useState('');
	const [password, onChangePassword] = React.useState('');

	const login = () => {
		auth()
			.signInWithEmailAndPassword(email, password)
			.then(() => {
				Alert.alert('You successfully signed in!');
			})
			.catch(error => {
				Alert.alert('Failed to sign in!');
			});
	};

	const register = () => {
		auth()
			.createUserWithEmailAndPassword(email, password)
			.then(() => {
				Alert.alert('Your account was successfully created!');
			})
			.catch(error => {
				if (error.code === 'auth/email-already-in-use') {
					Alert.alert('That email address is already in use!');
				}

				if (error.code === 'auth/invalid-email') {
					Alert.alert('That email address is invalid!');
				}

				console.error(error);
			});
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={{margin: 32}}>
				<Text style={styles.greeting}>
					<Text>Welcome to </Text>
					<Text style={styles.bold}>Sesh</Text>
				</Text>
				<Text>Your social app for local experiences</Text>
			</View>
			<View style={{margin: 32}}>
				<View style={{marginBottom: 32}}>
					<Text style={styles.bold}>Email</Text>
					<TextInput
						style={styles.input}
						onChangeText={onChangeEmail}
						value={email}
						placeholder="Enter your email"
					/>
				</View>
				<View style={{marginBottom: 32}}>
					<Text style={styles.bold}>Password</Text>
					<TextInput
						style={styles.input}
						onChangeText={onChangePassword}
						value={password}
						placeholder="Enter your password"
					/>
				</View>
				<View style={styles.buttons}>
					<Button title="Login" onPress={login} />
				</View>
				<View style={styles.newAccount}>
					<Text>Don't have an account? </Text>
					<Pressable onPress={() => navigation.push("UserCreationMail")}>
						<Text style={styles.newAccountText}>Make a new one.</Text>
					</Pressable>
				</View>
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
	newAccount: {
		flexDirection: "row",
		marginTop: 64,
	},
	newAccountText: {
		fontWeight: "bold",
		textDecorationLine: "underline",
	}
});

export default Login;
