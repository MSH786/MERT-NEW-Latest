import {useNavigation} from '@react-navigation/native';

const Navigator = (navigation, screen, params) => {
  navigation.navigate(screen, params);
};

export default Navigator;
