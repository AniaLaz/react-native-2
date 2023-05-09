import React, { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  doc,
} from "firebase/firestore";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  FlatList,
  Image,
  Alert,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { authSignOutUser } from "../../redux/auth/authOperations";
import { useDispatch } from "react-redux";
import { db } from "../../firebase/config";
import { log } from "react-native-reanimated";

export const DefaultScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
   

  useEffect(() => {
    getAllPosts();

  }, []);

  console.log("posts", posts);

  

  const getAllPosts = async () => {
    const unsubscribe = await onSnapshot(
      query(collection(db, "posts")),
      (querySnapshot) => {
        const photoArr = [];
        querySnapshot.forEach((doc) => {
          photoArr.push({
            ...doc.data(),
            id: doc.id,
          });
        });
        setPosts(photoArr);
      },
      (error) => {
        console.log(error);
      }
    );
    return () => {
      unsubscribe();
    };
  };

  const signOut = () => {
    dispatch(authSignOutUser());
  };

  const shouMap = (locate) => {
    navigation.navigate("Map", {
      location: locate,
    });
  };

  const shouComments = (id) => {
    navigation.navigate("Comments", { postId: id });
  };

  return (
    <View style={styles.container}>
      <View style={styles.heder}>
        <Text>
          <View style={styles.hederTitle}>
            <Text>Публикации</Text>
          </View>
          <View style={styles.btnLogout}>
            <TouchableOpacity onPress={signOut}>
              <MaterialIcons name="logout" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          </View>
        </Text>
      </View>

      <View style={styles.containerPosts}>
        <FlatList
          data={posts}
          keyExtractor={(item, indx) => indx.toString()}
          renderItem={({ item }) => {
            console.log("item.state.name", item.state);
            return (
              <View style={styles.containerPost}>
                <Image
                  source={{
                    uri: item.photoProcesssd,
                  }}
                  style={styles.img}
                />
                <Text style={styles.name}>{item.state.name}</Text>

                <View style={styles.containerInvo}>
                  <View style={styles.boxComments}>
                    <TouchableOpacity
                      onPress={() => {
                        shouComments(item.id);
                      }}
                    >
                      <EvilIcons
                        name="comment"
                        size={24}
                        color="#BDBDBD"
                        style={styles.comments}
                      />
                    </TouchableOpacity>
                    <Text>0</Text>
                  </View>
                  <View style={styles.boxLocation}>
                    <TouchableOpacity
                      style={styles.locationMarker}
                      onPress={() => {
                        if (item.coordsLoc) {
                          shouMap(item.coordsLoc);
                        } else {
                          Alert.alert("локайия отсутствует");
                        }
                      }}
                    >
                      <AntDesign name="enviromento" size={24} color="#BDBDBD" />
                    </TouchableOpacity>
                    <Text style={styles.locationText}>{item.state.place}</Text>
                  </View>
                </View>
              </View>
            );
          }}
        />

        <Text>PostScreen</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heder: {
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
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerPosts: {
    alignItems: "center",
    paddingTop: 32,
    paddingBottom: 80,
    paddingLeft: 16,
    paddingRight: 16,
  },

  containerInvo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  containerPost: {
    marginBottom: 43,
  },
  name: {
    marginBottom: 11,
  },
  btn: {
    width: 70,
    height: 40,
    backgroundColor: "#FF6C00",
  },
  btnLogout: {
    marginLeft: 103,
  },
  img: {
    borderRadius: 8,
    height: 240,
    width: 343,
    marginBottom: 8,
  },
  boxLocation: {
    flexDirection: "row",
    alignItems: "center",
  },
  boxComments: {
    flexDirection: "row",
    alignItems: "center",
  },
  comments: {
    marginRight: 9,
  },

  locationMarker: {
    marginRight: 8,
  },
  locationText: {
    // display: "flex",
  },
});
