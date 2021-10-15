import React from 'react';
import {View} from 'react-native';

import * as S from './styles';
import {TypographyPropTypes} from './types';

export const HelperText: React.FC<TypographyPropTypes> = ({type, children}) => {
  return (
    <View style={{alignSelf: 'stretch'}}>
      <S.HelperText type={type}>{children}</S.HelperText>
    </View>
  );
};

export default {HelperText};

export {Text, Subtitle, Title, SecondaryBtnText} from './styles';
export * from './types';
