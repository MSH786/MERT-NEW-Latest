import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Image, Text, Dimensions} from 'react-native';
import {wp, hp} from '../../constants/Dimensions';
import {FontSize} from '../../constants/Sizes';
import Fonts from '../../constants/Fonts';

const InputCodeScreenTextComponent = () => {
  return (
    <>
      <View style={styles.container}>
        {/*Title Text Rect start*/}
        <View style={styles.titleTextRect}>
          <Text style={styles.titletxt}>
            Lütfen belittiğiniz telefon numarasına gelen 6 rakamlı doğrulama
            kodunu giriniz.
          </Text>
        </View>
        {/*Title Text Rect end*/}

        {/*SubTitle Text Rect start*/}
        <View style={styles.subtitletextrect}>
          <Text style={styles.subtitletext}>Kodu Tekrar Gönder</Text>
        </View>
        {/*SubTitle Text Rect end*/}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp(268.6),
    marginTop: hp(15),
    marginBottom: hp(10),
    alignItems: 'center',
  },
  titleTextRect: {
    width: wp(268.6),
    height: hp(35.81),
  },
  titletxt: {
    fontSize: FontSize(13),
    textAlign: 'center',
    color: '#3A2D13',
    fontFamily: Fonts.regular,
    fontWeight: 'normal',
    lineHeight: hp(17),
  },
  subtitletextrect: {
    width: wp(113),
    height: hp(17),
    marginTop: hp(10),
  },
  subtitletext: {
    fontSize: FontSize(13),
    lineHeight: hp(17),
    color: '#F5953C',
    fontWeight: 'normal',
    fontFamily: Fonts.regular,
  },
});

export default InputCodeScreenTextComponent;
