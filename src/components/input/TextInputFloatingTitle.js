import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import { wp, hp } from '../../constants/Dimensions'
import { FontSize } from '../../constants/Sizes';
import Colors from '../../constants/Colors';

const TextInputFloatingTitle = (props) => {
    const {value, setValue, placeholder, style,title,placeholderTextColor,keyboardType}=props
  return (
    <View>
      <Text style={styles.titleText}>{title}</Text>
      <TextInput
        style={[styles.textInput, {...style}]}
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default TextInputFloatingTitle;

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 6,
    alignSelf: 'center',
    opacity: 0.8,
    paddingLeft: 10,
    borderBottomColor: `${Colors.darkGray}13`,
    borderBottomWidth: 1,
    marginBottom: 10,
    width:"100%",
    height:40
  },
  titleText: {
    color: '#9D9686',
    fontWeight: '800',
    fontSize: FontSize(16),
    marginLeft: 10,
    marginBottom:-10
  },
});
