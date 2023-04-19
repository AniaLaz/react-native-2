import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { log } from "react-native-reanimated";

export const PostScreen = ({ navigation, route }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      console.log("route.params.photo", route.params.photo);
      console.log("route.params.state.name", route.params.state.name);
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);

  console.log("post", posts);

  const openLink = () => navigation.navigate("Create");
  console.log(Platform.OS);

  //   const openLink = () => navigation.navigate("Login");

  return (
    <View style={styles.container}>
      <View style={styles.heder}>
        <Text>
          <View style={styles.hederTitle}>
            <Text>Публикации</Text>
          </View>
          <View style={styles.btnLogout}>
            <TouchableOpacity onPress={openLink}>
              <MaterialIcons name="logout" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          </View>
        </Text>
      </View>

      <View style={styles.containerPosts}>
        <FlatList
          data={posts}
          keyExtractor={(item, indx) => indx.toString()}
          renderItem={({ item }) => (
            <View>
              <Image
                // source={{
                //   uri: route.params.photo,
                // }}
                source={{
                  uri: item.photo,
                }}
                style={{ height: 200, width: 350 }}
              />
              <Text>{item.state.name}</Text>
            </View>
          )}
        />
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
    marginLeft: 103,
  },
});
