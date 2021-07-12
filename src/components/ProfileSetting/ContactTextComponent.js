import React from 'react';
import {StyleSheet, View, Image, Text, Dimensions} from 'react-native';

import {wp, hp} from '../../constants/Dimensions';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import ChevRightBlack from '../../../assets/icons/Arrows/ChevRightBlack';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

//Eye Icon will be added.

const ContactTextComponent = props => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.TitleRect}>
          <Text style={styles.titletxt}>Alicibul Bilgi Teknolojileri A.S.</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp(333),
  },
  TitleRect: {
    width: wp(333),
    marginTop: hp(15),
    marginBottom: hp(10),
  },
  titletxt: {
    fontSize: wp(17),
    fontWeight: '800',
    fontStyle: 'normal',
    lineHeight: hp(23),
    fontFamily: Fonts.regular,
  },
});

export default ContactTextComponent;
