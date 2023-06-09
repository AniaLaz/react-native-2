import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ImageBackground,
  Keyboard,
} from "react-native";
import {  useDispatch} from "react-redux";
import { authSignUpUser } from "../redux/auth/authOperations";

const initialState = {
  login: "",
  email: "",
  password: "",
};

export const FormRegistration = ({ navigation }) => {
  // console.log(Platform.OS);
  const [state, setState] = useState(initialState);
  const [isShowKeyboard, setisShowKeyboard] = useState(false);

  const dispatch = useDispatch();
  
  const openLink = () => navigation.navigate("Login");
  const hendleSubmit = () => {
    setisShowKeyboard(false);
    Keyboard.dismiss();
    dispatch(authSignUpUser(state));
    setState(initialState);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.imageBg}
          source={require("../images/photoBG.jpg")}
        >
          <View style={styles.form}>
            <View
              style={{
                ...styles.formContaner,
                marginBottom: isShowKeyboard ? 20 : 78,
              }}
            >
              <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
              >
                <Text style={styles.title}>Регистрация</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, login: value }))
                  }
                  value={state.login}
                  placeholder="login"
                  onFocus={() => setisShowKeyboard(true)}
                />
                <TextInput
                  style={styles.input}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                  value={state.email}
                  placeholder="email"
                  onFocus={() => setisShowKeyboard(true)}
                />
                <TextInput
                  style={styles.inputLast}
                  secureTextEntry={true}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, password: value }))
                  }
                  value={state.password}
                  placeholder="password"
                  onFocus={() => setisShowKeyboard(true)}
                  // inlineImageRight="search_icon"
                />

                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.btnForm}
                  onPress={hendleSubmit}
                >
                  <Text style={styles.btnTitle}>Зарегистрироваться</Text>
                </TouchableOpacity>

                <View style={styles.linkContaner}>
                  <Text style={styles.linkText}>
                    Уже есть аккаунт?
                    <TouchableOpacity onPress={openLink}>
                      <Text style={styles.link}>Войти</Text>
                    </TouchableOpacity>
                  </Text>
                </View>
              </KeyboardAvoidingView>
            </View>
          </View>
        </ImageBackground>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageBg: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "flex-end",
  },

  form: {
    // flex: 1,
    paddingTop: 92,
    marginTop: 263,
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  formContaner: {
    position: "relative",
    marginHorizontal: 16,
  },
  imgBox: {
    position: "absolute",
    top: 150,
    width: 120,
    height: 120,
    backgroundColor: "E8E8E8",
  },
  input: {
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: " #E8E8E8",
    borderRadius: 10,
    backgroundColor: "#F6F6F6",
    marginBottom: 16,
  },
  inputLast: {
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: " #E8E8E8",
    borderRadius: 10,
    backgroundColor: "#F6F6F6",
    marginBottom: 43,
  },
  title: {
    paddingVertical: 8,
    textAlign: "center",
    fontSize: 30,
  },
  btnForm: {
    borderWidth: 1,
    borderRadius: 100,
    borderColor: "#FFFFFF",
    backgroundColor: "#FF6C00",
    marginBottom: 16,
  },
  btnTitle: {
    paddingVertical: 16,
    textAlign: "center",
    fontSize: 16,
    color: "#FFFFFF",
  },
  linkContaner: {},
  link: {
    marginLeft: 10,
    fontFamily: "Roboto",
    fontSize: 16,
    color: "#1B4371",
  },
  linkText: {
    fontFamily: "Roboto",
    textAlign: "center",
    fontSize: 16,
    color: "#1B4371",
  },
});
