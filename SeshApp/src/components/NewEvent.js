import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
} from 'react-native';
import firestore from "@react-native-firebase/firestore";

const NewEvent = () => {
  const [name, onChangeName] = React.useState('');
	const [description, onChangeDescription] = React.useState('');

  const createEvent = () => {
    firestore()
      .collection("events")
      .add({
        creator: 
      });
    console.log("Event created!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Create a new event</Text>
      <View>
        <View style={styles.input}>
          <Text style={styles.bold}>Name</Text>
          <TextInput
            style={styles.inputBox}
            onChangeText={onChangeName}
            value={name}
            placeholder="How should your event be called?"
          />
        </View>
        <View style={styles.input}>
          <Text style={styles.bold}>Description</Text>
          <TextInput
            style={styles.inputBox}
            onChangeText={onChangeDescription}
            value={description}
            placeholder="What are you up to?"
          />
        </View>
      </View>
      <Button
        title="Create"
        onPress={createEvent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-evenly',
		alignItems: 'center',
	},
  title: {
    fontWeight: "bold",
    fontSize: 30,
  },
  input: {
    marginVertical: 20,
  },
  inputBox: {
		height: 40,
		borderWidth: 2,
		borderColor: '#4570ff',
		marginTop: 12,
		padding: 10,
		borderRadius: 8,
    width: 250,
	},

  bold: {
		fontWeight: 'bold',
	},
});

export default NewEvent;
