import React from 'react';
import {Image, TouchableOpacity, StyleSheet, Platform} from 'react-native';

import {wp, hp} from '../../constants/Dimensions';
import Colors from '../../constants/Colors';

const ProfilePhotoCard = ({profilePhoto, style, imageStyle, onPress}) => {
  //The component has some issues. Will be fixed.
  return (
    <>
      <TouchableOpacity
        style={{...styles.container, ...style}}
        onPress={onPress}>
        <Image
          style={{...styles.image, ...imageStyle}}
          source={{uri: profilePhoto}}
        />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    height: hp(33),
    width: wp(33),
    borderRadius: wp(4),
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ProfilePhotoCard;
