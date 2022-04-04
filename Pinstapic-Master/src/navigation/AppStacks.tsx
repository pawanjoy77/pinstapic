import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationStrings from "../constants/navigationStrings";
import { Dashboard, Likes,DrawerContent } from '../screens';
import TabRoutes from './TabRoutes';
const AppStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const AppStacks = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false,swipeEdgeWidth: 1,overlayColor: "transparent",
    drawerStyle: { flex: 1, width: "80%",backgroundColor: 'transparent', 
      } ,sceneContainerStyle: { backgroundColor: "transparent" },}} drawerContent={(props) => <DrawerContent {...props} />}>
    <Drawer.Screen name={navigationStrings.DASHBOARD} component={TabRoutes} />
    
    </Drawer.Navigator>
     
  )
}

export default AppStacks