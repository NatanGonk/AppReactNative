import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import ResumeScreen from './screens/ResumeScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Resume" component={ResumeStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* Adicione mais telas para a stack da Home se necessário */}
    </Stack.Navigator>
  );
}

function ResumeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Resume" component={ResumeScreen} />
      </Stack.Navigator>
  );
}

export default App;
