import {all} from 'redux-saga/effects';

import feed from './feed';
import places from './places';
import user from './user';

export default function* sagas(): any {
  yield all(user);
  yield all(feed);
  yield all(places);
}
