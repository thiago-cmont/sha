import React, {useRef} from 'react';

import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';
import * as yup from 'yup';

import {appIcon} from '../../assets';
import {AUTH_STACK} from '../../constants/routeNames';
import {asyncGetUser} from '../../store/ducks/user';
import * as S from './styles';

const Login: React.FC = () => {
  const yupValidationSchema = yup.object().shape({
    email: yup.string().required().label('Email'),
    password: yup.string().required().label('Password'),
  });
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleSubmitForm = values => {
    dispatch(asyncGetUser(values.email, values.password));
    // const users = api.methods.user.getUser();
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
              <S.InputWrapper
                ref={passwordInputRef}
                hasHelperText
                placeholder="Password"
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                autoCapitalize="words"
                error={errors.password}
              />
              <S.LoginButton
                title="Login"
                variant="outline"
                onPress={e => {
                  if (values.email === '') {
                    setFieldError('email', 'Enter a valid email.');
                  } else if (values.password === '') {
                    setFieldError('password', 'Enter a valid password');
                  } else {
                    handleSubmit(e);
                  }
                }}
              />
              <S.ForgotPassword
                onPress={() => navigation.navigate(AUTH_STACK.FORGOT_PASSWORD)}>
                Forgot Password?
              </S.ForgotPassword>
            </>
          )}
        </Formik>
        <S.Registar onPress={() => navigation.navigate(AUTH_STACK.REGISTER)}>
          Create Account
        </S.Registar>
      </S.AvoidKeyboard>
    </S.Container>
  );
};

export default Login;
