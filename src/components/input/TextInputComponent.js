import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Colors from '../../constants/Colors';
import {wp, hp} from '../../constants/Dimensions';
import {FontSize} from '../../constants/Sizes';

const RegisterInputComponent = ({value, onChangeText, placeholder, style}) => {
  return (
    <TextInput
      style={[styles.textInput, {...style}]}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}

      placeholderTextColor={Colors.white80}
    />
  );
};

export default RegisterInputComponent;

const styles = StyleSheet.create({
  textInput: {
    width: wp(311),
    height: hp(35),
    backgroundColor: Colors.whiteTransparent,
    borderRadius: hp(6),
    textAlign: 'left',
    paddingLeft: wp(9),
    fontSize: FontSize(15),
    fontWeight: '400',
    paddingVertical: 0,
    color: Colors.darkGray,
    
    letterSpacing:-0.3,
  },
});
