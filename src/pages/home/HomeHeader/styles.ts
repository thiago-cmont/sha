import {vs, s} from 'react-native-size-matters';
import styled from 'styled-components/native';

import Icon from '../../../components/Icon';
import {Text, Title} from '../../../components/Typography';

export const Container = styled.View`
  height: ${vs(150)}px;
  background-color: ${({theme}) => theme.colors.primary};
  align-items: center;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  padding-top: 15px;
`;

export const RowView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const AppIcon = styled(Icon).attrs(({theme}) => ({
  tintColor: theme.colors.white,
  customStyle: {
    width: s(40),
    height: s(40),
    marginRight: 10,
  },
}))``;
export const AppIconText = styled(Title)``;

export const HeaderTitles = styled(Text)`
  margin-top: 5px;
`;
