import {Animated} from 'react-native';

import {s} from 'react-native-size-matters';
import styled from 'styled-components/native';

import {SCREEN_HEIGHT} from '../../utils/dimensions';
import Icon from '../Icon';
import {Title} from '../Typography';

export const Container = styled(Animated.View)`
  position: absolute;
  height: ${SCREEN_HEIGHT}px;
  background-color: ${({theme}) => theme.colors.background};
  left: 0;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const PageTitle = styled(Title)``;

export const Hamburguer = styled(Icon).attrs({
  type: 'II',
  size: s(40),
})`
  position: absolute;
  top: 20px;
  left: 10px;
  color: ${({theme}) => theme.colors.white};
`;
