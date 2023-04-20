// import { StatusBar } from "expo-status-bar";
// import {
//   StyleSheet,
//   View,
//   ImageBackground,
//   TouchableWithoutFeedback,
//   Keyboard,
// } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import UserRouter from "./router";

export default function App() {
  const routing = UserRouter(true);
  return <NavigationContainer>{routing}</NavigationContainer>;
}
