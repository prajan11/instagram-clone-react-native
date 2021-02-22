import React from 'react';
import { Image } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createStackNavigator } from '@react-navigation/stack';
import logo from '../images/logo.png';

import HomeScreen from '../screens/HomeScreen';


const HomeStack = createStackNavigator();

const HomeRoutes = () => {
    return ( 
        <HomeStack.Navigator>
      <HomeStack.Screen 
          name="Home" 
          component={HomeScreen}
          options={
            {
              headerLeft: () => (
                <Feather name="search" size={25} color={'#000'} />
              ),
              headerTitle: () => (
                <Image source={logo} resizeMode="contain" style={{width: 135}} />
              ),
              headerRight: () => (
                <Ionicons name="paper-plane-outline" size={25} color={'#000'} />
              ),
              headerLeftContainerStyle: {
                marginLeft: 15,
              },
              headerRightContainerStyle: {
                marginRight: 15,
              },
              headerTitleContainerStyle: {
                paddingLeft: 60,
              },
              
            }
          }
          
          />
    </HomeStack.Navigator>
     );
}
 
export default HomeRoutes;