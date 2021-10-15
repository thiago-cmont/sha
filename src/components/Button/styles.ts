import styled from 'styled-components/native';

import Icon from '../Icon';
import {Text} from '../Typography';
import {BaseButtonProps} from './types';

type ExtButtonProps = BaseButtonProps & {
  connectedBorder: boolean;
};

type ButtonTextProps = BaseButtonProps & {
  uppercase: boolean;
};

export const ContainerShadow = styled.View`
  box-shadow: ${({theme}) => theme.colors.boxShadow};
`;

export const Button = styled.TouchableOpacity.attrs<ExtButtonProps>({
  activeOpacity: 1,
})<ExtButtonProps>`
  min-height: ${({theme, variant}) =>
    variant === 'link' ? '0px' : theme.dimensions.button.height};
  align-items: center;
  justify-content: center;

  background-color: ${({disabled, pressing, variant, theme}) => {
    let retColor = '';
    switch (variant) {
      case 'solid':
        retColor = theme.colors.clickable;
        if (disabled) {
          retColor = theme.colors.disabled;
        }
        break;
      case 'outline':
        retColor = theme.colors.background;
        break;
      case 'hollow':
        if (pressing) {
          retColor = theme.colors.clickable;
          break;
        }
        break;
      case 'link':
        retColor = 'transparent';
        break;
      default:
        break;
    }
    return retColor;
  }};

  border: ${({variant}) => (variant === 'outline' ? 1 : 0)}px;
  border-color: ${({disabled, theme}) => {
    if (disabled) {
      return theme.colors.disabled;
    }
    return theme.colors.primaryDark;
  }};

  border-radius: ${({connectedBorder, theme}) =>
    connectedBorder ? '0px' : theme.dimensions.button.borderRadius};
  border-bottom-left-radius: ${({theme}) =>
    theme.dimensions.button.borderRadius};
  border-bottom-right-radius: ${({theme}) =>
    theme.dimensions.button.borderRadius};

  overflow: hidden;
  elevation: ${({theme, variant}) =>
    variant === 'solid' || variant === 'outline' ? theme.colors.elevation : 0};
`;

export const ButtonContent = styled.View`
  padding: 0px 16px 0px 16px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const ButtonText = styled(Text).attrs<ButtonTextProps>(
  ({uppercase}) => ({
    uppercase,
  }),
)<ButtonTextProps>`
  color: ${({disabled, pressing, variant, theme}) => {
    if (disabled) {
      if (variant === 'solid') return theme.colors.textButtonDisabled;
      return theme.colors.disabled;
    }
    switch (variant) {
      case 'hollow':
        if (pressing) {
          return theme.colors.textButton;
        }
        break;
      case 'outline':
        return theme.colors.clickable;
      case 'link':
        return theme.colors.textButton;
      default:
        return theme.colors.textButton;
    }
    return null;
  }};
  font-size: ${({theme}) => theme.fontSize.button};
  text-align: center;
`;

export const ButtonIcon = styled(Icon).attrs<BaseButtonProps>(
  ({theme, variant, disabled, pressing}) => {
    let iconColor = theme.colors.iconButton;
    switch (variant) {
      case 'hollow':
        if (pressing) {
          iconColor = theme.colors.textButton;
          break;
        }
        break;
      case 'link':
        iconColor = theme.colors.icon;
        break;
      default:
        iconColor = theme.colors.textButton;
    }
    if (disabled) {
      if (variant === 'solid') iconColor = theme.colors.textButtonDisabled;
      iconColor = theme.colors.disabled;
    }
    return {color: iconColor, size: theme.fontSize.title};
  },
)<BaseButtonProps>`
  margin-right: 8px;
`;

export const ButtonPressedOverlay = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${({theme}) => theme.colors.btnDarkOverlay};
  position: absolute;
  left: 0;
  top: 0;
`;
