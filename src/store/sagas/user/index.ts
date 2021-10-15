import reactotron from 'reactotron-react-native';
import {takeEvery, put, call} from 'redux-saga/effects';

import api from '../../../config/api/api';
import {setSigned} from '../../ducks/auth';
import {Types as userTypes, getUser, logoutUser} from '../../ducks/user';

function* asyncGetUser({payload}) {
  const {email, password} = payload;
  const users = yield call(api.methods.user.getUser);
  let isRegistered;
  if (users) {
    const userIndex = users.map((user, index) => {
      if (user.email === email && user.password === password) {
        isRegistered = true;
        return index;
      }
      isRegistered = false;
      reactotron.log('Account not valid');
    });
    if (isRegistered) {
      yield put(getUser(users[userIndex]));
      yield put(setSigned(true));
    }
  }
  return null;
}

function* asyncLogoutUser() {
  yield put(logoutUser());
  yield put(setSigned(false));
}

const sagas = [
  takeEvery(userTypes.ASYNC_GET_USER, asyncGetUser),
  takeEvery(userTypes.ASYNC_LOGOUT_USER, asyncLogoutUser),
];

export default sagas;
