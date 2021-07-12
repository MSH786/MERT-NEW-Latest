import React from 'react';
import {StyleSheet, View} from 'react-native';
import {hp, wp} from '../../../constants/Dimensions';
import Colors from '../../../constants/Colors';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import TouchableComponent from '../../custom/TouchableComponent';
import HeaderButton from '../HeaderButton';
import navigator from '../../../utils/navigator';

const NotificationButtonSmall = props => {
  const {buttonColor, headerColor} = props;
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

export default NotificationButtonSmall;

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
