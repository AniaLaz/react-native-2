import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { AntDesign } from "@expo/vector-icons";

const initialState = {
  latitude: "",
  longitude: "",
};
export const MapScreen = ({ navigation, route }) => {
  [location, setLocation] = useState(initialState);

  

  useEffect(() => {
    setLocation(route.params.location);
    console.log("locationgggggggg", location);
  }, []);
 console.log("locationgggggggg222", location);
  // console.log(route.params.location.latitude);
  const openLink = () => navigation.navigate("DefaultScreen");
  return (
    <View style={styles.containerPosts}>
      <View style={styles.heder}>
        <Text style={styles.hederTitle}>Карта</Text>
        <TouchableOpacity style={styles.btnHeder} onPress={openLink}>
          <AntDesign name="arrowleft" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </View>

      <MapView
        style={styles.mapBox}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
        />
      </MapView>
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
