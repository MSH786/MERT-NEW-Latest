import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {wp, hp} from '../../constants/Dimensions';
import { FontSize } from '../../constants/Sizes';

const CarBrandModelComponent = props => {
  const {data, onPress} = props;

  return (
  
      <View style={styles.container}>
        {/*Marka Text Rect*/}
        <View style={styles.markatxtRect}>
          <Text style={styles.markatxt}>Marka</Text>
        </View>
        {/*BMW Section*/}
        <View style={styles.selectcarmodelrect}>
          {data !== null && (
            <TouchableOpacity>
              <View style={styles.modelshowrect}>
                <View style={styles.modellogorect}>
                  <Image
                    source={require('../../../assets/images/bmwLogo.png')}
                    resizeMode="contain"
                    style={styles.modelImg}></Image>
                </View>
                <View style={styles.modelnametextrect}>
                  <Text style={styles.modelnameheadingtxt}>{data}</Text>
                  <Text style={styles.modelnameheadingtxtsubtitle}>
                    Tum Modeller
                  </Text>
                </View>
                <View style={styles.removeitemrect}></View>
              </View>
            </TouchableOpacity>
          )}

          <TouchableOpacity onPress={onPress}>
            <View style={styles.selectmodelrect}>
              <Text style={styles.markamodeltxt}>+ Marka/Model Ekliyen</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    
  );
};

export default CarBrandModelComponent;

const styles = StyleSheet.create({
  container: {
    width: wp(333),
    alignItems: 'center',
    marginTop: hp(10),
    marginBottom: hp(10),
  },
  markatxtRect: {
    width: wp(333),
    paddingHorizontal: hp(5),
  },
  markatxt: {
    fontSize: FontSize(15),
    color: '#9D9686',
  },
  selectcarmodelrect: {
    width: wp(333),
    marginTop: hp(5),
    backgroundColor: '#E5DECE',
    borderRadius: wp(6),
    paddingTop: hp(5),
    paddingBottom: hp(5),
  },
  modelshowrect: {
    width: wp(333),
    flexDirection: 'row',
    paddingTop: hp(10),
    borderBottomWidth: wp(1.5),
    borderColor: 'lightgrey',
    paddingBottom: hp(10),
  },
  modellogorect: {
    width: wp(65),
    alignItems: 'center',
  },
  modelImg: {
    width: wp(55),
    height: hp(40),
  },
  modelnametextrect: {
    width: wp(215),
  },
  modelnameheadingtxt: {
    fontSize: FontSize(13),
    color: '#3A2D13',
    fontWeight: 'bold',
  },
  modelnameheadingtxtsubtitle: {
    fontSize: FontSize(12),
    color: '#3A2D13',
  },
  removeitemrect: {
    width: wp(53),
  },
  selectmodelrect: {
    width: wp(333),
    alignItems: 'center',
    paddingTop: hp(18),
    paddingBottom: hp(18),
  },
  markamodeltxt: {
    fontSize: FontSize(13),
    color: '#3A2D13',
  },
});
