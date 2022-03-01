import React from 'react';
import auth from '@react-native-firebase/auth';
import {
	SafeAreaView,
	StyleSheet,
	Button,
	Alert,
	ActivityIndicator,
	Text,
	View,
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
			<View>
				<UserProfilePicture url={auth().currentUser.photoURL}/>
				<Text>{auth().currentUser.displayName}</Text>
			</View>
			<Text>Joined: N/A (fetch data)</Text>
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
