import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import TextComponent from '../text/TextComponent';
import { wp, hp } from '../../constants/Dimensions'
const AdvertisementCard = (props) => {
  const {image,titlePosition,textAlign,title,subtitle} = props;
  return (
    <TouchableOpacity style={[styles.adContainer]}>
      <Image style={styles.image} source={image} />
      <Image
        source={require('../../../assets/images/homeCards/orangeCover.png')}
        style={styles.coverOrangeImage}
      />

      <View style={[styles.titles, {[titlePosition]: 30}]}>
        <TextComponent bold color="white">
          {title}
        </TextComponent>
        <TextComponent style={{textAlign: textAlign}} color="white">
          {subtitle}
        </TextComponent>
      </View>
    </TouchableOpacity>
  );
};

export default AdvertisementCard;

const styles = StyleSheet.create({
  adContainer: {
    borderRadius: 5,
    marginTop: 10,
    flex: 1,
    height: hp(24),
    width: wp(45),
    // backgroundColor: 'red',
  },
  image: {
    width: wp(45),
    zIndex: 999,
    height: hp(22),
    borderRadius: 5,
    alignSelf: 'center',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    // backgroundColor: 'red',
  },
  coverOrangeImage: {
    position: 'absolute',
    width: wp(45),
    height: hp(25.6),
    alignSelf: 'center',
    borderRadius: 5,
    zIndex: 999,
  },
});
