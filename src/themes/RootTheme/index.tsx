import React from 'react';

import {s, vs} from 'react-native-size-matters';
import {ThemeProvider} from 'styled-components/native';

import {sfs} from '../../utils/scaleHelpers';
import styledTheme from '../styled-theme';

const RootTheme: React.FC = ({children}) => {
  const {dimensions, fontSize} = styledTheme;
  const delta = 0;
  const interpolatedFont = Object.fromEntries(
    Object.entries(fontSize).map(([key, value]) => [
      key,
      `${sfs(parseInt(value, 10)) + delta}px`,
    ]),
  );
  const interpolatedDimensions = Object.fromEntries(
    Object.entries(dimensions).map(([key, value]) => {
      const interpolatedValues = Object.fromEntries(
        Object.entries(value).map(([k, v]) => [
          k,
          (() => {
            if (k === 'width') {
              return `${s(parseInt(v, 10))}px`;
            }
            if (k === 'height') {
              return `${vs(parseInt(v, 10))}px`;
            }
            return v;
          })(),
        ]),
      );
      return [key, interpolatedValues];
    }),
  );
  const combinedTheme = {
    colors: styledTheme.colors,
    fontSize: interpolatedFont,
    dimensions: interpolatedDimensions,
  };
  return <ThemeProvider theme={combinedTheme}>{children}</ThemeProvider>;
};

export default RootTheme;
