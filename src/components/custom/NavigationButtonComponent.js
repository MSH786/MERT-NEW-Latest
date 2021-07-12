import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { wp, hp } from '../../constants/Dimensions'

const NavigationButtonComponent = ({children, onPress}) => {
  return <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>;
};

export default NavigationButtonComponent;

const styles = StyleSheet.create({
  button: {
    width: wp(5),
    height: hp(5),
    borderRadius: 7,
    opacity: 0.5,
  },
});
