import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import {UserRouter} from "../router"
import { authStateChangeUser } from "../redux/auth/authOperations";

const Main = () => {

  const state = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(authStateChangeUser())
    
  }, []);


  
  const routing = UserRouter(state.stateChange);
  return <NavigationContainer>{routing}</NavigationContainer>;
}

export default Main;
