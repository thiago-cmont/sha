import React from 'react';

import FastImage from 'react-native-fast-image';
import EI from 'react-native-vector-icons/EvilIcons';
import FW from 'react-native-vector-icons/FontAwesome';
import FW5 from 'react-native-vector-icons/FontAwesome5';
import II from 'react-native-vector-icons/Ionicons';
import MDC from 'react-native-vector-icons/MaterialCommunityIcons';
import MD from 'react-native-vector-icons/MaterialIcons';
import SL from 'react-native-vector-icons/SimpleLineIcons';
import {} from 'react-native-vector-icons';

import {IconPropsInterface} from './types';

const Icon: React.FC<IconPropsInterface> = ({
  name,
  type = 'MDC',
  size = 16,
  color = '#444',
  style = {},
  customSource,
  customStyle = {},
  tintColor,
  ...rest
}) => {
  switch (type) {
    case 'FW':
      return (
        <FW name={name} size={size} color={color} style={style} {...rest} />
      );
    case 'FW5':
      return (
        <FW5 name={name} size={size} color={color} style={style} {...rest} />
      );
    case 'MD':
      return (
        <MD name={name} size={size} color={color} style={style} {...rest} />
      );
    case 'MDC':
      return (
        <MDC name={name} size={size} color={color} style={style} {...rest} />
      );
    case 'SL':
      return (
        <SL name={name} size={size} color={color} style={style} {...rest} />
      );
    case 'EI':
      return (
        <EI name={name} size={size} color={color} style={style} {...rest} />
      );
    case 'II':
      return (
        <II name={name} size={size} color={color} style={style} {...rest} />
      );
    case 'CUSTOM':
      return (
        <FastImage
          source={customSource}
          resizeMode={FastImage.resizeMode.contain}
          tintColor={tintColor}
          style={[
            {
              width: '50%',
              height: '50%',
              alignSelf: 'center',
              tintColor,
            },
            customStyle,
          ]}
        />
      );
    default:
      return (
        <MDC
          name={name}
          size={size || 30}
          color={color}
          style={style}
          {...rest}
        />
      );
  }
};

export default Icon;
