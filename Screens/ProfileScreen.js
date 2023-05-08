import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { db } from "../firebase/config";
import { where, collection, onSnapshot, query } from "firebase/firestore";

export const ProfileScreen = ({ navigation }) => {
    const [posts, setPosts] = useState([]);
  const { userId } = useSelector((state) => state.auth);


  useEffect(() => {
    getUserPosts();
  }, []);

  const getUserPosts = async () => {
   await onSnapshot(query(collection(db, "posts"), where("userId", "==", userId)),
      (querySnapshot) => {
        const postsUserArr = [];
        querySnapshot.forEach((doc) => {
          postsUserArr.push({
            ...doc.data(),
            id: doc.id,
          });
        });
        setPosts(postsUserArr);
          },
      (error) => {
        console.log(error);
      }
    );
  };


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
            <FlatList
          data={posts}
          keyExtractor={(item, indx) => indx.toString()}
          renderItem={({ item }) => (
            <View style={styles.containerPostOne}>
              <Image
                source={{
                  uri: item.photoProcesssd,
                }}
                style={styles.img}
              />
            </View>
          )}
        />
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
  containerPostOne: {
    marginBottom: 25,
    
  },
  img: {
    borderRadius: 8,
    height: 240,
    width: 343,
  },
});
