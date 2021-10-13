const colors = {
  primary: '#55A38B',
  primaryDark: '#00543D',
  background: '#FFFFFF',
  background2: '#EEEEEE',
  opaqueBackground: '#FFFFFFb3',

  white: '#FFFFFF',
  black: '#000000',

  text: '#555555',
  textDark: '#444444',
  textLight: '#707070',
  textLighter: '#EEEEEE',
  textDisabled: '#CCCCCC',
  textDisabledDark: '#AAAAAA',
  textError: '#CE1126',
  textBlue: '#55A38B',

  clickable: '#55A38B',
  clickableActive: '#00543D',
  disabled: '#CCCCCC',
  textBtn: '#FFFFFF',
  textBtn2: '#55A38B',
  textBtnDisabled: '#FFFFFF',
  pressableArrow: '#555555',

  iconBtn: '#FFFFFF',
  icon: '#55A38B',
  iconBtnDisabled: '#DDDDDD',
  iconDisabled: '#FFFFFF',
  iconAdornment: '#AAAAAA',

  input: '#FFFFFF',
  inputText: '#777777',
  inputBorder: '#55A38B',
  inputLabel: '#555555',
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

export default {colors};

export type ColorsKeysType = keyof typeof colors;
export type ColorsValuesType = typeof colors[ColorsKeysType];
