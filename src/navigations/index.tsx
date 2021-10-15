import 'react-native-gesture-handler';
import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import {MAIN_STACK, AUTH_STACK} from '../constants/routeNames';
import Auth from './AuthStack';
import MainBottomNavigator from './MainBottomNavigator';

const Stack = createStackNavigator();

type AuthType = {
  auth: {
    signed: boolean;
  };
};

const PokeApp: React.FC = () => {
  const {signed} = useSelector((state: AuthType) => state.auth);
  useEffect(() => {}, [signed]);
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {signed ? (
          <Stack.Screen
            name={MAIN_STACK.MAIN}
            component={MainBottomNavigator}
          />
        ) : (
          <Stack.Screen name={AUTH_STACK.AUTH} component={Auth} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default PokeApp;
