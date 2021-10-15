import React, {useEffect} from 'react';

import {useDispatch} from 'react-redux';

import PlaceList from '../../components/PlacesList';
import {asyncGetPlaces} from '../../store/ducks/places';
import * as S from './styles';

const Reservations: React.FC = () => {
  const dispatch = useDispatch();
  const getPlaces = () => {
    dispatch(asyncGetPlaces());
  };
  useEffect(() => {
    getPlaces();
  }, []);
  return (
    <S.Container>
      <PlaceList />
    </S.Container>
  );
};

export default Reservations;
