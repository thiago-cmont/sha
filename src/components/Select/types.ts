import {FormikErrors} from 'formik';

export type BaseSelectProps = {
  error: string | string[] | FormikErrors<any> | FormikErrors<any>[];
};

export type DataType = {
  id: number | string;
  label: string;
};

export type SelectProps = BaseSelectProps & {
  innerRef?: any;
  label?: string;
  helperText?: string;
  data: Array<DataType>;
  defaultText?: string;
  onChange: (item: any) => void;
};

export type HelperTextProps = {
  type: 'info' | 'error';
};
