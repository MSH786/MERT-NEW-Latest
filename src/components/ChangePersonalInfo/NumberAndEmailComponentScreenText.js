import React from 'react';
import {StyleSheet, View, Image, Text, Dimensions} from 'react-native';

import {wp, hp} from '../../constants/Dimensions';
import {FontSize} from '../../constants/Sizes';
import Fonts from '../../constants/Fonts';

//Eye Icon will be added.

const NumberAndEmailComponentScreenText = props => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.MainRect}>
          <Text style={styles.subtitletxt}>
            Kişisel verilerin işlenmesi ile alakalı aydınlatma metnine{' '}
            <Text style={{color: '#F5953C'}}>buradan</Text> ulaşabilirsiniz.
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp(333),
    alignItems: 'center',
  },
  MainRect: {
    width: wp(295),
    alignItems: 'center',
    marginTop: hp(10),
    marginBottom: hp(20),
  },
  subtitletxt: {
    fontSize: FontSize(13),
    lineHeight: 17.76,
    textAlign: 'center',
    color: 'rgba(58, 45, 19, 0.5)',
    fontWeight: 'normal',
    fontFamily: Fonts.regular,
  },
});

export default NumberAndEmailComponentScreenText;
