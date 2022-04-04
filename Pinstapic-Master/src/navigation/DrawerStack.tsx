import React from 'react'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationStrings from "../constants/navigationStrings";
import { MyLookbooks, CreateLookbook } from '../screens';
import { View,Text } from 'react-native';
const DrawerStacks = createNativeStackNavigator();

const DrawerStack = ({ navigation, route }) => {
    React.useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
        if (routeName === "CreateLookbook"){
            navigation.setOptions({tabBarStyle: {display: 'none'}});
        }else {
            navigation.setOptions({tabBarStyle: {display: 'flex', backgroundColor: '#0c8dd6'}});
        }
    }, [navigation, route]);
  return ( 
    <DrawerStacks.Navigator  screenOptions={{headerTransparent:true, headerTintColor: '#fff',
       headerStyle:{backgroundColor:'#0c8dd6' },
       
      }}>
    <DrawerStacks.Screen name={navigationStrings.MYLOOKBOOKS} component={MyLookbooks} options={{
          title: 'My Lookbooks',
          headerTitleAlign: 'center',
          headerShown: true
        }} />
   <DrawerStacks.Screen name={navigationStrings.CREATELOOKBOOK} component={CreateLookbook} options={{
          title: 'Create a Lookbooks',
          headerTitleAlign: 'center',
          headerShown: true,
        
          
        }} />
  </DrawerStacks.Navigator>
  ) 
}

export default DrawerStack