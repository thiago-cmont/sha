import 'react-native-gesture-handler';
import React from 'react';

import ShaApp from './src/navigations/index';
import RootTheme from './src/themes/RootTheme';

if (__DEV__) {
  import('./src/config/ReactotronConfig');
}

const App: React.FC = () => {
  return (
    <RootTheme>
      <ShaApp />
    </RootTheme>
  );
};

export default App;
