import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

const initialState = {
  latitude: null,
  longitude: null,
};
export const MapScreen = ({ navigation, route }) => {
  [locationS, setLocationS] = useState(initialState);

  console.log("params maps", route.params);
  console.log("???????????",route.params.location);
  
  useEffect(() => {
    console.log("??????2222", route.params.location);
    setLocationS(route.params.location);
    }, []);

  console.log("&&&&&&&&&&&&", locationS);
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
    //   height: 88,
    display: "flex",
    alignItems: "center",
    paddingBottom: 11,
    paddingTop: 35,
    // borderWidth: 1,
    // borderColor: "#BDBDBD",
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
