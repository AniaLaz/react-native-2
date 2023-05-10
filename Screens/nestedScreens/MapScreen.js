import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

const initialState = {
  latitude: null,
  longitude: null,
};
export const MapScreen = ({ route }) => {
  [locationS, setLocationS] = useState(initialState);

  
  useEffect(() => {
    setLocationS(route.params.location);
    }, []);

  return (
    <View style={styles.containerPosts}>
      {locationS.latitude ? (
        <MapView
          style={styles.mapBox}
          initialRegion={{
            latitude: locationS.latitude,
            longitude: locationS.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: locationS.latitude,
              longitude: locationS.longitude,
            }}
          />
        </MapView>
      ) : (
        <Text>Карта не найдена, попробуйте еще раз</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  heder: {
    display: "flex",
    alignItems: "center",
    paddingBottom: 11,
    paddingTop: 35,

  },
  hederTitle: {
    fontFamily: "Roboto",
    fontSize: 17,
    color: " #212121",
  },
  futer: {
    height: 83,
    alignItems: "center",
    paddingTop: 9,
    paddingBottom: 34,
    borderWidth: 1,
    borderColor: "#BDBDBD",
  },
  containerPosts: {
    flex: 1,
    paddingTop: 32,
    paddingBottom: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },
  mapBox: {
    flex: 1,
  },
  btnHeder: {
    position: "absolute",
    top: 36,
    left: 18,
  },
});
