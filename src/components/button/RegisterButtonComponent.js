import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import TextComponent from '../text/TextComponent';
const RegisterButtonComponent = ({logo, title, style, titleColor, method}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        // navigation.navigate('TabNavigator');
        method();
      }}
      style={[styles.container, {...style}]}>
      <View style={styles.logo}>{logo}</View>
      <TextComponent color={titleColor ? titleColor : 'white'}>
        {title}
      </TextComponent>
    </TouchableOpacity>
  );
};

export default RegisterButtonComponent;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    flexDirection: 'row',
    backgroundColor: 'rgb(119,102,92)',
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
    width: 300,
  },
  logo: {
    borderRightWidth: 1,
    borderRightColor: 'white',
    marginRight: 15,
    paddingRight: 10,
  },
});
