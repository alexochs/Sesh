import React from 'react';
import {Text, View, StyleSheet, Alert} from 'react-native';
import MapView from 'react-native-maps';
import Marker from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

const Map = () => {
  const [geolocation, setGeolocation] = React.useState(null);

  const getLocation = () => {
    Geolocation.getCurrentPosition((position) => {
      console.log("Position => " + JSON.stringify(position));
      setGeolocation(position);
    },
    (error) => {
      console.error(error);
    });

    /*Geolocation.watchPosition((position) => {
      setGeolocation(position);
      console.log("Set Geolocation to: " + JSON.stringify(position));
    },
    (error) => {
      console.error(error);
    });*/
  };

  React.useEffect(() => {
    console.log("Map useEffect()");
    Geolocation.requestAuthorization("whenInUse").then((authResult) => {
      switch (authResult) {
        case "disabled": Alert.alert("Seems like you have location services turned off :/"); break;
        case "restricted": Alert.alert("Location services are set to restricted, this may cause problems..."); break;
        case "denied": Alert.alert("You have denied location access. We need this for the map to work, please turn it back on :)"); break;
        default: getLocation();
      }
    });
  }, []);

  if (geolocation) {
    return (
      <MapView
        style={styles.map}
        region={{
          latitude: geolocation.coords.latitude,
          longitude: geolocation.coords.longitude,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
       >
        <Marker
          key="0"
          coordinate={{ latitude : geolocation.coords.latitude , longitude : geolocation.coords.longitude }}
          title="Title"
          description="Description"
        />
      </MapView>
   );
  }
  else {
    return (
      <Text>Map loading...</Text>
    );
  }
};

const styles = StyleSheet.create({
    map: {
      width: 400,
      height: 400,
    },
   });

export default Map;
