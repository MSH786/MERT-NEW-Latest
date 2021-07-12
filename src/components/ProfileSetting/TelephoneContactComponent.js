import React from 'react';
import {StyleSheet, View, Image, Text, Dimensions} from 'react-native';

import {wp, hp} from '../../constants/Dimensions';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import ChevRightBlack from '../../../assets/icons/Arrows/ChevRightBlack';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

//Eye Icon will be added.

const TelephoneContactComponent = props => {
  const {title, subTitle, icon} = props;
  return (
    <>
      <View style={styles.container}>
        {/*Rect start*/}
        <View style={styles.MainRect}>
          <View style={styles.TitleRect}>
            <Text style={styles.titletxt}>{title}</Text>
            {subTitle ? (
              <Text style={styles.subtitletxt}>{subTitle}</Text>
            ) : null}
          </View>
          {icon ? (
            <View style={styles.TelIconRect}>
              <View style={styles.iconbox}>
                <Ionicons size={12} color="#fff" name={icon} />
              </View>
            </View>
          ) : null}
        </View>
        {/*Rect end*/}
      </View>
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
    paddingBottom: hp(5),
    flexDirection: 'row',
    marginTop: hp(5),
    marginBottom: hp(20),
    borderColor: Colors.lightGray,
  },
  TitleRect: {
    width: wp(260),
    paddingHorizontal: wp(3),
  },
  titletxt: {
    fontSize: wp(17),
    color: '#3A2D13',
    fontFamily: Fonts.regular,
  },
  subtitletxt: {
    fontSize: wp(17),
    fontWeight: 'bold',
  },
  TelIconRect: {
    width: wp(73),
    alignItems: 'flex-end',
    paddingHorizontal: wp(5),
    justifyContent: 'center',
  },
  iconbox: {
    width: wp(32),
    height: hp(36),
    borderRadius: wp(4),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5DECE',
  },
  mapImg: {
    width: wp(332),
    height: hp(183),
  },
});

export default TelephoneContactComponent;
