import {Platform} from 'react-native';

import {vs, s} from 'react-native-size-matters';
import styled from 'styled-components/native';

import Button from '../../components/Button';
import Input from '../../components/Input';
import {Subtitle} from '../../components/Typography';
import {HEADER_HEIGHT} from '../../utils/dimensions';

const isIOS = Platform.OS === 'ios';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 20px;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const AppIcon = styled.Image.attrs(({theme}) => ({
  tintColor: theme.colors.iconLight,
  resizeMode: 'contain',
}))`
  width: ${vs(150)}px;
  height: ${vs(150)}px;
`;

export const AvoidKeyboard = styled.KeyboardAvoidingView.attrs({
  behavior: isIOS ? 'padding' : 'height',
  keyboardVerticalOffset: HEADER_HEIGHT,
})`
  padding-top: ${vs(50)}px;
  flex: 1;
`;

export const InputWrapper = styled(Input)`
  width: ${s(320)}px;
`;

export const LoginButton = styled(Button)``;

export const ForgotPassword = styled(Subtitle)`
  align-self: center;
  margin-top: 10px;
`;

export const Registar = styled(Subtitle)`
  align-self: center;
  margin-top: ${vs(100)}px;
`;
