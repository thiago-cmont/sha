import React, {
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
  useCallback,
} from 'react';

import * as S from './styles';
import {SelectProps, DataType} from './types';

const Select: React.FC<SelectProps> = ({
  innerRef,
  label = '',
  helperText = '',
  error = '',
  data = [],
  defaultText = 'Nenhum selecionado',
  onChange = (item: any) => {},
}: SelectProps) => {
  const hasLabel = label !== '';
  const [expanded, setExpanded] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DataType>(null);

  const toggleExpand = () => {
    setExpanded(old => !old);
  };

  const handleExpandOff = itemId => {
    const [newSelectedItem] = data.filter(item => item.id === itemId);
    setSelectedItem(newSelectedItem || null);
    toggleExpand();
  };

  const getSelectedItem = useCallback(() => {
    return selectedItem;
  }, [selectedItem]);

  useImperativeHandle(
    innerRef,
    () => ({
      getSelectedItem,
    }),
    [getSelectedItem],
  );

  useEffect(() => {
    onChange(selectedItem);
  }, [selectedItem]);

  return (
    <S.SelectWrapper>
      {hasLabel && (
        <S.LabelWrapper>
          <S.Label>{label}</S.Label>
        </S.LabelWrapper>
      )}
      <S.ContainerShadow>
        <S.Container expanded={expanded}>
          <S.SelectItem
            accessibilityLabel={selectedItem?.label || defaultText}
            accessibilityHint="Pressione para exibir as opções"
            onPress={() => {
              if (!expanded) {
                toggleExpand();
              } else {
                handleExpandOff(0);
              }
            }}>
            <S.SelectItemDescription
              textDisabled={expanded || selectedItem === null}>
              {!expanded ? selectedItem?.label || defaultText : defaultText}
            </S.SelectItemDescription>
            <S.SelectIndicator expanded={expanded} name="menu-down" />
          </S.SelectItem>
          <S.ContainerExpansible>
            {data.map((item: DataType) => (
              <S.SelectItem
                key={item.id}
                accessibilityLabel={`Opção ${item.id}`}
                accessibilityHint={`${item.label}`}
                accessible={expanded}
                onPress={() => handleExpandOff(item.id)}>
                <S.SelectItemDescription textDisabled={false}>
                  {item.label}
                </S.SelectItemDescription>
              </S.SelectItem>
            ))}
          </S.ContainerExpansible>
        </S.Container>
      </S.ContainerShadow>
      <S.HelperTextWrapper>
        <S.HelperText type={error ? 'error' : 'info'}>
          {helperText}
        </S.HelperText>
      </S.HelperTextWrapper>
    </S.SelectWrapper>
  );
};

const FWSelect = forwardRef<any, SelectProps>((props, ref) => (
  <Select innerRef={ref} {...props} />
));

export default FWSelect;
