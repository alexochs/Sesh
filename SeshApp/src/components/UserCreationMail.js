import React from 'react';
import {Text, StyleSheet, TextInput, Button, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

const UserCreationMail = ({navigation}) => {
	const [mail, onChangeMail] = React.useState("");

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
		/>
		<View style={{marginTop: 64}}>
			<Button
				title="Continue"
				onPress={() => navigation.push("UserCreationName")}
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
