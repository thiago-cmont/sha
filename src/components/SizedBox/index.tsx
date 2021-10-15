import React from 'react';
import {View, Animated} from 'react-native';

import {SizedBoxInterface} from './types';

const SizedBox: React.FC<SizedBoxInterface> = ({
  h = 16,
  w = 16,
  customStyles = {},
}) => {
  return (
    <View
      accessible={false}
      style={[
        {backgroundColor: 'transparent', height: h, width: w},
        customStyles,
      ]}
    />
  );
};

export const AnimatedSizedBox: React.FC<SizedBoxInterface> = ({
  h = 16,
  w = 16,
  customStyles = {},
}) => {
  return (
    <Animated.View
      style={[
        {backgroundColor: 'transparent', height: h, width: w},
        customStyles,
      ]}
    />
  );
};

export default SizedBox;
