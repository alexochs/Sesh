import React from 'react';
import {Text, StyleSheet, TextInput, Button, View, Image, Pressable, Modal, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import UserProfilePicture from './UserProfilePicture';

const UserCreationPicture = ({navigation}) => {
	const [picture, setPicture] = React.useState(null);
	const [modalVisible, setModalVisible] = React.useState(false);

	const uploadFromLibrary = () => {
		const options = {
			mediaType: "photo",
			maxWidth: 480,
			maxHeight: 480,
			quality: 1,
		};

		launchImageLibrary(options, (result) => {
			if (result.errorCode) {
				Alert.alert(result.errorMessage);
			}
			else {
				setPicture(result.assets[0].uri);
				setModalVisible(false);
			}
		});
	};

	const uploadFromCamera = () => {
		const options = {
			cameraType: "front",
			saveToPhotos: true,
			maxWidth: 480,
			maxHeight: 480,
			quality: 1,
		};

		launchCamera(options, (result) => {
			if (result.errorCode) {
				Alert.alert("Error: " + result.errorCode);
			}
			else {
				setPicture(result.assets[0].uri);
				setModalVisible(false);
			}
		});
	};

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.greeting}>
				<Text>Upload your </Text>
				<Text style={styles.bold}>Picture</Text>
			</Text>
			<Text>Just tap on it, you can also skip this step</Text>
			<View style={{marginTop: 64}}>
				<Pressable onPress={() => setModalVisible(true)}>
					<UserProfilePicture key={picture} url={picture}/>
				</Pressable>
			</View>
			<View style={{marginTop: 64}}>
				<Button
					title="Continue"
					onPress={() => navigation.push('UserCreationPassword')}
				/>
			</View>
			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible}
			>
				<View style={styles.container}>
					<View style={styles.modalView}>
						<Text style={{marginBottom: 16, fontSize: 16}}>Upload picture from...</Text>
						<Button
							title="Photo Library"
							onPress={() => uploadFromLibrary()}
						/>
						<Button
							title="Camera"
							onPress={() => uploadFromCamera()}
						/>
						<View style={{marginTop: 32}}>
							<Button
								title="Close"
								onPress={() => setModalVisible(false)}
							/>
						</View>
					</View>
				</View>
			</Modal>
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
	modalView: {
		justifyContent: 'center',
		alignItems: 'center',
		margin: 20,
		backgroundColor: "white",
		borderRadius: 20,
		padding: 35,
		shadowColor: "#000",
		shadowOffset: {
		  width: 0,
		  height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	  },
});

export default UserCreationPicture;
