import React from 'react';

import PlaceImage from '../PlacesImage';
import * as S from './styles';
import {PlacesCardInterface} from './types';

const PlacesCard: React.FC<PlacesCardInterface> = ({obj, onPress}) => {
  return (
    <S.Container onPress={() => onPress(obj)}>
      <PlaceImage source={obj.image} />
      <S.TextWrapper>
        <S.PlacesTitle>{obj?.label}</S.PlacesTitle>
        <S.PlacesDescription>Use time:</S.PlacesDescription>
        <S.PlacesDescription>
          {obj.timeAvailable[0].min} to {obj.timeAvailable[0].max}
        </S.PlacesDescription>
      </S.TextWrapper>
    </S.Container>
  );
};

export default PlacesCard;
