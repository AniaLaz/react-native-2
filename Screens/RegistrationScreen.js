import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  Linking,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";

const initialState = {
  login: "",
  email: "",
  password: "",
};

export const Form = () => {
  console.log(Platform.OS);
  const [state, setState] = useState(initialState);
  const [isShowKeyboard, setisShowKeyboard] = useState(false);
  const link = "https://www.google.com";
  const openLink = () => Linking.openURL(link);
  const keyboardHit = () => {
    setisShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };
  return (
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
            onPress={keyboardHit}
          >
            <Text style={styles.btnTitle}>Зарегистрироваться</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={openLink}>
            <Text style={styles.link}>Уже есть аккаунт? Войти</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  link: {
    fontFamily: "Roboto",
    textAlign: "center",
    fontSize: 16,
    color: "#1B4371",
  },
});
