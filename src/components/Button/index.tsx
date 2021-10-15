import React, {useState} from 'react';

import * as S from './styles';
import ButtonProps from './types';

const Button: React.FC<ButtonProps> = ({
  title = 'Botão',
  uppercase = false,
  variant = 'solid',
  icon = '',
  onPressIn = () => {},
  onPressOut = () => {},
  disabled,
  titleProps = {},
  ...props
}: ButtonProps) => {
  const [pressing, setPressing] = useState(false);

  const commonProps = {variant, pressing, disabled};

  return (
    <S.ContainerShadow accessible={false}>
      <S.Button
        onPressIn={e => {
          setPressing(true);
          onPressIn(e);
        }}
        onPressOut={e => {
          setPressing(false);
          onPressOut(e);
        }}
        {...commonProps}
        {...props}>
        {pressing ? <S.ButtonPressedOverlay /> : null}
        <S.ButtonContent>
          {icon !== '' && <S.ButtonIcon name={icon} {...commonProps} />}
          <S.ButtonText uppercase={uppercase} {...titleProps} {...commonProps}>
            {title}
          </S.ButtonText>
        </S.ButtonContent>
      </S.Button>
    </S.ContainerShadow>
  );
};

export default Button;
