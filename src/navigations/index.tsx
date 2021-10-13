import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {AUTH_STACK, MAIN_STACK} from '../constants/routeNames';
import Auth from './AuthStack';
import Main from './MainStack';

const Stack = createStackNavigator();

const PokeApp: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name={AUTH_STACK.AUTH} component={Auth} />
        <Stack.Screen name={MAIN_STACK.MAIN} component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default PokeApp;
