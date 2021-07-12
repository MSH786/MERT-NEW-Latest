import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
export const COLORS = {
  // default font color
  font: '#000000',

  // base colors
  primary: "#F5953C",
  secondary: "#6B68FE",
  tertiary: '#FFE358',
  orange: '#F5953C',
  lightGray: '#E5DECE',
  categoriesOrange: 'rgb(221,102,62)',
  headerTitle: '#3A2D13',
  headerBacktButton: '#E5DECE',
  homeItem: '#9D9686',
  homeItemPrice: '#ED5D2F',
  
  // non-colors
  black: '#000020',
  white: '#FFFFFF',

  // color variations
  gray: '#535453',
  error: '#DC3545',
  warning: '#FFE358',
  success: '#4CD964',
  info: '#4DA1FF',
  cardBackground: 'rgb(225,	217,	199)',

  //transparent
  whiteTransparent: "rgba(255,255,255,0.2)",
};

export const SHADOW = {
  shadowColor: 'rgba(14, 21, 31, 0.06)',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 3,
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 16,
  buttonRadius: 6,
  padding: 24,
  cardHeight: 120,

  // font sizes
  h1: 34,
  h2: 24,
  h3: 20,
  title: 18,
  subtitle: 14,
  caption: 12,
  small: 10,

  // app dimensions
  width,
  height,

  cardBorderRadius: 7,
};

export const WEIGHTS = {
  regular: 'normal',
  bold: 'bold',
  semibold: '500',
  medium: '400',
  light: '300',
};

export const FONTFAMILY = {
  regular: 'Avenir',
  bold: 'Avenir'
};

export default { COLORS, SHADOW, FONTFAMILY, SIZES };
