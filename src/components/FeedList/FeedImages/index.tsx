import React from 'react';

import * as S from './styles';

type FeedImageType = {
  source: string;
};

const FeedImage: React.FC<FeedImageType> = ({source}) => {
  return <S.FeedListImage source={{uri: source}} />;
};

export default FeedImage;
