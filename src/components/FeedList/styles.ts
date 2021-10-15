import styled from 'styled-components/native';

import {Title} from '../Typography';

export const LoadingIndicator = styled.ActivityIndicator.attrs(({theme}) => ({
  size: 'large',
  color: theme.colors.primaryDark,
}))`
  margin-top: 10px;
`;

export const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 10px;
  align-items: center;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 50,
  },
})`
  flex-grow: 1;
  width: 100%;
  flex: 1;
`;

export const PageTitle = styled(Title).attrs({type: 'accentDark', level: 2})``;
