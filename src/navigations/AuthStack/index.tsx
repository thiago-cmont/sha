import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {AUTH_STACK} from '../../constants/routeNames';
import ForgotPassword from '../../pages/forgotPassword';
import Login from '../../pages/login';
import Register from '../../pages/register';
import {Props} from './types';

const Stack = createStackNavigator();

const Auth: React.FC<Props> = () => (
  <Stack.Navigator>
    <Stack.Screen name={AUTH_STACK.LOGIN} component={Login} />
    <Stack.Screen name={AUTH_STACK.REGISTER} component={Register} />
    <Stack.Screen
      name={AUTH_STACK.FORGOT_PASSWORD}
      component={ForgotPassword}
    />
  </Stack.Navigator>
);

export default Auth;
