import {DefaultTheme} from '@react-navigation/native';

const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    text: 'blue',
    bg: 'red',
    buttonBG: '#F5953C',
    disabledButtonBG: 'rgb(110,83,57)',
  },
};

export default LightTheme;