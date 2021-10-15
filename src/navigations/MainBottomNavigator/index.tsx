import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

import {
  home,
  homeOutline,
  docs,
  docsOutline,
  dollar,
  dollarOutline,
  places,
  placesOutline,
  contact,
  contactOutline,
} from '../../assets';
import {MAIN_STACK} from '../../constants/routeNames';
import Contact from '../../pages/Contact';
import Documents from '../../pages/Documents';
import Finances from '../../pages/Finances';
import Home from '../../pages/Home';
import HomeHeader from '../../pages/Home/HomeHeader';
import Reservations from '../../pages/Reservations';
import BottomTabContainer from './BottomTabContainer';
import {BottomTabParamListType} from './types';

const Tab = createBottomTabNavigator<BottomTabParamListType>();

const MainBottomNavigator: React.FC = ({routes, navigation}) => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        tabStyle: {backgroundColor: theme.colors.tab},
      }}
      tabBar={props => <BottomTabContainer {...props} />}>
      <Tab.Screen
        name={MAIN_STACK.HOME}
        component={Home}
        options={{
          header: () => <HomeHeader />,
          title: 'Home',
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, size, color}) => (
            <FastImage
              resizeMode={FastImage.resizeMode.contain}
              source={focused ? home : homeOutline}
              style={{width: size, height: size}}
              tintColor={color || theme.colors.background}
            />
          ),
        }}
      />
      <Tab.Screen
        name={MAIN_STACK.DOCUMENTS}
        component={Documents}
        options={{
          header: () => <HomeHeader />,
          title: 'Docs',
          tabBarLabel: 'Docs',
          tabBarIcon: ({focused, size, color}) => (
            <FastImage
              resizeMode={FastImage.resizeMode.contain}
              source={focused ? docs : docsOutline}
              style={{width: size, height: size}}
              tintColor={color || theme.colors.background}
            />
          ),
        }}
      />
      <Tab.Screen
        name={MAIN_STACK.FINANCES}
        component={Finances}
        options={{
          header: () => <HomeHeader />,
          title: 'Finance',
          tabBarLabel: 'Finance',
          tabBarIcon: ({focused, size, color}) => (
            <FastImage
              resizeMode={FastImage.resizeMode.contain}
              source={focused ? dollar : dollarOutline}
              style={{width: size, height: size}}
              tintColor={color || theme.colors.background}
            />
          ),
        }}
      />
      <Tab.Screen
        name={MAIN_STACK.RESERVATIONS}
        component={Reservations}
        options={{
          header: () => <HomeHeader />,
          title: 'Places',
          tabBarLabel: 'Places',
          tabBarIcon: ({focused, size, color}) => (
            <FastImage
              resizeMode={FastImage.resizeMode.contain}
              source={focused ? places : placesOutline}
              style={{width: size, height: size}}
              tintColor={color || theme.colors.background}
            />
          ),
        }}
      />
      <Tab.Screen
        name={MAIN_STACK.CONTACT}
        component={Contact}
        options={{
          header: () => <HomeHeader />,
          title: 'Contact',
          tabBarLabel: 'Contact',
          tabBarIcon: ({focused, size, color}) => (
            <FastImage
              resizeMode={FastImage.resizeMode.contain}
              source={focused ? contact : contactOutline}
              style={{width: size, height: size}}
              tintColor={color || theme.colors.background}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainBottomNavigator;
