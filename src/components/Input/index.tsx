import React, {useState, forwardRef} from 'react';
import {
  View,
  Platform,
  TouchableOpacity,
  TextInput,
  InputAccessoryView,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';

import * as S from './styles';
import {InputProps} from './types';

const Input: React.FC<InputProps> = ({
  innerRef,
  label = '',
  helperText = '',
  error = '',
  inputAccessoryViewID = label,
  onFocus = () => {},
  onBlur = () => {},
  ...props
}: InputProps) => {
  const hasLabel = label !== '';
  const accessibilityLabel =
    props.placeholder || props.accessibilityLabel || '';

  const [focused, setFocused] = useState(false);

  const onFocusMid = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    onFocus(e);
    setFocused(true);
  };

  const onBlurMid = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    onBlur(e);
    setFocused(false);
  };

  return (
    <View>
      {hasLabel && (
        <S.LabelWrapper>
          <S.Label>{label}</S.Label>
        </S.LabelWrapper>
      )}
      <TouchableOpacity
        activeOpacity={1}
        accessibilityLabel={accessibilityLabel}
        accessibilityHint="Pressione para digitar"
        onPress={() => innerRef.current.focus()}>
        {/*  pointerEvents="none" is a workaround to wrap Input in a Touchable */}
        <View pointerEvents="none">
          <S.Input
            ref={innerRef}
            error={error}
            focused={focused}
            inputAccessoryViewID={inputAccessoryViewID}
            onFocus={onFocusMid}
            onBlur={onBlurMid}
            {...props}
          />
        </View>
      </TouchableOpacity>
      <S.HelperTextWrapper>
        <S.HelperText type={error ? 'error' : 'info'}>
          {error || helperText}
        </S.HelperText>
      </S.HelperTextWrapper>
      {Platform.OS === 'ios' && inputAccessoryViewID ? (
        <InputAccessoryView nativeID={inputAccessoryViewID}>
          <S.InputAccessoryViewContent>
            <S.InputAccessoryViewContentTouchable
              onPress={() => innerRef && innerRef.current.blur()}>
              <S.HelperText type="info">Confirmar</S.HelperText>
            </S.InputAccessoryViewContentTouchable>
          </S.InputAccessoryViewContent>
        </InputAccessoryView>
      ) : null}
    </View>
  );
};

const FWInput = forwardRef<TextInput, InputProps>((props, ref) => (
  <Input innerRef={ref} {...props} />
));

export default FWInput;
