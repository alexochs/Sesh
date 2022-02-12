import React from 'react';
import {Text, StyleSheet, TextInput, Button, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

const UserCreationName = ({navigation}) => {
	const [name, onChangeName] = React.useState("");

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.greeting}>
			<Text>What's your </Text>
			<Text style={styles.bold}>Name</Text>
			<Text>?</Text>
		</Text>
		<TextInput
			style={styles.input}
			onChangeText={onChangeName}
			value={name}
			placeholder="How do you want to be called?"
		/>
		<View style={{marginTop: 64}}>
			<Button
				title="Continue"
				onPress={() => navigation.push("UserCreationPicture")}
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

export default UserCreationName;
