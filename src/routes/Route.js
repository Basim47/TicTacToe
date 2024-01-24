import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomStack from './HomStack';

const Route = () => {
  return (
    <NavigationContainer>
      <HomStack />
    </NavigationContainer>
  );
};

export default Route;
