import React from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  Image,
} from 'react-native';

import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CreatePostScreen from '../screens/CreatePostScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import DiscoveryScreen from '../screens/DiscoveryScreen';

import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeStackScreen from './home.routes';


const Tab = createBottomTabNavigator();

const Router = () => {
    return ( 
        <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                if (route.name === 'Home') {
                  return <Foundation name="home" size={25} color={'#000'} />;
                } 
                if (route.name === 'Discovery') {
                  return <Feather name="search" size={25} color={'#000'} />;
                }
                if (route.name === 'Post') {
                  return <Feather name="plus-square" size={25} color={'#000'} />;
                }
                if (route.name === 'Notifications') {
                  return <AntDesign name="hearto" size={25} color={'#000'} />;
                }
                if (route.name === 'Profile') {
                  return <Ionicons name="person-outline" size={25} color={'#000'} />;
                }
    
                // You can return any component that you like here!
               
              },
            })}
            tabBarOptions={{
              activeTintColor: '#000',
              inactiveTintColor: 'gray',
              showLabel: false
            }}
       >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Discovery" component={DiscoveryScreen} />
        <Tab.Screen name="Post" component={CreatePostScreen} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
     );
}
 
export default Router;