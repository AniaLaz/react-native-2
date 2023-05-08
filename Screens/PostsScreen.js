import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import { DefaultScreen } from "./nestedScreens/DefoultScreenPosts";
import { MapScreen } from "./nestedScreens/MapScreen";
import { CommentScreen } from "./nestedScreens/CommentsScreen";
import { db } from "../firebase/config";
import { where, collection, onSnapshot } from "firebase/firestore";

const NestedStack = createStackNavigator();

const PostScreen = () => {


  return (
    <NestedStack.Navigator>
      <NestedStack.Screen
        options={{ headerShown: false }}
        name="DefaultScreen"
        component={DefaultScreen}
      ></NestedStack.Screen>
      <NestedStack.Screen name="Map" component={MapScreen}></NestedStack.Screen>
      <NestedStack.Screen
        name="Comments"
        component={CommentScreen}
      ></NestedStack.Screen>
    </NestedStack.Navigator>
  );
};

export default PostScreen;
