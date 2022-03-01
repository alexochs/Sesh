import React from 'react';
import {Text, StyleSheet, TextInput, Button, View, Alert } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

const UserCreationMail = ({navigation}) => {
	const [mail, onChangeMail] = React.useState(useSelector((state) => state.userCreationData.mail));
	const dispatch = useDispatch();

	const validateEmail = () => {
		return String(mail)
		  .toLowerCase()
		  .match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		  );
	  };

	const next = () => {
		if (validateEmail()) {
			dispatch({type: "USER_CREATION_MAIL", payload: mail});
			navigation.push("UserCreationName");
		}
		else {
			Alert.alert("Your mail seems to be invalid 🤨");
		}
	};

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.greeting}>
				<Text>Can I have your </Text>
				<Text style={styles.bold}>Mail</Text>
				<Text>?</Text>
			</Text>
			<Text>Your account is based on your mail address</Text>
			<TextInput
				style={styles.input}
				onChangeText={onChangeMail}
				value={mail}
				placeholder="Type in your mail address"
				autoCapitalize='none'
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

export default UserCreationMail;
