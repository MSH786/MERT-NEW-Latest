import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {hp, wp} from '../../../constants/Dimensions';
import {useNavigation} from '@react-navigation/native';
import HeaderButton from '../HeaderButton';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Colors from '../../../constants/Colors';

const BackButton = props => {
  const {buttonColor, headerColor, style, onPress} = props;

  const navigation = useNavigation();

  const onHandle = () => {
    navigation.goBack();
  };

  return (
    <HeaderButton
      IconFontFamily={SimpleLineIcons}
      iconName={'arrow-left'}
      headerColor={headerColor}
      containerStyle={[styles.containerStyle, style]}
      onPress={onHandle}
    />
  );
};

export default BackButton;

const styles = StyleSheet.create({
  containerStyle: {
    height: wp(32),
    width: wp(32),
    marginLeft: wp(9),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp(7),
  },
});
