import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {wp, hp} from '../../constants/Dimensions';
import constants from '../../theme/constants';
import CrossBlackIcon from '../../../assets/icons/CrossBlackIcon';
import { FontSize } from '../../constants/Sizes';

const BMWComponent = props => {
  return (
    <View style={styles.Container}>
      {/*BMW Section start*/}
      <View style={styles.modelbox}>
        <View style={styles.firstrow}>
          <View style={styles.modelimgcol}>
            <Image
              source={require('../../../assets/images/bmwLogo.png')}
              resizeMode="contain"
              style={styles.modelimglogo}></Image>
          </View>
          <View style={styles.modelnametextrect}>
            <Text style={styles.modelnametxt}>BMW</Text>
          </View>
          <View style={styles.removeiconrect}>
            <CrossBlackIcon />
          </View>
        </View>
        <View style={styles.firstrow}>
          <View style={styles.serialnoRect}>
            <Text style={styles.markamodeltxt}>320i</Text>
          </View>
          <View style={styles.modelnametextrect}>
            <Text>{/**/}</Text>
          </View>
          <View style={styles.removeiconrect}>
            <CrossBlackIcon />
          </View>
        </View>
        <View style={styles.firstrow}>
          <View style={styles.serialnoRect}>
            <Text style={styles.markamodeltxt}>320i</Text>
          </View>
          <View style={styles.modelnametextrect}>
            <Text>{/**/}</Text>
          </View>
          <View style={styles.removeiconrect}>
            <CrossBlackIcon />
          </View>
        </View>
      </View>
      {/*BMW Section end*/}

      {/*Volvo Section start*/}
      <View style={styles.modelbox}>
        <View style={styles.firstrow}>
          <View style={styles.modelimgcol}>
            <Image
              source={require('../../../assets/images/volvo.png')}
              resizeMode="contain"
              style={styles.modelimglogo}></Image>
          </View>
          <View style={styles.modelnametextrect}>
            <Text style={styles.modelnametxt}>Volvo</Text>
          </View>
          <View style={styles.removeiconrect}>
            <CrossBlackIcon />
          </View>
        </View>
        <View style={styles.firstrow}>
          <View style={styles.serialnoRect}>
            <Text style={styles.markamodeltxt}>XC60</Text>
          </View>
          <View style={styles.modelnametextrect}>
            <Text>{/**/}</Text>
          </View>
          <View style={styles.removeiconrect}>
            <CrossBlackIcon />
          </View>
        </View>
        <View style={styles.firstrow}>
          <View style={styles.serialnoRect}>
            <Text style={styles.markamodeltxt}>XC40</Text>
          </View>
          <View style={styles.modelnametextrect}>
            <Text>{/**/}</Text>
          </View>
          <View style={styles.removeiconrect}>
            <CrossBlackIcon />
          </View>
        </View>
        <View style={styles.firstrow}>
          <View style={styles.serialnoRect}>
            <Text style={styles.markamodeltxt}>S90</Text>
          </View>
          <View style={styles.modelnametextrect}>
            <Text>{/**/}</Text>
          </View>
          <View style={styles.removeiconrect}>
            <CrossBlackIcon />
          </View>
        </View>
      </View>
      {/*Volvo Section end*/}

      {/*Mercedes Section start*/}
      <View style={styles.modelbox}>
        <View style={styles.firstrow}>
          <View style={styles.modelimgcol}>
            <Image
              source={require('../../../assets/images/Mercedes-Benz-Logo.png')}
              resizeMode="contain"
              style={styles.modelimglogo}></Image>
          </View>
          <View style={styles.modelnametextrect}>
            <Text style={styles.modelnametxt}>Mercedes-Benz</Text>
          </View>
          <View style={styles.removeiconrect}>
            <CrossBlackIcon />
          </View>
        </View>
        <View style={styles.firstrow}>
          <View style={styles.mercedesmodelheadingrect}>
            <Text style={styles.markamodeltxt}>Tum Modeller</Text>
          </View>
          <View style={styles.mercedesblankrect}>
            <Text>{/**/}</Text>
          </View>
          <View style={styles.removeiconrect}>
            <CrossBlackIcon />
          </View>
        </View>
      </View>
      {/*Mercedes Section end*/}
    </View>
  );
};

export default BMWComponent;

const styles = StyleSheet.create({
  Container: {
    width: wp(335),
    alignItems: 'center',
    marginTop: hp(10),
    marginBottom: hp(10),
  },

  modelbox: {
    width: wp(332),
    marginTop: hp(5),
    backgroundColor: '#E5DECE',
    borderRadius: wp(6),
    paddingTop: hp(5),
    paddingBottom: hp(5),
    marginBottom: hp(5),
  },
  firstrow: {
    width: wp(332),
    flexDirection: 'row',
    paddingTop: hp(10),
    borderColor: 'rgba(58, 45, 19, 0.07)',
    paddingBottom: hp(10),
  },
  modelimgcol: {
    width: wp(55),
  },
  modelimglogo: {
    width: wp(50),
    height: hp(30),
  },
  modelnametextrect: {
    width: wp(231),
    justifyContent: 'center',
  },
  modelnametxt: {
    fontSize: FontSize(14),
    color: '#3A2D13',
    fontWeight: 'bold',
  },
  removeiconrect: {
    width: wp(46),
    alignItems: 'center',
    justifyContent: 'center',
  },
  markamodeltxt: {
    fontSize: FontSize(12),
    color: '#3A2D13',
  },
  serialnoRect: {
    width: wp(55),
    alignItems: 'center',
    justifyContent: 'center',
  },
  mercedesmodelheadingrect: {
    width: wp(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  mercedesblankrect: {
    width: wp(180),
    justifyContent: 'center',
  },
});
