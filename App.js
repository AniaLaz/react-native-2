// import { StatusBar } from "expo-status-bar";
// import {
//   StyleSheet,
//   View,
//   ImageBackground,
//   TouchableWithoutFeedback,
//   Keyboard,
// } from "react-native";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Main from "./component/Main/";

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
