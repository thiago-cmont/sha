import React, {useEffect} from 'react';

import {useDispatch} from 'react-redux';

import FeedList from '../../components/FeedList';
import {asyncGetFeed} from '../../store/ducks/feed';
import * as S from './styles';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const getFeed = () => {
    dispatch(asyncGetFeed());
  };
  useEffect(() => {
    getFeed();
  }, []);
  return (
    <S.Container>
      <FeedList />
    </S.Container>
  );
};
export default Home;
