import React from 'react';
import {StyleSheet, View, Text, TextInput, Button, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';

const Login = props => {
	const [email, onChangeEmail] = React.useState('');
	const [password, onChangePassword] = React.useState('');

	/*const login = () => {
		auth()
			.signInWithEmailAndPassword(email, password)
			.then(() => {
				Alert.alert('Successfully signed in!');
			})
			.catch(error => {
				Alert.alert('Failed to sign in!');
			});
	};

	const register = () => {
		auth()
			.createUserWithEmailAndPassword(email, password)
			.then(() => {
				Alert.alert('User account created & signed in!');
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
	};*/

	return (
		<View>
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
					<Button
						title="Login"
						onPress={() => {
							auth()
								.signInWithEmailAndPassword(email, password)
								.then(() => {
									Alert.alert('Successfully signed in!');
								})
								.catch(error => {
									Alert.alert('Failed to sign in!');
								});
						}}
					/>
					<Button
						title="Register"
						onPress={() => {
							auth()
								.createUserWithEmailAndPassword(email, password)
								.then(() => {
									Alert.alert('User account created & signed in!');
								})
								.catch(error => {
									if (error.code === 'auth/email-already-in-use') {
										Alert.alert('That email seems to be already in use!');
									}

									if (error.code === 'auth/invalid-email') {
										Alert.alert('Try a valid email address!');
									}
									
                                    if (error.code === 'auth/weak-password') {
										Alert.alert('Try a stronger password!');
									}

									console.error(error);
								});
						}}
					/>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
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
	},
	buttons: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
});

export default Login;
