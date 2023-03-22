import React, { useState } from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";

const initialState = {
  post: "",
};

export const PostScreen = () => {
  console.log(Platform.OS);
  // const [state, setState] = useState(initialState);

  //   const openLink = () => navigation.navigate("Login");

  return (
    <View style={styles.container}>
      <View style={styles.heder}>
        <Text style={styles.hederTitle}>
          Публикации
          <AntDesign name="appstore-o" size={24} color="black" />
          <Ionicons name="md-checkmark-circle" size={32} color="green" />
        </Text>
      </View>

      <View style={styles.containerPosts}>
        <Text>PostScreen</Text>
      </View>

      {/* <View style={styles.futer}>
        <Text>futer</Text>
        <View style={styles.btn}>
          <Text>+</Text>
        </View>
      </View> */}
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
    paddingTop: 55,
    borderWidth: 1,
    borderColor: "#BDBDBD",
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
  btn: {
    width: 70,
    height: 40,
    backgroundColor: "#FF6C00",
  },
});
