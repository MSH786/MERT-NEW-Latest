import React from 'react';
import {StyleSheet, View} from 'react-native';
import {hp, wp} from '../../../constants/Dimensions';
import Colors from '../../../constants/Colors';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HeaderButton from '../HeaderButton';

import navigator from '../../../utils/navigator';

const NotificationButtonBig = props => {
  const {headerColor} = props;

  const navigation = useNavigation();

  return (
    <HeaderButton
      IconFontFamily={MaterialIcons}
      iconName={'notifications-active'}
      headerColor={headerColor}
      containerStyle={styles.containerStyle}
      onPress={() => {
        navigator(navigation, 'NotificationsScreen');
      }}
    />
  );
};

export default NotificationButtonBig;

const styles = StyleSheet.create({
  containerStyle: {
    height: hp(42),
    width: wp(42),
    marginLeft: wp(9),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp(7),
  },
});
