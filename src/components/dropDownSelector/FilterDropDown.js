import React from 'react';
import {StyleSheet, View, Text, LayoutAnimation} from 'react-native';
import {hp, wp} from '../../constants/Dimensions';
import Colors from '../../constants/Colors';
import RNPickerSelect from 'react-native-picker-select';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Fonts from '../../constants/Fonts';
import {FontSize} from '../../constants/Sizes';

const FilterDropDown = props => {
  const {
    data = [],
    value,
    title,
    onValueChange,
    styleTitle,
    styleDropDown,
    placeHolder,
  } = props;

  const placeholder = {
    label: placeHolder,
    value: placeHolder,
  };


  const openBox = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        {value !== '' && value !== placeHolder ? (
          <Text style={[styles.titleText, styleTitle]}>{title}</Text>
        ) : (
          <View />
        )}
      </View>

      <View style={[styles.content, styleDropDown]}>
        <RNPickerSelect
          style={pickerSelectStyles}
          onValueChange={(value, index) => {
            onValueChange(value, index);
            LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
          }}
          items={data}
          value={value}
          placeholder={placeholder}
          useNativeAndroidPickerStyle={false}
          Icon={() => {
            return (
              <SimpleLineIcons
                size={hp(15)}
                style={styles.arrow}
                name={'arrow-down'}
                color={value === '' ? Colors.softGray : Colors.darkGray}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default FilterDropDown;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: wp(0.5),
    width: wp(333),
    height: hp(48),
    borderColor: 'rgba(58, 45, 19, 0.07)',
  },
  content: {
    height: hp(35),
    flexDirection: 'row',
    bottom: 0,
  },
  arrow: {
    paddingTop: hp(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleView: {
    height: hp(17),
  },
  titleText: {
    fontSize: FontSize(15),
    paddingVertical: 0,

    paddingHorizontal: 0,
    fontFamily: Fonts.bold,
    color: Colors.darkGray,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    width: wp(332),
    height: hp(35),
    fontSize: FontSize(17),
    fontFamily: Fonts.regular,
    fontWeight: '400',
    color: Colors.darkGray,
    textAlign: 'left',
  },
  inputAndroid: {
    width: wp(332),
    height: hp(35),
    fontSize: FontSize(17),
    fontWeight: '400',
    color: Colors.darkGray,
    paddingVertical: 0,
    paddingHorizontal: 0,
    fontFamily: Fonts.regular,
  },
  placeholder: {
    fontSize: FontSize(17),
    fontWeight: '600',
    paddingVertical: 0,
    paddingHorizontal: 0,
    color: Colors.softGray,
    fontFamily: Fonts.bold,
  },
});
