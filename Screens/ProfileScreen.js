import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export const ProfileScreen = ({ navigation }) => {
  const openLink = () => navigation.navigate("Create");
  console.log(Platform.OS);
  return (
    <View style={styles.container}>
      <View style={styles.heder}>
        <Text style={styles.hederTitle}>Публикации</Text>
        <TouchableOpacity style={styles.btnHeder} onPress={openLink}>
          <AntDesign name="arrowleft" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </View>
      <View style={styles.containerPosts}>
        <Text>ProfileScreen</Text>
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
    color: "#212121",
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
  btnHeder: {
    marginLeft: 200,
    // position: "absolute",
    // top: 56,
    // left: 18,
  },
});
