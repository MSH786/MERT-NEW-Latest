import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Image, Text, Dimensions} from 'react-native';
import {wp, hp} from '../../constants/Dimensions';
import {FontSize} from '../../constants/Sizes';
import Fonts from '../../constants/Fonts';

//Eye Icon will be added.

const ButtonComponent = props => {
  const {title} = props;
  return (
    <>
      <View style={styles.container}>
        <View style={styles.mainButtonComponent}>
          <Text style={styles.buttontxt}>{title}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp(327.58),
    marginTop: hp(10),
    marginBottom: hp(10),
    alignItems: 'center',
  },
  mainButtonComponent: {
    width: wp(327.58),
    height: hp(36.87),
    backgroundColor: '#F5953C',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttontxt: {
    fontSize: FontSize(15),
    lineHeight: hp(17),
    fontWeight: 'normal',
    color: '#fff',
    paddingVertical: hp(1),
    fontFamily: Fonts.regular,
  },
});

export default ButtonComponent;
