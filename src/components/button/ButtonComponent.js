import {useTheme} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import TextComponent from '../text/TextComponent';
import { wp, hp } from '../../constants/Dimensions'

const ButtonComponent = ({
  title,
  buttonStyle,
  textStyle,
  onPress,
  textProps,
  icon,
  ...props
}) => {
  const {colors} = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: props.disabled
            ? colors.disabledButtonBG
            : colors.buttonBG,
         
        },
        {...buttonStyle},
      ]}
      {...props}>
      <TextComponent color="white" {...textProps} style={{...textStyle}}>
        {title}
      </TextComponent>
      {icon}
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  button: {
    width: wp(311),
    height: hp(35),
    justifyContent: 'center',
    alignItems: 'center', 
    alignSelf: 'center', 
    borderRadius:hp(6),
  },
});
