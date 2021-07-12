import React from 'react';
import {StyleSheet, View, Image, Text, Dimensions} from 'react-native';

import {wp, hp} from '../../constants/Dimensions';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import ChevRightBlack from '../../../assets/icons/Arrows/ChevRightBlack';
import Chevdown from '../../../assets/icons/Arrows/Chevdown';

const {width, height} = Dimensions.get('window');

//Eye Icon will be added.

const ProfileDisplay = props => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.profileImgRect}>
          <Image
            style={styles.profileImg}
            source={require('../../../assets/images/profileImg.png')}></Image>
        </View>
        <View style={styles.AboutProfileRect}>
          <View style={styles.ProfileTitleREct}>
            <Text style={styles.profiletitletxt}>Ad</Text>

            <Text style={styles.profilenametxt}>Baran</Text>
          </View>
          <View style={styles.ProfileTitleREct}>
            <Text style={styles.profiletitletxt}>Soyad</Text>
            <Text style={styles.profilenametxt}>Kurga</Text>
          </View>
          <View style={styles.ProfileSelectCountry}>
            <View style={{width: wp(190)}}>
              <Text style={styles.profiletitletxt}>Konum</Text>
            </View>
            <View style={{width: wp(190), flexDirection: 'row'}}>
              <View style={{width: wp(170)}}>
                <Text style={styles.profilenametxt}>Maltepe, Istanbul</Text>
              </View>
              <View style={{width: wp(10), alignItems: 'center'}}>
                <Chevdown />
              </View>
            </View>
          </View>
          <View style={styles.profileBtnRect}>
            <Text style={styles.profilebtntxt}>Profil Resmini Duzenle</Text>
          </View>
        </View>
      </View>

      <View style={styles.endborder}></View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp(333),
    marginTop: hp(10),
    marginBottom: hp(10),
    flexDirection: 'row',
  },
  profileImgRect: {
    width: wp(143),
  },
  profileImg: {
    width: wp(142),
    height: hp(174),
    borderRadius: wp(7),
  },
  AboutProfileRect: {
    width: wp(190),
    paddingHorizontal: wp(6),
    left: wp(5),
  },
  ProfileTitleREct: {
    width: wp(180),
    borderBottomWidth: hp(1),
    // borderColor: 'rgba(58, 45, 19, 0.07)',
    borderColor: Colors.lightGray,
    marginBottom: hp(6),
  },
  profiletitletxt: {
    fontSize: wp(14),
    fontFamily: Fonts.regular,
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: hp(19),
    color: '#3A2D13',
  },
  profilenametxt: {
    top: -2,
    fontSize: wp(17),
    fontFamily: Fonts.bold,
    fontWeight: 'bold',
    lineHeight: hp(19),
    color: '#3A2D13',
  },
  ProfileSelectCountry: {
    width: wp(180),
    borderBottomWidth: hp(1),
    borderColor: Colors.lightGray,
    marginBottom: hp(6),
  },
  profileBtnRect: {
    width: wp(177),
    height: hp(24),
    marginTop: hp(8),
    borderRadius: wp(4),
    alignItems: 'center',
    backgroundColor: '#E5DECE',
  },
  profilebtntxt: {
    fontSize: wp(15),
    fontStyle: 'normal',
    fontFamily: Fonts.regular,
    fontWeight: '400',
    color: '#3A2D13',
    opacity: 0.83,
    padding: 1,
  },
  endborder: {
    borderWidth: 0.5,
    width: wp(380),
    marginTop: hp(10),
    borderColor: '#F6C494',
  },
});

export default ProfileDisplay;
