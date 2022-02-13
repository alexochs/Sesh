import React from 'react';
import {Text, StyleSheet, TextInput, Button, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import UserProfilePicture from './UserProfilePicture';

const UserCreationPicture = ({navigation}) => {
	const [picture, onChangePicture] = React.useState(null);

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.greeting}>
			<Text>Upload your </Text>
			<Text style={styles.bold}>Picture</Text>
		</Text>
		<Text>Don't worry, you can skip this step</Text>
		<View style={{marginTop: 64}}>
			<UserProfilePicture />
		</View>
		<View style={{marginTop: 64}}>
			<Button
				title="Continue"
				onPress={() => navigation.push('UserCreationPassword')}
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

export default UserCreationPicture;
