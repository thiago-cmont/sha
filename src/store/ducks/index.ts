import {combineReducers} from 'redux';

import auth from './auth';
import feed from './feed';
import places from './places';
import user from './user';

const reducers = combineReducers({
  auth,
  user,
  feed,
  places,
});

export type AppState = ReturnType<typeof reducers>;
export default reducers;
