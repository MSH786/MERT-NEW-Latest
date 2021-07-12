import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {wp, hp} from '../../constants/Dimensions';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import { FontSize } from '../../constants/Sizes';

const LoginFooterCard = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.textNormal}>
        Kaydolarak veya giriş yaparak&nbsp;
        <Text style={styles.textBold}>Şartlar ve Koşullar&nbsp;</Text>ve
        <Text style={styles.textBold}>&nbsp;Gizlilik Politikasını&nbsp;</Text>
        kabul etmiş olursunuz.
      </Text>
    </View>
  );
};

export default LoginFooterCard;

const styles = StyleSheet.create({
  container: {
    width: wp(255),
    height: hp(90),
    justifyContent: 'center',
  },
  textNormal: {
    fontSize: FontSize(14),
    color: Colors.white,
    lineHeight: hp(22),
    opacity: 0.8,
    fontWeight: '400',
    textAlign: 'center',
  },
  textBold: {
    fontSize: FontSize(13),
    color: Colors.primary,
    fontFamily: Fonts.bold,
    fontWeight: '600',
    textAlign: 'center',
  },
});
