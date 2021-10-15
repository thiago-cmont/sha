import {Animated} from 'react-native';

import {s, vs} from 'react-native-size-matters';
import styled, {css} from 'styled-components/native';

import Icon from '../Icon';
import {Text, Subtitle} from '../Typography';
import {HelperTextProps} from './types';

export const SelectWrapper = styled.View`
  align-self: stretch;
`;

export const ContainerShadow = styled(Animated.View)`
  box-shadow: ${({theme}) => theme.colors.boxShadow};
`;

export const Container = styled(Animated.View)<{expanded: boolean}>`
  max-width: ${({theme}) => theme.dimensions.input.width};
  ${({expanded, theme}) =>
    !expanded
      ? css`
          height: ${theme.dimensions.input.height};
          overflow: hidden;
        `
      : null}
  background-color: ${({theme}) => theme.colors.input};
  border: 1px;
  border-color: ${({expanded, theme}) =>
    expanded ? theme.colors.inputBorder : 'transparent'};
  border-radius: ${({theme, expanded}) =>
    expanded
      ? theme.dimensions.input.borderRadiusExpanded
      : theme.dimensions.input.borderRadius};
  elevation: ${({theme}) => theme.colors.elevation};
`;

export const ContainerExpansible = styled(Animated.View)`
  flex-grow: 0;
`;

export const SelectItem = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  padding: 0 ${s(16)}px;
  max-width: ${({theme}) => theme.dimensions.input.width};
  height: ${({theme}) => theme.dimensions.input.height};
  justify-content: center;
  background-color: ${({theme}) => theme.colors.input};
  border-radius: ${({theme}) => theme.dimensions.input.borderRadius};
`;

export const SelectItemDescription = styled(Text)<{textDisabled: boolean}>`
  font-size: ${({theme}) => theme.fontSize.subtitle};
  color: ${({theme, textDisabled}) =>
    textDisabled ? theme.colors.textDisabled : theme.colors.inputText};
`;

export const LabelWrapper = styled.View`
  margin-bottom: ${vs(4)}px;
`;

export const Label = styled(Subtitle).attrs({uppercase: true})`
  color: ${({theme}) => theme.colors.inputLabel};
  letter-spacing: 0;
  text-align: left;
`;

export const HelperTextWrapper = styled.View`
  margin-top: ${vs(4)}px;
`;

export const HelperText = styled(Subtitle)<HelperTextProps>`
  color: ${({type, theme}) =>
    type === 'info' ? theme.colors.text : theme.colors.textError};
  font-weight: ${({type}) => (type === 'info' ? 'bold' : 'normal')};
`;

export const SelectIndicator = styled(Icon).attrs(({theme}) => ({
  color: theme.colors.inputDark,
}))`
  position: absolute;
  right: ${s(16)}px;
  ${({expanded}) =>
    !expanded
      ? null
      : css`
          transform: rotate(180deg);
        `}
`;
