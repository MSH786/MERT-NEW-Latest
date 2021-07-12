import React from 'react';
import {StyleSheet, View, Image, Text, Dimensions} from 'react-native';
import GearIcon from '../../../assets/icons/CardIcons/GearIcon';
import {wp, hp} from '../../constants/Dimensions';
import Fonts from '../../constants/Fonts';
import Colors from '../../constants/Colors';
import {FontSize} from '../../constants/Sizes';
import * as Images from '../../constants/Images';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {HorizontalSeparatorComponent} from '../seperator/HorizontalSeparatorComponent';

const {width, height} = Dimensions.get('window');

//Eye Icon will be added.

const ProfileInfosCard = props => {
  const {profilePhoto, firstName, location, viewersCount} = props;
  return (
    <View>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={Images.profileAvatar} />
        </View>
        <View style={styles.infosContainer}>
          <Text style={styles.nameText}>Baran Kurga</Text>
          <Text style={styles.locationText}>Maltepe, İstanbul</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <AntDesign name={'eye'} size={wp(15)} color={Colors.softGray} />
            <Text style={styles.viewersText}>2,938</Text>
          </View>
        </View>
      </View>
      <HorizontalSeparatorComponent style={styles.seperator} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    width: wp(331),
    flexDirection: 'row',
    alignSelf: 'center',
   // marginTop: hp(15),
  },
  imageContainer: {
    borderRadius: wp(10),
    height: wp(175),
    width: wp(143),
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  infosContainer: {
    justifyContent: 'center',
    position: 'absolute',
    top: wp(79),
    left: wp(158),
  },
  nameText: {
    fontSize: FontSize(23),
    fontFamily: Fonts.primary,
    fontWeight: '800',
    lineHeight: wp(31.42),
    textAlign: 'center',
    color: Colors.darkGray,
  },
  locationText: {
    fontFamily: Fonts.regular,
    color: Colors.darkGray,
    fontSize: FontSize(15),
    lineHeight: wp(20),
    opacity: 0.6,
    fontWeight: '400',
  },
  viewersText: {
    fontFamily: Fonts.primary,
    color: Colors.darkGray,
    fontSize: FontSize(15),
    lineHeight: wp(20),
    marginLeft: wp(6.41),
    fontWeight: '400',
    opacity: 0.6,
  },
  seperator: {
    width: '100%',
    borderColor: 'rgba(58, 45, 19, 0.07)',
    borderWidth: wp(0.5),
    marginTop: wp(23),
  },
});

export default ProfileInfosCard;
