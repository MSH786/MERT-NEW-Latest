import React from 'react';
import {StyleSheet, View, Image, Text, Dimensions} from 'react-native';

import {wp, hp} from '../../constants/Dimensions';

const {width, height} = Dimensions.get('window');

//Eye Icon will be added.

const CarModelsComponent = props => {
  return (
    <>
      <View style={styles.mainRect}>
        <View style={styles.col1}>
          <Image
            source={require('../../../assets/images/bmwLogo.png')}
            resizeMode="contain"
            style={styles.bmwimg}></Image>
        </View>
        <View style={styles.col2}>
          <Image
            source={require('../../../assets/images/Mercedes-Benz-Logo.png')}
            resizeMode="contain"
            style={styles.Mercedesimg}></Image>
        </View>
        <View style={styles.col3}>
          <Image
            source={require('../../../assets/images/jeepTextLogo.png')}
            resizeMode="contain"
            style={styles.jeepimg}></Image>
        </View>
        <View style={styles.col4}>
          <Image
            source={require('../../../assets/images/unnamed.png')}
            resizeMode="contain"
            style={styles.unnamedimg}></Image>
        </View>
        <View style={styles.col5}>
          <Image
            source={require('../../../assets/images/volvo.png')}
            resizeMode="contain"
            style={styles.volvoimg}></Image>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainRect: {
    width: wp(332),
    flexDirection: 'row',
  },
  col1: {
    width: wp(60.73),
    height: hp(60.73),
    marginLeft: wp(0),
    justifyContent: 'center',
    backgroundColor: '#E5DECE',
    borderRadius: wp(8),
    alignItems: 'center',
  },
  bmwimg: {
    width: wp(55),
    height: hp(50),
  },
  col2: {
    width: wp(60.73),
    height: hp(60.73),
    marginLeft: wp(6.5),
    justifyContent: 'center',
    backgroundColor: '#E5DECE',
    borderRadius: wp(8),
    alignItems: 'center',
  },
  Mercedesimg: {
    width: wp(50),
    height: hp(40),
  },
  col3: {
    width: wp(60.73),
    height: hp(60.73),
    marginLeft: wp(6.5),
    justifyContent: 'center',
    backgroundColor: '#E5DECE',
    borderRadius: wp(8),
    alignItems: 'center',
  },
  jeepimg: {
    width: wp(45),
    height: hp(40),
  },
  col4: {
    width: wp(60.73),
    height: hp(60.73),
    marginLeft: wp(6.5),
    justifyContent: 'center',
    backgroundColor: '#E5DECE',
    borderRadius: wp(8),
    alignItems: 'center',
  },
  unnamedimg: {
    width: wp(45),
    height: hp(40),
  },
  col5: {
    width: wp(60.73),
    height: hp(60.73),
    marginLeft: wp(6.5),
    justifyContent: 'center',
    backgroundColor: '#E5DECE',
    borderRadius: wp(8),
    alignItems: 'center',
  },
  volvoimg: {
    width: wp(45),
    height: hp(40),
  },
});

export default CarModelsComponent;
