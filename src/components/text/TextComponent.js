/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Fonts from '../../constants/Fonts';


const TextComponent = ({children, color, bold, style, ...props}) => {
  return (
    <Text
      {...props}
      style={[
        styles.text,
        {
          color: color ? color : 'black',
          fontWeight: bold ? 'bold' : 'normal',
          ...style,
        },
      ]}>
      {children}
    </Text>
  );
};

export default TextComponent;

const styles = StyleSheet.create({
  text: {
    fontFamily: Fonts.regular,
  },
});
