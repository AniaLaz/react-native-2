import React, { useState } from "react";
import { StyleSheet, Text, View, Platform } from "react-native";

export const CreatePostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.heder}>
        <Text style={styles.hederTitle}>Публикации</Text>
      </View>
      <View style={styles.containerPosts}>
        <Text>CreatePostsScreen</Text>
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
});