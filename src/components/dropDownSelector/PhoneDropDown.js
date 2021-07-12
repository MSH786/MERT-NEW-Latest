import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, Image} from 'react-native';
import {hp, wp} from '../../constants/Dimensions';
import Colors from '../../constants/Colors';
import RNPickerSelect from 'react-native-picker-select';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Fonts from '../../constants/Fonts';
import {VerticalSeparatorComponent} from '../seperator/VerticalSeparatorComponent';
import {FontSize} from '../../constants/Sizes';
import Flag from 'react-native-flags';
import {dataCountryPlaceHolder} from '../../data/data';
import {TextInputMask} from 'react-native-masked-text';

const PhoneDropDown = props => {
  const {
    data = [dataCountryPlaceHolder],
    value,
    onValueChangeDrop,
    onValueChangeText,
    style,
    placeHolder,
    setValue,
    icon,
  } = props;

  const [flag, setFlag] = useState();

  const placeholder = {
    label: placeHolder,
    value: 'TR',
  };

  return (
    <View style={[styles.container, style]}>
      <View style={styles.contentDropDown}>
        <Flag code={flag} size={24} />
        <RNPickerSelect
          style={pickerSelectStyles}
          onValueChange={(value, index) => {
            setFlag(value);
            onValueChangeDrop(index, value);
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
                color={Colors.white}
              />
            );
          }}
        />
      </View>

      <View style={styles.contentPhoneInput}>
        <Text style={styles.countryCode}>+90</Text>

        <VerticalSeparatorComponent />

        <TextInputMask
          style={styles.textInput}
          value={value}
          maxLength={15}
          placeholderTextColor={Colors.white80}
          useNativeAndroidPickerStyle={false}
          returnKeyType={'next'}
          onChangeText={onValueChangeText}
          type={'cel-phone'}
          maxLength={13}
          options={{
            maskType: 'BRL',
            withDDD: true,
            dddMask: '999 999 99 99',
          }}
        />

        <TextInput
          style={styles.textInput}
          value={value}
          setValue={setValue}
          maxLength={15}
          placeholderTextColor={Colors.white80}
        />
      </View>
    </View>
  );
};

export default PhoneDropDown;

const styles = StyleSheet.create({
  container: {
    width: wp(311),
    height: hp(68),
    backgroundColor: Colors.whiteTransparent,
    borderRadius: hp(6),
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
  textInput: {
    width: wp(135),
    height: hp(34),
    paddingLeft: wp(9),
    fontSize: FontSize(15),
    fontWeight: '400',
    color: Colors.white80,
    paddingVertical: 0,
  },
  contentDropDown: {
    flexDirection: 'row',
    borderBottomWidth: 0.4,
    borderColor: Colors.white80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentPhoneInput: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  countryCode: {
    paddingVertical: 0,
    marginLeft: wp(9),
    marginRight: wp(7),
    fontSize: FontSize(15),
    fontWeight: '400',
    color: Colors.white80,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    width: wp(268),
    height: hp(35),
    fontSize: FontSize(15),
    fontWeight: '400',
    color: Colors.white80,
    paddingLeft: wp(9),
    textAlign: 'left',
  },
  inputAndroid: {
    width: wp(268),
    height: hp(35),
    fontSize: FontSize(15),
    fontWeight: '400',
    color: Colors.white80,
    paddingLeft: wp(9),
    textAlign: 'left',
    paddingVertical: 0,
  },
  placeholder: {
    paddingVertical: 0,
    color: Colors.white80,
    paddingLeft: wp(9),
  },
});
