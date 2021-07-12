import {DefaultTheme} from '@react-navigation/native';

const DarkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    text: 'red',
    bg: 'yellow',
    buttonBG: '#F5953C',
    disabledButtonBG: 'rgb(110,83,57)',
  },
};

export default DarkTheme;
