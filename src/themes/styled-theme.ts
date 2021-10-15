const colors = {
  primary: '#55A38B',
  primaryDark: '#00543D',
  background: '#FFFFFF',
  opaqueBackground: '#FFFFFFb3',

  white: '#FFFFFF',
  black: '#000000',

  text: '#FFFFFF',
  textDark: '#444444',
  textDisabled: '#AAAAAA',
  textError: '#CE1126',
  textGreen: '#55A38B',

  clickable: '#55A38B',
  clickableActive: '#00543D',
  disabled: '#CCCCCC',
  textButton: '#FFFFFF',
  textButtonGreen: '#55A38B',
  textButtonDisabled: '#FFFFFF',

  iconLight: '#FFFFFF',
  icon: '#55A38B',
  iconDisabled: '#AAAAAA',
  iconAdornment: '#AAAAAA',
  input: '#FFFFFF',
  inputText: '#777777',
  inputBorder: '#55A38B',
  inputLabel: '#FFFFFF',
  inputDisabled: '#DDDDDD',
  inputBorderError: '#CE1126',

  shadow: '#00000029',
  boxShadow: '0 3px 6px #00000029',
  elevation: 4,
  btnDarkOverlay: '#00000033',

  switchDisabled: '#EEEEEE',

  border1: '#55A38B',
  border2: '#CCCCCC',

  tab: '#55A38B',
  tabItem: '#55A38B',
  tabItemSelected: '#00543D',
  tabItemIcon: '#fff',
  tabItemIconSelected: '#fff',
  tabItemLabel: '#fff',
  tabItemLabelSelected: '#fff',
} as const;

const dimensions = {
  button: {
    width: '360px',
    height: '40px',
    borderRadius: '100px',
  },
  roundButton: {
    width: '40px',
    height: '40px',
    borderRadius: '40px',
    icon: '22px',
  },
  input: {
    width: '286px',
    height: '40px',
    borderRadius: '100px',
    borderRadiusExpanded: '10px',
    icon: '22px',
  },
};

const fontSize = {
  title: '25px',
  titleSmall: '20px',
  subtitle: '16px',
  text: '18px',
  smallText: '14px',
  smallerText: '12px',
  header: '22px',
  button: '22px',
  buttonSmall: '16px',
};

export default {colors, dimensions, fontSize};

export type ThemeType = typeof colors & {
  dimensions: typeof dimensions;
  fontSize: typeof fontSize;
};

export type ColorsKeysType = keyof typeof colors;
export type ColorsValuesType = typeof colors[ColorsKeysType];
