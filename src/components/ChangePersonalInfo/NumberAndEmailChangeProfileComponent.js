import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import {wp, hp} from '../../constants/Dimensions';
import ChevRightBlack from '../../../assets/icons/Arrows/ChevRightBlack';
import Colors from '../../constants/Colors';
import {FontSize} from '../../constants/Sizes';
import Fonts from '../../constants/Fonts';

//Eye Icon will be added.

const NumberAndEmailChangeProfileComponent = ({title, subtitle, onPress}) => {
  return (
    <>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        {/*Telephone Rect start*/}
        <View style={styles.subtitlerect}>
          <Text style={styles.subtitletxt}>{title}</Text>
        </View>
        <View style={styles.MainRect}>
          <View style={styles.TitleRect}>
            <Text style={styles.titletxt}>{subtitle}</Text>
          </View>
          <View style={styles.TelIconRect}>
            <ChevRightBlack />
          </View>
        </View>
        {/*Telephone Rect end*/}
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp(333),
  },
  MainRect: {
    width: wp(333),
    borderBottomWidth: hp(1),
    borderColor: Colors.lightGray,
    paddingBottom: hp(5),
    flexDirection: 'row',
    marginTop: hp(5),
    marginBottom: hp(8),
  },
  TitleRect: {
    width: wp(260),
    paddingHorizontal: wp(3),
  },
  titletxt: {
    fontSize: FontSize(17),
    fontFamily: Fonts.regular,
    fontWeight: 'normal',
    color: '#3A2D13',
    lineHeight: 20,
  },
  subtitlerect: {
    width: wp(260),
    marginTop: hp(10),
    paddingHorizontal: wp(3),
  },
  subtitletxt: {
    fontSize: FontSize(17),
    fontFamily: Fonts.regular,
    fontWeight: 'normal',
  },
  TelIconRect: {
    width: wp(73),
    alignItems: 'flex-end',
    paddingHorizontal: wp(5),
    justifyContent: 'center',
  },
});

export default NumberAndEmailChangeProfileComponent;
