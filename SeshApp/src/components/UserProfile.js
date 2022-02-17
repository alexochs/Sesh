import React from 'react';
import auth from '@react-native-firebase/auth';
import {
	SafeAreaView,
	StyleSheet,
	Button,
	Alert,
	ActivityIndicator,
	Text,
} from 'react-native';
import UserProfilePicture from './UserProfilePicture';

const UserProfile = props => {
	const logout = () => {
		auth()
			.signOut()
			.then(() => Alert.alert('You successfully signed out!'));
	};

	React.useEffect(() => {
		console.log(auth().currentUser);
	});

	return (
		<SafeAreaView style={styles.container}>
			<UserProfilePicture url={props.user.photoURL}/>
			<Text>UID: {props.user.uid}</Text>
			<Text>Username: {props.user.displayName}</Text>
			<Text>Email: {props.user.email}</Text>
			<Text>Is Email verified: {props.user.emailVerified}</Text>
			<Text>Phone number: {props.user.phoneNumber}</Text>
			<Text>Photo URL: {props.user.photoURL}</Text>
			<Button title="Log out" onPress={logout} />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default UserProfile;
