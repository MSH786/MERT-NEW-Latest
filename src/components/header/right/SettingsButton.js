import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {hp, wp} from '../../../constants/Dimensions';
import {useNavigation} from '@react-navigation/native';
import HeaderButton from '../HeaderButton';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Colors from '../../../constants/Colors';
import navigator from '../../../utils/navigator';

const SettingsButton = props => {
  const {buttonColor, headerColor} = props;

  const navigation = useNavigation();

  const onHandle = () => {
    navigator(navigation, 'SettingsScreen');
  };

  return (
    <HeaderButton
      IconFontFamily={Fontisto}
      iconName={'player-settings'}
      headerColor={headerColor}
      containerStyle={styles.containerStyle}
      onPress={onHandle}
    />
  );
};

export default SettingsButton;

const styles = StyleSheet.create({
  containerStyle: {
    marginLeft: wp(0),
    marginRight: wp(9),
  },
});
