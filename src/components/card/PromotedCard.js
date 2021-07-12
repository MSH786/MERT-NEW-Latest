import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import { wp, hp } from '../../constants/Dimensions'
import GiftIcon from '../../../assets/icons/GiftIcon';
import PromotedCarIcon from '../../../assets/icons/PromotedCarIcon';
import TextComponent from '../text/TextComponent';
import Shadow from '../../constants/Shadows';

const PromotedCard = () => {
  return (
    <View style={styles.container}>
      <View>
        <TextComponent style={styles.text}>Stüdyo özelliği ile</TextComponent>
        <TextComponent style={[styles.text, {fontWeight: 'bold'}]}>
          aracınızı en iyi şekilde
        </TextComponent>
        <TextComponent style={[styles.text, {fontWeight: 'bold'}]}>
          sergileyin.
        </TextComponent>
      </View>
      <View style={[styles.wave, {...Shadow}]}>
        <Image
          style={{
            width: wp(95),
            height: hp(10),
            borderBottomLeftRadius: 6,
            borderBottomRightRadius: 6,
          }}
          source={require('../../../assets/images/wave.png')}
        />
      </View>
      <View style={styles.car}>
        <PromotedCarIcon
          width={wp(70)}
          height={hp(12)}
        />
      </View>
      <View style={[styles.gift, {...Shadow}]}>
        <GiftIcon />
      </View>
    </View>
  );
};

export default PromotedCard;

const styles = StyleSheet.create({
  container: {
    height: hp(20),
    width: wp(95),
    backgroundColor: Colors.lightGray,
    alignSelf: 'center',
    borderRadius: 6,
  },
  wave: {
    position: 'absolute',
    justifyContent: 'center',
    bottom: 0,
    width: wp(100),
    height: hp(10),
  },
  car: {
    justifyContent: 'center',
    alignItems: 'center',
    top: hp(0),
  },
  gift: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 50,
    width: wp(20),
    height: hp(20),
    top: -20,
    right: -20,
  },
  text: {
    textAlign: 'left',
    marginLeft: 10,
  },
});
