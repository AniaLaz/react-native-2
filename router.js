import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";

const MainStack = createStackNavigator();
const MainTab = createBottomTabNavigator();
import { View, StyleSheet } from "react-native";

import { FormRegistration } from "./Screens/RegistrationScreen";
import { FormLogin } from "./Screens/LoginScreen";
import { Home } from "./Screens/Home";
import { PostScreen } from "./Screens/PostsScreen";
import { CreatePostsScreen } from "./Screens/CreatePostsScreen";
import { ProfileScreen } from "./Screens/ProfileScreen";

export const userRouter = (isAuht) => {
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
        name="Posts"
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
        // options={{
        //   headerShown: false,
        //   tabBarIcon: ({ size, color }) => {
        //     <AntDesign name="appstore-o" size={25} color="black" />;
        //   },
        // }}
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

    // <MainTab.Navigator
    //   screenOptions={({ router }) => ({
    //     tabBarIcon: ({ focused, color, size }) => {
    //       let iconName;
    //       if (router.name === "Profile") {
    //         iconName = focused
    //           ? "ios-information-circle"
    //           : "ios-information-circle-outline";
    //       } else if (route.name === "Create") {
    //         iconName = focused ? "ios-list-box" : "ios-list";
    //       }
    //       return <Ionicons name={iconName} size={size} color={color} />;
    //     },
    //   })}
    //   tabBarOptions={{
    //     activeTintColor: "tomato",
    //     inactiveTintColor: "gray",
    //   }}
    // >
    //   <MainTab.Screen name="Profile" component={ProfileScreen} />
    //   <MainTab.Screen name="Create" component={CreatePostsScreen} />
    // </MainTab.Navigator>
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
