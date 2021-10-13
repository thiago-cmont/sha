import 'react-native-gesture-handler';
import React from 'react';

import ShaApp from './src/navigations/index';

if (__DEV__) {
  import('./src/config/ReactotronConfig');
}

const App: React.FC = () => {
  return <ShaApp />;
};

export default App;
