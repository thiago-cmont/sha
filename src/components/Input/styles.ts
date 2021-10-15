import {s, vs} from 'react-native-size-matters';
import styled from 'styled-components/native';

import {Text, Subtitle} from '../Typography';
import {BaseInputProps, HelperTextProps} from './types';

const InputBase = styled.TextInput.attrs<BaseInputProps>(({theme}) => ({
  placeholderTextColor: theme.colors.textDisabled,
  selectionColor: theme.colors.primary,
}))<BaseInputProps>`
  max-width: ${({theme}) => theme.dimensions.input.width};
  height: ${({theme}) => theme.dimensions.input.height};
  padding: 0 ${s(16)}px;
  justify-content: center;

  border: 1px;
  border-color: ${({error, focused, theme}) =>
    error
      ? theme.colors.inputBorderError
      : focused
      ? theme.colors.inputBorder
      : 'transparent'};
  border-radius: ${({theme}) => theme.dimensions.input.borderRadius};
  font-size: ${({theme}) => theme.fontSize.subtitle};

  background-color: ${({theme}) => theme.colors.input};
  color: ${({theme}) => theme.colors.inputText};

  box-shadow: ${({theme}) => theme.colors.boxShadow};
  elevation: ${({theme}) => theme.colors.elevation};
`;

export const LabelWrapper = styled.View`
  margin-bottom: ${vs(4)}px;
`;

export const Label = styled(Text)`
  font-size: ${({theme}) => theme.fontSize.subtitle};
  text-transform: uppercase;
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

export const InputAccessoryViewContent = styled.View`
  align-items: flex-end;
  background-color: ${({theme}) => theme.colors.input};
  box-shadow: ${({theme}) => theme.colors.boxShadow};
`;

export const InputAccessoryViewContentTouchable = styled.TouchableOpacity`
  padding: ${vs(16)}px ${s(8)}px;
`;

export const Input = styled(InputBase)``;
