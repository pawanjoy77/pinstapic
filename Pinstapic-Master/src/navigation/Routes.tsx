import React, { useRef, useState, useEffect, useCallback } from "react"
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStacks from './AuthStacks';

import auth from '@react-native-firebase/auth';
const Stack = createNativeStackNavigator();
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppStacks from "./AppStacks";
import TabRoutes from "./TabRoutes";
import navigationStrings from "../constants/navigationStrings";

const Drawer = createDrawerNavigator();
const Routes = () => {
	 const [user, setUser] = useState('');
	// Handle user state changes
    function onAuthStateChanged(user) {
        console.log('dssd', user);
        setUser(user);
    }
   

    useEffect(() => {

        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);
	if(user){
		return(
        <AppStacks/> 
		)
	}
  return (
  
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name="AuthStacks" component={AuthStacks} />
      </Stack.Navigator>
   

  )
}

export default Routes