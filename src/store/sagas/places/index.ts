import {takeEvery, call, select, put} from 'redux-saga/effects';

import api from '../../../config/api/api';
import {Types as placesTypes, getPlaces} from '../../ducks/places';

function* asyncGetPlaces() {
  const {places} = yield select(state => state.places);
  const {user} = yield select(state => state);
  if (places.length === 0) {
    const newPlaces = yield call(
      api.methods.places.getPlaces,
      user.apartmentComplexId,
    );
    if (places) {
      yield put(getPlaces(newPlaces));
    }
    return null;
  }
  return null;
}

const sagas = [takeEvery(placesTypes.ASYNC_GET_PLACES, asyncGetPlaces)];

export default sagas;
