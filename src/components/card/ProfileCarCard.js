import React from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
import {wp, hp} from '../../constants/Dimensions';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import FilledHeartIcon from '../../../assets/icons/CardIcons/FilledHeartIcon';
import {FontSize} from '../../constants/Sizes';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';

//Eye icon will be added.
//Likers image overlay will be added.

const ProfileCarCard = props => {
  const {item} = props;
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.image} source={item.image} />
      <View style={styles.carInfosContainer}>
        <View>
          <View style={{flexDirection: 'row', marginTop: hp(6)}}>
            <Text style={styles.brandText}>{item.brand}</Text>
            <Text
              style={
                styles.carModelText
              }>{`${item.model} - ${item.modelYear}`}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                flexDirection: 'row',
                marginRight: wp(11),
                alignItems: 'center',
              }}>
              <FontAwesome5 name={'eye'} color={Colors.softGray} />

              <Text
                style={{
                  ...styles.detailsCountText,
                  ...{marginLeft: wp(6.41)},
                }}>
                2,938
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <AntDesign name={'heart'} color={Colors.softGray} />
              <Text
                style={{
                  ...styles.detailsCountText,
                  ...{marginLeft: wp(4.69)},
                }}>
                172
              </Text>
            </View>
          </View>
        </View>
        <View style={{marginTop: hp(6)}}>
          <Text
            style={styles.priceText}>{`${item.price}${item.currency}`}</Text>
          <Text style={styles.adNoText}>#{item.adId}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp(332),
    height: wp(199),
    backgroundColor: Colors.white,
    alignSelf: 'center',
    marginBottom: hp(9),

    borderRadius: hp(7),

    shadowColor: '#rgba(14, 21, 31, 0.56)',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  editIconContainer: {
    position: 'absolute',
    top: wp(11),
    left: wp(288),
    backgroundColor: Colors.darkGray,
  },
  carInfosContainer: {
    height: wp(54),
    marginHorizontal: wp(13),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  brandText: {
    fontSize: FontSize(17),
    fontWeight: '500',
    textAlign: 'center',
    marginRight: wp(7),
    lineHeight: wp(23.22),
    fontFamily: Fonts.primary,
  },
  carModelText: {
    fontWeight: '400',
    fontSize: FontSize(17),
    textAlign: 'center',
    lineHeight: wp(23.22),
    fontFamily: Fonts.primary,
  },
  priceText: {
    fontWeight: '800',
    fontSize: FontSize(17),
    lineHeight: wp(23.22),
    textAlign: 'center',
    color: Colors.mainOrange,
    fontFamily: Fonts.primary,
  },
  adNoText: {
    fontSize: FontSize(13),
    lineHeight: wp(16),
    fontWeight: '400',
    opacity: 0.63,
    alignSelf: 'flex-end',
    color: Colors.darkGray,
    fontFamily: Fonts.secondary,
  },
  detailsCountText: {
    fontWeight: '400',
    lineHeight: wp(16),
    fontSize: FontSize(13),
    opacity: 0.63,
    color: Colors.darkGray,
    textAlign: 'center',
    fontFamily: Fonts.secondary,
  },
  image: {
    width: wp(332),
    height: wp(145),
    borderTopLeftRadius: wp(7),
    borderTopRightRadius: wp(7),
    resizeMode: 'center',
  },
  editIconContainer: {
    position: 'absolute',
    top: wp(11),
    left: wp(288),
    backgroundColor: Colors.darkGray,
  },
  carInfosContainer: {
    height: wp(54),
    marginHorizontal: wp(13),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  brandText: {
    fontSize: FontSize(17),
    fontWeight: '500',
    textAlign: 'center',
    marginRight: wp(7),
    lineHeight: wp(23.22),
    fontFamily: Fonts.primary,
  },
  carModelText: {
    fontWeight: '400',
    fontSize: FontSize(17),
    textAlign: 'center',
    lineHeight: wp(23.22),
    fontFamily: Fonts.primary,
  },
  priceText: {
    fontWeight: '800',
    fontSize: FontSize(17),
    lineHeight: wp(23.22),
    textAlign: 'center',
    color: Colors.mainOrange,
    fontFamily: Fonts.primary,
  },
  adNoText: {
    fontSize: FontSize(13),
    lineHeight: wp(16),
    fontWeight: '400',
    opacity: 0.63,
    alignSelf: 'flex-end',
    color: Colors.darkGray,
    fontFamily: Fonts.secondary,
  },
  detailsCountText: {
    fontWeight: '400',
    lineHeight: wp(16),
    fontSize: FontSize(13),
    opacity: 0.63,
    color: Colors.darkGray,
    textAlign: 'center',
    fontFamily: Fonts.secondary,
  },
});

export default ProfileCarCard;
