import React from 'react';
import {
  StyleSheet,
  Modal,
  TouchableOpacity,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
} from 'react-native';
import Colors from '../../constants/Colors';
import {wp, hp} from '../../constants/Dimensions';
import {BlurView} from '@react-native-community/blur';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Images from '../../constants/Images';
import Fonts from '../../constants/Fonts';
import Styled from 'styled-components';
import {FontSize} from '../../constants/Sizes';
import {useNavigation} from '@react-navigation/native';

const HomeCarItemComponent = ({item, navigateToAdDetails}) => {
  const navigation = useNavigation();

  const [like, setLike] = React.useState(false);

  const onHandleLike = () => {
    setLike(!like);
  };

  return (
    <TouchableOpacity onPress={navigateToAdDetails} style={styles.container}>
      <View>
        <Image style={styles.images} source={item.image} />

        <TouchableOpacity
          style={[styles.selectItemIcon]}
          onPress={onHandleLike}>
          {like ? (
            <Ionicons size={24} color={Colors.primary} name={'heart'} />
          ) : (
            <Ionicons size={24} color={Colors.white} name={'heart'} />
          )}
        </TouchableOpacity>

        <View style={styles.carLogoContent}>
          <Image style={styles.logo} source={Images.imagesHomeAudiLogo} />
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.subContent}>
          <Text style={styles.title}>{item.modal}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>

        <View style={styles.subContent}>
          <View style={styles.iconContent}>
            <Image source={Images.iconPath} />
            <Text style={styles.subContentText}>{item.km}</Text>
          </View>

          <View style={styles.iconContent}>
            <Image source={Images.iconLocation} />
            <Text style={styles.subContentText}>{item.location}</Text>
          </View>
        </View>

        <View style={styles.subContent}>
          <View style={styles.iconContent}>
            <Image source={Images.iconFuel} />
            <Text style={styles.subContentText}>{item.gear}</Text>
          </View>
          <View style={styles.iconContent}>
            <Image source={Images.iconGear} />
            <Text style={styles.subContentText}>{item.gas}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HomeCarItemComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    height: hp(220),
    width: wp(160),
    borderRadius: hp(7),
    marginBottom: wp(14),

    shadowColor: 'rgba(14, 21, 31, 0.56)',
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 2.22,
    elevation: 3,
  },
  carLogoContent: {
    height: wp(36),
    width: wp(36),
    position: 'absolute',
    bottom: hp(5),
    left: wp(5),
    borderRadius: hp(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    justifyContent: 'center',
    marginLeft: wp(9),
    marginRight: wp(9),
    marginTop: wp(5),
  },
  subContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContent: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  images: {
    resizeMode: 'cover',
    width: wp(160),
    height: hp(145),
    borderRadius: hp(7),
  },
  logo: {
    resizeMode: 'contain',
    height: wp(30),
    width: wp(30),
    marginLeft: wp(8),
  },
  title: {
    fontSize: FontSize(13),
    fontWeight: '800',
    fontFamily: Fonts.bold,
    color: Colors.headerTitle,
  },
  price: {
    fontSize: FontSize(13),
    fontWeight: '800',
    fontFamily: Fonts.bold,
    color: Colors.homeItemPrice,
  },
  subContentText: {
    fontSize: FontSize(13),
    fontWeight: '400',
    color: Colors.homeItem,
    marginLeft: wp(5),
  },

  selectItemIcon: {
    position: 'absolute',
    top: hp(10),
    right: wp(10),
    opacity: 0.8,
  },
});

const BlurWrapper = Styled(BlurView)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
