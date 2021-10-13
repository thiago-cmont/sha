import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {MAIN_STACK} from '../../constants/routeNames';
import ForgotPassword from '../../pages/forgotPassword';
import {Props} from './types';

const Stack = createStackNavigator();

const Main: React.FC<Props> = () => (
  <Stack.Navigator>
    <Stack.Screen name={MAIN_STACK.HOME} component={ForgotPassword} />
  </Stack.Navigator>
);

export default Main;
