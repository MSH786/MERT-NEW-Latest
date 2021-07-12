import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Modal,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {wp, hp} from '../../constants/Dimensions';
import {FontSize} from '../../constants/Sizes';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fonts from '../../constants/Fonts';
import PhoneDropDown from '../dropDownSelector/PhoneDropDown';

const InputNumberSelect = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <View style={styles.container}>
        {/*Input type rect start*/}
        <View style={styles.mainrect}>
          <View
            style={{
              width: wp(333.62),
              height: hp(36.45),
              flexDirection: 'row',
              borderBottomWidth: hp(1),
              borderColor: '#eee',
            }}>
            <View style={styles.flagImgRect}>
              <Ionicons size={18} color="red" name={'flag'} />
            </View>
            <View style={styles.countryTitletxtRect}>
              <Text style={styles.countrynametxt}>
                <PhoneDropDown />
              </Text>
            </View>
          </View>
          <View
            style={{
              width: wp(333.62),
              height: hp(36.5),
              flexDirection: 'row',
            }}>
            <View style={styles.countryMobCodeRect}>
              <Text style={styles.mobcodetxt}>+90</Text>
            </View>
            <View
              style={{
                borderLeftWidth: hp(1),
                borderColor: '#eee',
                height: hp(28),
                marginTop: hp(3),
              }}></View>
            <View style={styles.MobNoRect}>
              <TextInput
                style={styles.mobnotxt}
                keyboardType="number-pad"
                placeholder="530 700 00 00"
              />
            </View>
          </View>
        </View>
        {/*Input type rect end*/}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp(327),
    marginTop: hp(20),
    marginBottom: hp(10),
    flexDirection: 'row',
  },
  mainrect: {
    width: wp(333.62),
    height: hp(72.95),
    backgroundColor: '#fff',
    borderRadius: 6,
    elevation: 8,
  },
  flagImgRect: {
    width: wp(45),
    alignItems: 'center',
    justifyContent: 'center',
  },
  countryTitletxtRect: {
    width: wp(245),
    justifyContent: 'center',
  },
  countrynametxt: {
    fontSize: FontSize(17),
    color: '#3A2D13',
    fontFamily: Fonts.regular,
    fontWeight: 'normal',
  },
  RightIconRect: {
    width: wp(43.62),
    height: hp(36.45),
    alignItems: 'center',
    justifyContent: 'center',
  },
  countryMobCodeRect: {
    width: wp(45),
    alignItems: 'center',
    justifyContent: 'center',
  },
  mobcodetxt: {
    fontSize: FontSize(17),
    fontFamily: Fonts.regular,
    fontWeight: 'normal',
  },
  MobNoRect: {
    width: wp(287),
    justifyContent: 'center',
    paddingHorizontal: wp(8),
  },
  mobnotxt: {
    fontSize: FontSize(17),
    fontFamily: Fonts.regular,
    fontWeight: 'normal',
    top: hp(2),
    color: '#000',
    height: hp(50),
  },
  txt: {
    fontSize: FontSize(17),
    color: '#F5953C',
  },
});

export default InputNumberSelect;
