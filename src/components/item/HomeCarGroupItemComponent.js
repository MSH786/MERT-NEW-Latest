import React from 'react';
import {
  StyleSheet,
  Modal,
  ActivityIndicator,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import {wp, hp} from '../../constants/Dimensions';
import {FontSize} from '../../constants/Sizes';
import {useNavigation} from '@react-navigation/native';

const HomeCarGroupItemComponent = (props) => {
  const {item} = props;
  const navigation = useNavigation();

  const redirectScreen = () => {
    navigation.navigate('FilteredListingScreen');
  };

  return (
    <TouchableOpacity
      onPress={redirectScreen}
      style={styles.container}
      key={item.id}>
      <Image style={styles.images} source={item.image} />

      <View style={styles.opacity} />

      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subTitle}>{item.subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HomeCarGroupItemComponent;

const styles = StyleSheet.create({
  container: {
    height: hp(145),
    width: wp(160),
    borderRadius: hp(7),
    marginBottom: hp(14),

    shadowColor: 'rgba(14, 21, 31, 0.06)',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 1,
    shadowRadius: 2.22,
    elevation: 3,
  },
  images: {
    height: hp(145),
    width: wp(160),
    resizeMode: 'cover',
    borderRadius: wp(7),
  },
  opacity: {
    position: 'absolute',
    backgroundColor: Colors.primary,
    opacity: 0.8,

    height: hp(145),
    width: wp(160),
    flex: 1,
    borderRadius: hp(7),
  },
  content: {
    position: 'absolute',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    bottom: 10,
    right: 10,
  },
  title: {
    fontSize: FontSize(16),
    fontWeight: '900',
    fontFamily: Fonts.bold,
    color: Colors.white,
  },
  subTitle: {
    fontSize: FontSize(16),
    fontWeight: '400',
    color: Colors.white,
  },
});
