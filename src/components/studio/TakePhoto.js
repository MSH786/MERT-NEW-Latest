import React from 'react';
import {StyleSheet, TouchableOpacity, View, Image, Text} from 'react-native';
import {wp, hp} from '../../constants/Dimensions';
import Colors from '../../constants/Colors';

//Icons
import {galleryIcon} from '../../constants/Icons';
import Chevright from '../../../assets/icons/Arrows/Chevright';

const TakePhoto = props => {
  const {onPressTakePhoto, lastImage, onPressGallery,onPressNext} = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressGallery} style={styles.galleryBox}>
        <Image
          style={styles.lastImage}
          source={lastImage != '' ? {uri: lastImage} : galleryIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onPressTakePhoto}
        style={styles.circularButton}></TouchableOpacity>
      <TouchableOpacity onPress={onPressNext}
        style={[styles.galleryBox, {backgroundColor: Colors.primary}]}>
        <Chevright color={Colors.white} />
      </TouchableOpacity>
    </View>
  );
};

export default TakePhoto;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: hp(110),
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  galleryBox: {
    width: hp(40),
    height: hp(40),
    backgroundColor: Colors.lightGray,
    borderRadius: hp(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  circularButton: {
    width: hp(85),
    height: hp(85),
    borderRadius: hp(45),
    borderWidth: wp(5),
    borderColor: Colors.lightGray,
    backgroundColor: `${Colors.lightGray}50`,
  },
  lastImage: {
    width: '100%',
    height: '100%',
    borderRadius: hp(5),
  },
});
