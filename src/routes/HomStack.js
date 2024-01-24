import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from '../screens/main/main';
import VsComp from '../screens/PvP/VsComp';
import Onboard from '../screens/onboard';
import About from '../screens/About';

const Stack = createNativeStackNavigator();
const HomStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Nav" component={Onboard} />
      <Stack.Screen name="VsComp" component={VsComp} />
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};

export default HomStack;
