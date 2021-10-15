import {Platform} from 'react-native';

import {vs, s} from 'react-native-size-matters';
import styled from 'styled-components/native';

import Button from '../../components/Button';
import FWInput from '../../components/Input';
import FWSelect from '../../components/Select';
import {Subtitle} from '../../components/Typography';
import {HEADER_HEIGHT} from '../../utils/dimensions';

const isIOS = Platform.OS === 'ios';

export const Container = styled.View`
  flex: 1;
  align-items: center;
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
  keyboardVerticalOffset: HEADER_HEIGHT,
})`
  padding-top: ${vs(50)}px;
  flex: 1;
`;

export const RegisterScrollView = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: vs(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
})`
  flex: 1;
`;

export const InputWrapper = styled(FWInput)`
  width: ${s(320)}px;
`;

export const SelectWrapper = styled(FWSelect)``;
export const LoginButton = styled(Button)``;

export const ForgotPassword = styled(Subtitle)`
  align-self: center;
  margin-top: 10px;
`;

export const Registar = styled(Subtitle)`
  align-self: center;
`;
