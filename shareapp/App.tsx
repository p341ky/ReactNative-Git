import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapScreen from './src/screens/MapScreen';
import PostScreen from './src/screens/PostScreen';
import UserScreen from './src/screens/UserScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Mapa" component={MapScreen} />
        <Tab.Screen name="Publicación" component={PostScreen} />
        <Tab.Screen name="Usuario" component={UserScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
