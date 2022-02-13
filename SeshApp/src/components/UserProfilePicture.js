import React from 'react';
import auth from '@react-native-firebase/auth';
import {
	Image,
    StyleSheet
} from 'react-native';

const UserProfilePicture = props => {
	return (
        <Image 
            source={require('../images/default-user.png')}
            style={styles.image}
        />
	);
};

const styles = StyleSheet.create({
	image: {
		width: 150, 
        height: 150,
        borderRadius: 100,
        borderColor: "#4570ff",
        borderWidth: 2,
	},
});

export default UserProfilePicture;
