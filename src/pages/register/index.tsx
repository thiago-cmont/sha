import React, {useRef} from 'react';

import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import * as yup from 'yup';

import {appIcon} from '../../assets';
import {MAIN_STACK} from '../../constants/routeNames';
import * as S from './styles';

const Register: React.FC = () => {
  const yupValidationSchema = yup.object().shape({
    name: yup.string().required().label('Name'),
    apartment: yup.string().required().label('Apartment'),
    email: yup.string().required().label('Email'),
    password: yup.string().required().label('Password'),
    apartmentComplexName: yup.string().required().label('ApartmentComplexName'),
    level: yup.string().required().label('Level'),
  });

  const level = [
    {
      id: 1,
      label: 'Apartment Owner',
    },
    {
      id: 2,
      label: 'Apartment Manager',
    },
  ];
  const nameInputRef = useRef();
  const apartmentInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const aprtmentComplexNameInputRef = useRef();
  const levelInputRef = useRef();
  const navigation = useNavigation();

  const handleSubmitForm = values => {
    navigation.navigate(MAIN_STACK.MAIN, {screen: MAIN_STACK.HOME});
  };
  return (
    <S.Container>
      <S.RegisterScrollView showsVerticalScrollIndicator={false}>
        <S.AppIcon source={appIcon} />
        <S.AvoidKeyboard>
          <Formik
            initialValues={{
              name: '',
              apartment: '',
              email: '',
              password: '',
              apartmentComplexName: '',
              level: '',
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
              setFieldValue,
            }) => (
              <>
                <S.InputWrapper
                  ref={nameInputRef}
                  hasHelperText
                  placeholder="Name"
                  value={values.name}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  autoCapitalize="words"
                  error={errors.name}
                />
                <S.InputWrapper
                  ref={emailInputRef}
                  hasHelperText
                  placeholder="Email"
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('password')}
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
                <S.InputWrapper
                  ref={apartmentInputRef}
                  hasHelperText
                  placeholder="Apartment"
                  value={values.apartment}
                  onChangeText={handleChange('apartment')}
                  onBlur={handleBlur('apartment')}
                  autoCapitalize="words"
                  error={errors.apartment}
                />
                <S.InputWrapper
                  ref={aprtmentComplexNameInputRef}
                  hasHelperText
                  placeholder="Apartment Complex Name"
                  value={values.apartmentComplexName}
                  onChangeText={handleChange('apartmentComplexName')}
                  onBlur={handleBlur('apartmentComplexName')}
                  autoCapitalize="words"
                  error={errors.apartmentComplexName}
                />
                <S.SelectWrapper
                  ref={levelInputRef}
                  data={level}
                  error={errors.level}
                  defaultText="Level"
                  onChange={selected => {
                    setFieldValue('level', selected?.label);
                  }}
                />
                <S.LoginButton
                  title="Create Account"
                  variant="outline"
                  onPress={e => {
                    if (values.name === '') {
                      setFieldError('name', 'Enter a valid name');
                    } else if (values.email === '') {
                      setFieldError('email', 'Enter a valid email.');
                    } else if (values.password === '') {
                      setFieldError('password', 'Enter a valid password');
                    } else if (values.name === '') {
                      setFieldError('name', 'Enter a valid name');
                    } else if (values.apartment === '') {
                      setFieldError('apartment', 'Enter a valid Apartment');
                    } else if (values.apartmentComplexName === '') {
                      setFieldError(
                        'apartmentComplexName',
                        'Enter a valid apartment complex name',
                      );
                    } else {
                      handleSubmit(e);
                    }
                  }}
                />
              </>
            )}
          </Formik>
        </S.AvoidKeyboard>
      </S.RegisterScrollView>
    </S.Container>
  );
};

export default Register;
