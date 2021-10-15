import React from 'react';

import FeedImage from '../FeedImages';
import * as S from './styles';
import {FeedCardInterface} from './types';

const FeedCard: React.FC<FeedCardInterface> = ({obj}) => {
  return (
    <S.Container>
      <FeedImage source={obj.image} />
      <S.TextWrapper>
        <S.FeedTitle>{obj?.title}</S.FeedTitle>
        <S.FeedDescription>
          {' '}
          {obj.description.substr(0, 60)}...
        </S.FeedDescription>
      </S.TextWrapper>
    </S.Container>
  );
};

export default FeedCard;
