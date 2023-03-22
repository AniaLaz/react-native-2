// import { StatusBar } from "expo-status-bar";
// import {
//   StyleSheet,
//   View,
//   ImageBackground,
//   TouchableWithoutFeedback,
//   Keyboard,
// } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { userRouter } from "./router";

export default function App() {
  const routing = userRouter(true);
  return <NavigationContainer>{routing}</NavigationContainer>;
}
