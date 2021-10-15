import React, {useRef} from 'react';

import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import * as yup from 'yup';

import {appIcon} from '../../assets';
import {AUTH_STACK} from '../../constants/routeNames';
import * as S from './styles';

const ForgotPassword: React.FC = () => {
  const yupValidationSchema = yup.object().shape({
    email: yup.string().required().label('Email'),
  });
  const emailInputRef = useRef();
  const navigation = useNavigation();

  const handleSubmitForm = values => {
    navigation.navigate(AUTH_STACK.LOGIN);
  };
  return (
    <S.Container>
      <S.AppIcon source={appIcon} />
      <S.AvoidKeyboard>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={handleSubmitForm}
          validationSchema={yupValidationSchema}
          validateOnChange={false}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            setFieldError,
          }) => (
            <>
              <S.InputWrapper
                ref={emailInputRef}
                hasHelperText
                placeholder="Email"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                autoCapitalize="words"
                error={errors.email}
              />
              <S.LoginButton
                title="Recover Password"
                variant="outline"
                onPress={e => {
                  if (values.email === '') {
                    setFieldError('email', 'Enter a valid email.');
                  } else {
                    handleSubmit(e);
                  }
                }}
              />
            </>
          )}
        </Formik>
      </S.AvoidKeyboard>
    </S.Container>
  );
};

export default ForgotPassword;
