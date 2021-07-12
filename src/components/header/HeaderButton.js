import React from 'react';
import {StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import {hp, wp} from '../../constants/Dimensions';
import Colors from '../../constants/Colors';
import {selectBackgroundColor, selectIconColor} from './HeaderTheme';

const HeaderButton = props => {
  const {
    IconFontFamily,
    iconName,
    iconColor,
    containerStyle,
    headerColor,
    onPress,
  } = props;

  return (
    <TouchableOpacity
      style={[
        styles.container,
        containerStyle,
        {backgroundColor: selectBackgroundColor(headerColor)},
      ]}
      onPress={onPress}>
      <IconFontFamily
        size={wp(16)}
        color={selectIconColor(headerColor)}
        name={iconName}
      />
    </TouchableOpacity>
  );
};

export default HeaderButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightGray,
    height: wp(32),
    width: wp(32),
    marginLeft: wp(22),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp(7),
  },
});
