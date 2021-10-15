import styled, {css} from 'styled-components/native';

import {HelperTextTypes} from './types';

const colors = theme => ({
  default: theme.colors.text,
  accent: theme.colors.primary,
  accentDark: theme.colors.primaryDark,
  dark: theme.colors.textDark,
  disabled: theme.colors.textDisabled,
  button: theme.colors.textButton,
});

export const Text = styled.Text`
  color: ${({theme, type}) => {
    const selected = type || 'default';
    return colors(theme)[selected];
  }};
  font-size: ${({level, theme}) => {
    const selected = level || '1';
    const levels = {
      1: theme.fontSize.text,
      2: theme.fontSize.smallText,
      3: theme.fontSize.smallerText,
    };
    return levels[selected];
  }};
  text-transform: ${props => (props.uppercase ? 'uppercase' : 'none')};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
`;

export const Title = styled(Text)`
  color: ${({theme, type}) => {
    const selected = type || 'accent';
    return colors(theme)[selected];
  }};
  font-size: ${({theme, level}) => {
    const selected = level || '1';
    const levels = {
      1: theme.fontSize.title,
      2: theme.fontSize.titleSmall,
    };
    return levels[selected];
  }};
  font-weight: bold;
`;

export const Subtitle = styled(Text)`
  font-size: ${props => props.theme.fontSize.subtitle};
`;

export const HelperText = styled(Subtitle)`
  color: ${({type, theme}) =>
    type === HelperTextTypes.info ? theme.colors.text : theme.colors.red};
  font-weight: ${({type}) =>
    type === HelperTextTypes.info ? 'bold' : 'normal'};
`;

export const SecondaryBtnText = styled(Text)`
  ${({theme}) => css`
    color: ${theme.colors.text};
    font-size: ${theme.fontSize.button};
    text-align-vertical: center;
  `}
  text-align: center;
`;
