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
import {db} from "../../firebase/config";
import { log } from "react-native-reanimated";


export const DefaultScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);

  const getAllPosts = async() => {

    console.log("db", db);
    const q = query(collection(db, "posts"));
    console.log("q", q);
    
        const unsubscribe = onSnapshot(
          q,
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
  }

  useEffect(() => {
    getAllPosts()
  }, []);


  const signOut = () => {
    dispatch(authSignOutUser());
  };

  const shouMap = (locate) => {
    console.log("route.params", locate);
    navigation.navigate("Map", {
      location: locate,
      // photo: route.params.photo,
    });
  };

  const shouComments = (id) => {
    navigation.navigate("Comments", {postId: id} )
  }
    // const shouComments = () => {
    //   navigation.navigate("Comments");
    // };

console.log("posts", posts);
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
          renderItem={({ item }) => (
            <View style={styles.containerPost}>
              <Image
                source={{
                  uri: item.photoProcesssd,
                }}
                style={styles.img}
              />
              <Text>{item.state.name}</Text>
              <View style={styles.boxLocation}>
                <TouchableOpacity
                  onPress={() => { shouComments(item.id); }}
                >
                  <EvilIcons name="comment" size={24} color="#BDBDBD" />
                  <Text>0</Text>
                </TouchableOpacity>

                <View>
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
                    <AntDesign
                      name="enviromento"
                      size={24}
                      color="#BDBDBD"

                      // style={styles.placeIcon}
                    />
                  </TouchableOpacity>
                  <Text style={styles.locationText}>{item.state.place}</Text>
                </View>
              </View>
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
  containerPost: {
    marginBottom: 43,
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
  },
  boxLocation: {
    display: "flex",
    // flex: 1,
  },
  locationMarker: {
    display: "flex",
    marginRight: 20,
  },
  locationText: {
    display: "flex",
  },
});
