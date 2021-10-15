import {s, vs} from 'react-native-size-matters';
import styled from 'styled-components/native';

import {Text} from '../../components/Typography';
import {SCREEN_WIDTH} from '../../utils/dimensions';

export const Container = styled.View`
  height: ${vs(60)}px;
  padding: 0 ${s(8)}px;
  background-color: ${({theme}) => theme.colors.tab};
  flex-direction: row;
  align-self: stretch;
  justify-content: center;
`;

export const TabItem = styled.TouchableOpacity<{focused: boolean}>`
  width: ${SCREEN_WIDTH / 5}px;
  height: ${vs(65)}px;
  justify-content: center;
  align-items: center;
  background: ${({focused, theme}) =>
    ({focused, theme}.focused ? theme.colors.tab : theme.colors.tabItem)};
  border: 1px solid ${({theme}) => theme.colors.white};
  border-bottom-width: 0;
  border-right-width: 0;
`;

export const TabItemText = styled(Text).attrs(() => ({
  numberOfLines: 1,
}))<{focused: boolean}>`
  margin-top: ${vs(2)}px;
  color: ${({focused, theme}) =>
    ({focused, theme}.focused
      ? theme.colors.tabItemLabelSelected
      : theme.colors.tabItemLabel)};
`;
