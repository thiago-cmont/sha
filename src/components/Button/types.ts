import {TouchableOpacityProps} from 'react-native';

export type Variant = 'solid' | 'outline' | 'hollow' | 'link';

export type BaseButtonProps = {
  variant?: Variant;
  pressing?: boolean;
  disabled?: boolean;
};

type ButtonProps = TouchableOpacityProps &
  BaseButtonProps & {
    title?: string;
    uppercase?: boolean;
    connectedBorder?: boolean;
    icon?: string;
    titleProps?: Record<string, unknown>;
  };

export type ButtonTextProps = BaseButtonProps;

export default ButtonProps;
