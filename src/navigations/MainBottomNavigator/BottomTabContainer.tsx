import React from 'react';

import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {useTheme} from '@react-navigation/native';
import {s} from 'react-native-size-matters';

import * as S from './styles';

const BottomTabItem: React.FC<{
  route: any;
  isFocused: boolean;
  options: BottomTabNavigationOptions;
  navigation: any;
}> = ({route, isFocused, options, navigation}) => {
  const theme = useTheme();

  const onPress = () => {
    navigation.navigate(route.name);
  };

  const label: string = (() => {
    if (options.tabBarLabel !== undefined) {
      return options.tabBarLabel;
    }
    if (options.title !== undefined) {
      return options.title;
    }
    return route.name;
  })();
  return (
    <S.TabItem
      accessibilityLabel={options.tabBarAccessibilityLabel}
      focused={isFocused}
      onPress={onPress}>
      {options.tabBarIcon({
        focused: isFocused,
        color: (() => {
          return isFocused ? theme.colors.white : theme.colors.tabItemIcon;
        })(),
        size: s(24),
      })}
      <S.TabItemText bold={isFocused} level={2} focused={isFocused}>
        {label}
      </S.TabItemText>
    </S.TabItem>
  );
};

const BottomTabContainer: React.FC = ({state, descriptors, navigation}) => {
  const routes = state?.routes;

  const focusedOptions = descriptors?.[routes[state?.index].key].options;
  if (focusedOptions?.tabBarVisible === false) {
    return null;
  }

  return (
    <>
      <S.Container>
        {routes &&
          routes.map((route, index) => (
            <BottomTabItem
              key={`${route.name}-tabItem`}
              route={route}
              isFocused={state.index === index}
              options={descriptors[route.key].options}
              navigation={navigation}
            />
          ))}
      </S.Container>
    </>
  );
};
export default BottomTabContainer;
