import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";

const MainStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

import { View, StyleSheet } from "react-native";

import { FormRegistration } from "./Screens/RegistrationScreen";
import { FormLogin } from "./Screens/LoginScreen";
import { Home } from "./Screens/Home";
import PostScreen from "./Screens/PostsScreen";
import { CreatePostsScreen } from "./Screens/CreatePostsScreen";
import { ProfileScreen } from "./Screens/ProfileScreen";


export const UserRouter = (isAuht) => {
  if (!isAuht) {
    return (
      <MainStack.Navigator>
        <MainStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={FormLogin}
        ></MainStack.Screen>
        <MainStack.Screen
          options={{ headerShown: false }}
          name="Registration"
          component={FormRegistration}
        />
        <MainStack.Screen name="Home" component={Home} />
      </MainStack.Navigator>
    );
  }

  return (
    <MainTab.Navigator screenOptions={{ tabBarShowLabel: false }}>
      <MainTab.Screen
        name="Post"
        component={PostScreen}
        options={() => ({
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            <View
              style={
                focused
                  ? { ...styles.btnNav, backgroundColor: "#FF6C00" }
                  : styles.btnNav
              }
            >
              <AntDesign name="appstore-o" size={24} color={color} />
            </View>
          ),
        })}
      />

      <MainTab.Screen
        name="Create"
        component={CreatePostsScreen}
        options={() => ({
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            <View
              style={
                focused
                  ? { ...styles.btnNav, backgroundColor: "#FF6C00" }
                  : styles.btnNav
              }
            >
              <AntDesign name="plus" size={24} color="black" />
            </View>
          ),
        })}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            <View
              style={
                focused
                  ? { ...styles.btnNav, backgroundColor: "#FF6C00" }
                  : styles.btnNav
              }
            >
              <AntDesign name="user" size={24} color="black" />
            </View>
          ),
        }}
      />
    </MainTab.Navigator>
  );
 
};


const styles = StyleSheet.create({
  btnNav: {
    height: 40,
    width: 70,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },
});

export default UserRouter;