import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { wp, hp } from '../../constants/Dimensions'
import TextComponent from '../text/TextComponent';
import EmptyHeartIcon from '../../../assets/icons/CardIcons/EmptyHeartIcon';
import FilledHeartIcon from '../../../assets/icons/CardIcons/FilledHeartIcon';
import GasIcon from '../../../assets/icons/CardIcons/GasIcon';
import GearIcon from '../../../assets/icons/CardIcons/GearIcon';
import KmIcon from '../../../assets/icons/CardIcons/KmIcon';
import LocationIcon from '../../../assets/icons/CardIcons/LocationIcon';
import  Colors from "../../constants/Colors";

const HomeListingCard = (props) => {
  const likedCars = [];
  const heartPressed = params => {};
  const {logo, image, modal, km, gear, price, location, gas, id, index} = props;

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          top: index === 3 || index !== 0 ? -hp(8) : 0,
        },
      ]}>
      <View style={{height: hp(22)}}>
        <Image style={styles.image} source={image} />
        {logo && <Image style={styles.logo} source={logo} />}
      </View>
      <View style={styles.bottomContainer}>
        <View>
          <View>
            <TextComponent size={wp(1.5)} bold>
              {modal}
            </TextComponent>
          </View>
          <View style={styles.infoIconContainer}>
            <KmIcon />
            <TextComponent
              style={{marginLeft: 5}}
              size={wp(1.5)}>
              {km}
            </TextComponent>
          </View>
          <View style={styles.infoIconContainer}>
            <GearIcon />
            <TextComponent
              style={{marginLeft: 5}}
              size={wp(1.5)}>
              {gear}
            </TextComponent>
          </View>
        </View>
        <View>
          <View>
            <TextComponent
              size={wp(1.5)}
              bold
              color={Colors.orange}>
              {price}
            </TextComponent>
          </View>
          <View style={styles.infoIconContainer}>
            <LocationIcon />
            <TextComponent
              style={{marginLeft: 5}}
              size={wp(1.5)}>
              {location}
            </TextComponent>
          </View>
          <View style={styles.infoIconContainer}>
            <GasIcon />
            <TextComponent
              style={{marginLeft: 5}}
              size={wp(1.5)}>
              {gas}
            </TextComponent>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => heartPressed(id)}
        style={styles.heartIcon}>
        {likedCars.includes(id) ? (
          <FilledHeartIcon width={24} height={24} />
        ) : (
          <EmptyHeartIcon width={24} height={24} />
        )}
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default HomeListingCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    marginTop: 10,
    flex: 1,
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
  logo: {
    position: 'absolute',
    bottom: 10,
    left: 20,
    zIndex: 999,
    backgroundColor: 'rgba(232, 232, 232, 0.5)',
    borderRadius: 10,
  },
  bottomContainer: {
    width: wp(45),
    height: hp(10),
    alignSelf: 'center',
    backgroundColor: 'white',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 5,
  },
  infoIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titles: {
    position: 'absolute',
    zIndex: 9999,
    bottom: 5,
  },
  heartIcon: {
    position: 'absolute',
    zIndex: 99999,
    top: 15,
    right: 20,
  },
});
