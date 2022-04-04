import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationStrings from "../constants/navigationStrings";
import { Welcome,SignUp,Login } from '../screens';
const AuthStack = createNativeStackNavigator();

const AuthStacks = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}} >
        <AuthStack.Screen name={navigationStrings.WELCOME} component={Welcome} />
        <AuthStack.Screen name={navigationStrings.LOGIN} component={Login} />
        <AuthStack.Screen name={navigationStrings.SIGNUP} component={SignUp} />
       
      </AuthStack.Navigator>
  )
}

export default AuthStacks