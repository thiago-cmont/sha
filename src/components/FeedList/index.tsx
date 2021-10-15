import React, {useState} from 'react';

import {useSelector} from 'react-redux';

import FeedCard from './FeedCard';
import * as S from './styles';

type FeedSelectorType = {
  feed: any;
};

const FeedList: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {feed} = useSelector((state: FeedSelectorType) => state.feed);

  const paginationHandler = () => {
    setIsLoading(true);
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  };

  const LoadingIndicator = () => {
    return isLoading ? <S.LoadingIndicator /> : null;
  };

  return (
    <S.Container>
      <S.List
        showsVerticalScrollIndicator={false}
        data={feed}
        renderItem={({item}) => {
          return <FeedCard obj={item} />;
        }}
        key={({index}) => index}
        onEndReached={paginationHandler}
        ListFooterComponent={LoadingIndicator}
        ListHeaderComponent={<S.PageTitle>Feed</S.PageTitle>}
        removeClippedSubviews
      />
    </S.Container>
  );
};
export default FeedList;
