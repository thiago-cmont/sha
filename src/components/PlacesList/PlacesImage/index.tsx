import React from 'react';

import * as S from './styles';

type PlaceImageType = {
  source: string;
};

const PlaceImage: React.FC<PlaceImageType> = ({source}) => {
  return <S.FeedListImage source={{uri: source}} />;
};

export default PlaceImage;
