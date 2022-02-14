import React from 'react';
import {Text, StyleSheet} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

const UserCreation = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Text>UserCreation</Text>
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

export default UserCreation;
