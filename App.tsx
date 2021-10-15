import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';

import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {persistStore, getStoredState} from 'redux-persist';

import ShaApp from './src/navigations/index';
import Store, {store, persistConfig} from './src/store';
import RootTheme from './src/themes/RootTheme';

if (__DEV__) {
  import('./src/config/ReactotronConfig');
}

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const persistor = persistStore(store, null, () => {
    setLoading(false);
  });

  function startStore() {
    getStoredState(persistConfig, state => {
      persistor.rehydrate(state);
      persistor.resume();
    });
  }
  startStore();
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={Store}>
      <RootTheme>{!loading && <ShaApp />}</RootTheme>
    </Provider>
  );
};

export default App;
