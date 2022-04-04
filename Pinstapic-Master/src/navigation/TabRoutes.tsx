import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import navigationStrings from '../constants/navigationStrings';
import Icon from 'react-native-vector-icons/Ionicons'; 
import FontAwesome from 'react-native-vector-icons/FontAwesome5'; 

import { Dashboard, DrawerContent, Followers, Likes, Messages, Search } from '../screens';

import DrawerStacks from "./DrawerStack";
const Tab = createBottomTabNavigator();

const TabRoutes = ({ navigation }) => {
    navigation.closeDrawer();
   
  return (
    <Tab.Navigator initialRouteName='Likes'
    screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'white',
        tabBarShowLabel: false,
        tabBarStyle: {
            backgroundColor: '#0c8dd6',
           

        }
    }}
>
<Tab.Screen
        name="DrawerStacks" component={DrawerStacks}
        listeners={({ navigation }) => ({
            tabPress: e => {
              e.preventDefault();
              navigation.openDrawer();
            }
          })}
        options={{
            tabBarIcon: ({ focused }) => {
                return (
                    <Icon name='menu'  style={{color: focused ? 'red' : 'white' }} size={25} />
                    
                )
            }
        }}
    />

    <Tab.Screen
        name={navigationStrings.FOLLOWERS}
        component={Followers}
        options={{
            tabBarIcon: ({ focused }) => {
                return (
                    <FontAwesome name='user-friends'  style={{color: focused ? 'red' : 'white' }}  size={25} />
                    
                )
            }
        }}
    />
    

    <Tab.Screen
        name={navigationStrings.LIKES}
        component={Likes}
        options={{
            tabBarIcon: ({ focused }) => {
                return (
                    <Icon name='heart'  style={{color: focused ? 'red' : 'white' }} size={25}  />
                )
            }
        }}
    />
    <Tab.Screen
        name={navigationStrings.SEARCH}
        component={Search}
        options={{
            tabBarIcon: ({ focused }) => {
                return (

                    <Icon name='search'  style={{color: focused ? 'red' : 'white' }} size={25}  />
                )
            }
        }}
    />
    <Tab.Screen
        name={navigationStrings.MESSAGES}
        component={Messages}
        options={{
            tabBarIcon: ({ focused }) => {
                return (

                    <Icon name='chatbubbles'  style={{color: focused ? 'red' : 'white' }} size={25}  />
                )
            }
        }}
    />
</Tab.Navigator>
  )
}

export default TabRoutes