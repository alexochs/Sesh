import React from 'react';
import auth from '@react-native-firebase/auth';
import {
	Image,
    StyleSheet,
    View
} from 'react-native';

const UserProfilePicture = props => {
    const [source, setSource] = React.useState(require("../images/default-user.png"));

    React.useEffect(() => {
        if (props.url) {
            setSource({uri: props.url});
        }
	}, [props.url]);

	return (
        <View style={styles.container}>
            <Image 
                source={source}
                key={source}
                style={styles.image}
            />
        </View>
	);
};

const styles = StyleSheet.create({
	image: {
		width: 150, 
        height: 150,
        borderRadius: 100,
        borderColor: "#4570ff",
        borderWidth: 2.5,
	},
    container: {
        shadowColor: "#000",
		shadowOffset: {
		  width: 0,
		  height: 4
		},
		shadowOpacity: 0.25,
		shadowRadius: 8,
    }
});

export default UserProfilePicture;
