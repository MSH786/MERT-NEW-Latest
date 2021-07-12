import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import Colors from '../../constants/Colors';
import {wp, hp} from '../../constants/Dimensions';
import * as Images from '../../constants/Images';
import Fonts from '../../constants/Fonts';
import {FontSize} from '../../constants/Sizes';
import GifImage from '@lowkey/react-native-gif';
import {homeCar} from '../../constants/Gifs';
import {useNavigation} from '@react-navigation/native';

const HomeCarHeaderItemComponent = () => {
  const navigation = useNavigation();

  const redirectScreen = () => {
    navigation.navigate('StudioIntroScreen');
  };

  return (
    <TouchableOpacity onPress={redirectScreen} style={styles.container}>
      <Image style={styles.imageMask} source={Images.imagesHomeListMask} />
      <GifImage
        source={{
          uri: homeCar,
        }}
        style={styles.images}
        resizeMode={'cover'}
      />

      <View style={styles.content}>
        <Text style={styles.title}>Stüdyo özelliği ile</Text>
        <Text style={styles.subTitle}>
          aracınızı en iyi şekilde sergileyin.
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default HomeCarHeaderItemComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightGray,
    height: hp(165),
    width: wp(337),
    borderRadius: hp(7),
    marginBottom: wp(20),

    shadowColor: 'rgba(14, 21, 31, 0.56)',
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: 0.15,
    shadowRadius: 2.22,
    elevation: 3,
  },
  images: {
    position: 'absolute',
    width: wp(285),
    top: hp(30),
    right: wp(15),
    height: hp(145),
  },
  imageMask: {
    position: 'absolute',
    width: wp(337),
    height: hp(125),
    bottom: hp(0),
    borderBottomLeftRadius: hp(7),
    borderBottomRightRadius: hp(7),
  },

  content: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  title: {
    fontSize: FontSize(15),
    fontWeight: '400',
    color: Colors.headerTitle,
  },
  subTitle: {
    width: wp(172),
    fontSize: FontSize(15),
    fontWeight: '900',
    fontFamily: Fonts.bold,
    color: Colors.headerTitle,
  },
});
