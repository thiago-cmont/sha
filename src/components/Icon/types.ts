import {StyleSheetProperties} from 'react-native';

import {ImageStyle} from 'react-native-fast-image';

export type IconType =
  | 'FW'
  | 'FW5'
  | 'MD'
  | 'MDC'
  | 'SL'
  | 'EI'
  | 'II'
  | 'OPI'
  | 'CUSTOM';

export interface IconPropsInterface {
  name: string;
  type?: IconType | 'MDC';
  size?: number;
  color?: string; // hex;
  style?: StyleSheetProperties;
  customSource?: any;
  customStyle?: ImageStyle;
  tintColor?: string;
}
