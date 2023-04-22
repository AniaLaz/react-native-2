import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import * as MediaLibrary from "expo-media-library";
import { Camera } from "expo-camera";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import * as Location from "expo-location";

import { log } from "react-native-reanimated";
const initialState = {
  name: "",
  place: "",
};

export const CreatePostsScreen = ({ navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [cameraRef, setCameraRef] = useState(null);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }
    })();
  }, []);

  const takePhoto = async () => {
    console.log("photooooooooooooooo");
    const photo = await cameraRef.takePictureAsync();
    // const location = await Location.getCurrentPositionAsync({});
    // console.log("location", location);
    // console.log("photo.uri", photo.uri);
    // await MediaLibrary.createAssetAsync(photo.uri);
    setPhoto(photo.uri);
  };

  const sendPhoto = async () => {
    console.log("sendPhoto");
    const location = await Location.getCurrentPositionAsync({});
    console.log("location", location);
    const coords = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
    console.log(coords);
    // setLocations(coords);
    navigation.navigate("DefaultScreen", {
      photo: photo,
      state: state,
      location: coords,
    });
    setPhoto(null);
    setState(initialState);
    setIsShowKeyboard(false);

    // console.log("state", state);
  };
  const deletePhoto = () => {
    setPhoto(null);
    setIsShowKeyboard(false);
     Keyboard.dismiss();
  };
  const makePhoto = () => {
      setIsShowKeyboard(false);
      Keyboard.dismiss();
}
  const openLink = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.heder}>
        <Text style={styles.hederTitle}>Создать публикацию</Text>
        <TouchableOpacity style={styles.btnHeder} onPress={openLink}>
          <AntDesign name="arrowleft" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </View>

      <View style={styles.containerPosts}>
        {!isShowKeyboard && (
          <View>
            <View style={styles.cameraContaner}>
              {photo ? (
                <View>
                  <Image
                    style={{ width: "100%", height: 240 }}
                    source={{ uri: photo }}
                  />
                </View>
              ) : (
                <Camera style={styles.camera} ref={setCameraRef}>
                  <TouchableOpacity onPress={takePhoto}>
                    <View style={styles.btnCamrta}>
                      <Fontisto name="camera" size={20} color="#BDBDBD" />
                    </View>
                  </TouchableOpacity>
                </Camera>
              )}
            </View>
          </View>
        )}
        {photo ? (
          <TouchableOpacity onPress={() => deletePhoto()}>
            <Text style={styles.textAnderPhoto}>Редактировать фото</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => makePhoto()}>
            <Text style={styles.textAnderPhoto}>Загрузите фото</Text>
          </TouchableOpacity>
        )}

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "padding"}
        >
          <View style={{ marginBottom: isShowKeyboard ? 20 : 30 }}>
            <TextInput
              style={styles.input}
              onChangeText={(value) =>
                setState((prevState) => ({ ...prevState, name: value }))
              }
              onFocus={() => {
                setIsShowKeyboard(true);
              }}
              value={state.name}
              placeholder="Название "
            />
            <View>
              <AntDesign
                name="enviromento"
                size={24}
                color="#BDBDBD"
                style={styles.placeIcon}
              />
              <TextInput
                style={styles.inputPlace}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, place: value }))
                }
                value={state.place}
                placeholder="Местность "
                onFocus={() => {
                  setIsShowKeyboard(true);
                }}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
        {photo && state ? (
          <TouchableOpacity onPress={sendPhoto} disabled={false}>
            <View style={styles.btnSubmit}>
              <Text style={styles.btnSubmitText}>Опубликовать</Text>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={sendPhoto} disabled={true}>
            <View style={styles.btnNotSubmit}>
              <Text style={styles.btnNotSubmitText}>Опубликовать</Text>
            </View>
          </TouchableOpacity>
        )}
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
    position: "relative",
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
  btnHeder: {
    position: "absolute",
    top: 56,
    left: 18,
  },
  cameraContaner: {
    height: 240,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 8,
  },
  camera: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 240,
  },
  btnCamrta: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    width: 60,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 50,
    backgroundColor: "#FFFFFF",
  },
  btnSubmit: {
    paddingTop: 16,
    paddingBottom: 16,
    borderWidth: 1,
    borderColor: "#FF6C00",
    borderRadius: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF6C00",
  },
  btnNotSubmit: {
    paddingTop: 16,
    paddingBottom: 16,
    borderWidth: 1,
    borderColor: "#F6F6F6",
    borderRadius: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "##F6F6F6",
  },
  btnSubmitText: {
    color: "#FFFFFF",
    fontFamily: "Roboto",
    fontSize: 16,
  },
  btnNotSubmitText: {
    color: "#BDBDBD",
    fontFamily: "Roboto",
    fontSize: 16,
  },
  input: {
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
    marginBottom: 32,
  },
  inputPlace: {
    paddingLeft: 30,
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
    marginBottom: 32,
  },
  placeIcon: {
    position: "absolute",
  },

  textAnderPhoto: {
    color: "#BDBDBD",
    fontSize: 16,
    marginBottom: 48,
  },
});
