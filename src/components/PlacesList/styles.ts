import {Calendar} from 'react-native-calendars';
import PagerView from 'react-native-pager-view';
import {vs, s} from 'react-native-size-matters';
import styled from 'styled-components/native';

import Icon from '../Icon';
import {Title, Subtitle} from '../Typography';

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

export const SelectionPages = styled(PagerView)`
  flex: 1;
  width: 100%;
  border: 1px solid red;
`;

export const SelectionStepWrapper = styled.View`
  width: 100%;
  height: ${vs(60)}px;
  flex-direction: row;
`;

export const SelectionStep = styled.View`
  width: 33%;
  background-color: ${({theme, selected}) =>
    selected ? theme.colors.primaryDark : theme.colors.primary};
  border-width: 1px;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`;

export const SelectionStepText = styled(Subtitle).attrs({
  type: 'default',
  level: '2',
})``;

export const SelectionIcon = styled(Icon).attrs({
  type: 'II',
  size: s(25),
})`
  color: ${({theme}) => theme.colors.iconLight};
`;

export const PagerViewInnerWrappers = styled.View`
  padding: 10px;
  padding-top: 5px;
`;
export const SelectionDateCalendar = styled(Calendar)``;

export const TimeContainer = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Times = styled.TouchableOpacity`
  width: ${s(80)}px;
  height: ${vs(40)}px;
  background-color: ${({theme}) => theme.colors.primaryDark};
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 20px;
  margin-right: 5px;
  margin-bottom: 5px;
`;

export const TimesTitle = styled(Title).attrs({type: 'accentDark', level: 1})`
  margin: 10px;
`;
export const TimesText = styled(Subtitle)``;

export const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const BackText = styled(Subtitle).attrs({type: 'accentDark'})``;

export const ConfirmationContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const ConfirmIcon = styled(Icon).attrs({
  type: 'II',
  size: s(60),
})`
  color: ${({theme}) => theme.colors.primaryDark};
`;
