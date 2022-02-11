import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

const Map = () => {
  return (
     <MapView
       style={styles.map}
       region={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
      />
  );
};

const styles = StyleSheet.create({
    map: {
      width: 400,
      height: 400,
    },
   });

export default Map;
