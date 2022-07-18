import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import AddScreen from './screens/AddScreen';
import ActivityScreen from './screens/ActivityScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size, colour}) => {
          let iconName;
          if(route.name === "Home"){
            iconName = focused ? "ios-home" : "ios-home-outline";

          } else if(route.name === "Search"){
            iconName = focused ? "ios-home" : "ios-home-outline";

          }else if(route.name === "Add"){
            iconName = focused ? "ios-home" : "ios-home-outline";

          }else if(route.name === "Activity"){
            iconName = focused ? "ios-home" : "ios-home-outline";

          }else if(route.name === "Profile"){
            iconName = focused ? "ios-home" : "ios-home-outline";

          }
        },
      })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="EXplore"
          component={SearchScreen}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Add"
          component={AddScreen}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Activity"
          component={ActivityScreen}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
