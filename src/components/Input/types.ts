import {RefObject} from 'react';
import {TextInput, TextInputProps} from 'react-native';

import {FormikErrors} from 'formik';

export type BaseInputProps = {
  error?: string | string[] | FormikErrors<any> | FormikErrors<any>[];
  focused?: boolean;
};

export type InputProps = BaseInputProps &
  TextInputProps & {
    innerRef: RefObject<TextInput>;
    label?: string;
    helperText?: string;
    inputAccessoryViewID: string;
  };

export type HelperTextProps = {
  type: 'info' | 'error';
};
