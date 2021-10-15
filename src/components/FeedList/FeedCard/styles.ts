import {s, vs} from 'react-native-size-matters';
import styled from 'styled-components/native';

import {Text, Subtitle} from '../../Typography';

export const Container = styled.View`
  width: ${s(300)}px;
  height: ${vs(120)}px;
  flex-direction: row;
  justify-content: center;
  border: 2px solid ${({theme}) => theme.colors.primaryDark};
  border-radius: 10px;
  margin-top: 10px;
`;

export const TextWrapper = styled.View`
  flex: 1;
  flex-direction: column;
  padding-top: 5px;
  padding-left: 5px;
  align-items: center;
`;

export const FeedTitle = styled(Text).attrs({type: 'accentDark'})``;

export const FeedDescription = styled(Subtitle).attrs({type: 'accent'})`
  text-align: center;
`;
