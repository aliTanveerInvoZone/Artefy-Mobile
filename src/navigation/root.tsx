import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackContainer from './stacks';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';

export default function Root() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <StackContainer />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
