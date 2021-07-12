import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import {hp, wp} from '../../constants/Dimensions';
import {useSelector} from 'react-redux';
import Fonts from '../../constants/Fonts';
import Colors from '../../constants/Colors';
import {FontSize} from '../../constants/Sizes';

const HeaderTitle = props => {
  const {title, color} = props;

  return (
    <View style={styles.container}>
      <Text style={[styles.text, {color: color}]}>{title}</Text>
    </View>
  );
};

export default HeaderTitle;

const styles = StyleSheet.create({
  container: {
    width: wp(218),
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: FontSize(17),
    fontWeight: '400',
    textAlign: 'center',
    color: Colors.darkGray,
  },
});
