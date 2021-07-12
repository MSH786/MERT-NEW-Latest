import React from 'react';
import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {wp, hp} from '../../constants/Dimensions';
import Colors from '../../constants/Colors';
import {VerticalSeparatorComponent} from '../seperator/VerticalSeparatorComponent';
import TouchableComponent from '../custom/TouchableComponent';

const CircleSocialButtonComponent = ({Icon, containerStyles, onPress}) => {
  return (
    <TouchableComponent
      onPress={onPress}
      style={[styles.container, {...containerStyles}]}>
      <Icon width={wp(20)} height={wp(20)} />
    </TouchableComponent>
  );
};

export default CircleSocialButtonComponent;

CircleSocialButtonComponent.defaultProps = {
  title: 'text',
  icon: '',
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white90,
    width: wp(33),
    height: wp(33),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp(33),
  },
  icon: {
    resizeMode: 'center',
    width: wp(25),
    height: wp(25),
  },
});
