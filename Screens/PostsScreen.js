import React, { useState } from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

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
        <Text>
          <View style={styles.hederTitle}>
            <Text>Публикации</Text>
          </View>
          <View>
            <MaterialIcons
              style={styles.btnLogout}
              name="logout"
              size={24}
              color="#BDBDBD"
            />
          </View>
        </Text>
      </View>

      <View style={styles.containerPosts}>
        <Text>PostScreen</Text>
      </View>
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
  btnLogout: {
    marginLeft: "auto",
  },
});
