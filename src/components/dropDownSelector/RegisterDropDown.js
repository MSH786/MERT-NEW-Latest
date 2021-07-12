import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {hp, wp} from '../../constants/Dimensions';
import Colors from '../../constants/Colors';
import RNPickerSelect from 'react-native-picker-select';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Fonts from '../../constants/Fonts';
import {FontSize} from '../../constants/Sizes';

const RegisterDropDown = props => {
  const {data = [], value, onValueChange, style, placeHolder} = props;

  const placeholder = {
    label: placeHolder,
    value: placeHolder,
  };

  return (
    <View style={[styles.content, style]}>
      <RNPickerSelect
        style={pickerSelectStyles}
        onValueChange={(value, index) => {
          onValueChange(index, value);
        }}
        useNativeAndroidPickerStyle={false}
        items={data}
        value={value}
        placeholder={placeholder}
        Icon={() => {
          return (
            <SimpleLineIcons
              size={hp(15)}
              style={styles.arrow}
              name={'arrow-down'}
              color={Colors.white}
            />
          );
        }}
      />
    </View>
  );
};

export default RegisterDropDown;

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    width: wp(311),
    height: hp(35),
    backgroundColor: Colors.whiteTransparent,
    borderRadius: hp(6),
    textAlign: 'left',
    paddingLeft: wp(5),
  },
  arrow: {
    paddingTop: hp(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: FontSize(15),
    fontWeight: '400',
    color: Colors.white80,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    width: wp(295),
    height: hp(35),
    fontSize: FontSize(15),
    fontWeight: '400',
    color: Colors.white80,
    paddingLeft: wp(5),
    textAlign: 'left',
  },
  inputAndroid: {
    width: wp(295),
    height: hp(35),
    fontSize: FontSize(15),
    fontWeight: '400',
    color: Colors.white80,
    paddingVertical: 0,
  },
  placeholder: {
    paddingVertical: 0,
    color: Colors.white80,
    paddingLeft: wp(5),
  },
});
