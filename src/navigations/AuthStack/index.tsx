import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import HeaderBackButton from '../../components/HeaderBackButton';
import {AUTH_STACK} from '../../constants/routeNames';
import ForgotPassword from '../../pages/ForgotPassword';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import {Props} from './types';

const Stack = createStackNavigator();

const Auth: React.FC<Props> = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name={AUTH_STACK.LOGIN}
      component={Login}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name={AUTH_STACK.REGISTER}
      component={Register}
      options={{
        headerTransparent: true,
        header: () => <HeaderBackButton onPress={() => navigation.pop()} />,
      }}
    />
    <Stack.Screen
      name={AUTH_STACK.FORGOT_PASSWORD}
      component={ForgotPassword}
      options={{
        headerTransparent: true,
        header: () => <HeaderBackButton onPress={() => navigation.pop()} />,
      }}
    />
  </Stack.Navigator>
);

export default Auth;
