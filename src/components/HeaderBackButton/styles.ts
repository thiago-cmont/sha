import {vs} from 'react-native-size-matters';
import styled from 'styled-components/native';

import Icon from '../Icon';

export const HeaderButtonWrapper = styled.TouchableOpacity`
  margin-top: ${vs(10)}px;
  margin-left: 15px;
  border-radius: 100px;
  width: ${vs(60)}px;
  height: ${vs(60)}px;
  justify-content: center;
  align-items: center;
`;

export const HeaderButtonIcon = styled(Icon).attrs(({theme}) => ({
  color: theme.colors.white,
  size: vs(50),
}))``;
