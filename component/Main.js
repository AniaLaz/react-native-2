import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {UserRouter} from "../router"
import { authStateChangeUser } from "../redux/auth/authOperations";
// import { app } from "../firebase/config";

// const auth = getAuth(app);
const Main = () => {
  // [user, setUser] = useState(null);

  const state = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // onAuthStateChanged(auth, (user) => {
  //   setUser(user);
  // });

  
  useEffect(() => {
    dispatch(authStateChangeUser())
    
  }, []);




  const routing = UserRouter(state.stateChange);
  return <NavigationContainer>{routing}</NavigationContainer>;
}

export default Main;
