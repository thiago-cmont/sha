import React from 'react';

import {ThemeProvider} from 'styled-components/native';

import colors from '../colors';

const RootTheme: React.FC = ({children}) => {
  const combinedTheme = {
    ...colors,
  };
  return <ThemeProvider theme={combinedTheme}>{children}</ThemeProvider>;
};

export default RootTheme;
