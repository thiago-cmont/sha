import AsyncStorage from '@react-native-async-storage/async-storage';
import {applyMiddleware, compose, createStore} from 'redux';
import {persistReducer} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import thunkMiddleware from 'redux-thunk';

import {reactotron} from '../config/ReactotronConfig';
import reducers from './ducks';
import sagas from './sagas';

export const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  debounce: 0.1,
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, reducers);
const sagaMonitor =
  __DEV__ && process.env.NODE_ENV !== 'test'
    ? reactotron.createSagaMonitor()
    : null;
const sagaMiddleware = createSagaMiddleware({sagaMonitor});
const middleware = [thunkMiddleware];

let composed = applyMiddleware(...middleware, sagaMiddleware);

if (
  (process.env.NODE_ENV !== 'production' || __DEV__) &&
  process.env.NODE_ENV !== 'test'
) {
  composed = compose(
    applyMiddleware(...middleware, sagaMiddleware),

    reactotron.createEnhancer(),
  );
}

export const store = createStore(persistedReducer, composed);
sagaMiddleware.run(sagas);

export default store;
