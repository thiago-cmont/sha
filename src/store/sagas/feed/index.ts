import {takeEvery, call, select, put} from 'redux-saga/effects';

import api from '../../../config/api/api';
import {Types as feedTypes, getFeed} from '../../ducks/feed';

function* asyncGetFeed() {
  const {feed} = yield select(state => state.feed);
  if (feed.length === 0) {
    const newFeed = yield call(api.methods.feed.getFeed);
    if (newFeed) {
      yield put(getFeed(newFeed));
    }
  }
  return null;
}

const sagas = [takeEvery(feedTypes.ASYNC_GET_FEED, asyncGetFeed)];

export default sagas;
