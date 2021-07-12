import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {hp, wp} from '../../constants/Dimensions';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { FontSize } from '../../constants/Sizes';

const CheckBox = props => {
  const {mainDescription, lowerDescription, onPressCheckBox, checkBoxVisivle} =
    props;

  return (
    <View>
      <View style={styles.outerView}>
        <TouchableOpacity onPress={onPressCheckBox} style={styles.checkBox}>
          {checkBoxVisivle && (
            <AntDesign
              style={styles.check}
              color={Colors.darkGray}
              name={'check'}
            />
          )}
        </TouchableOpacity>
        <Text style={styles.mainDescText}>{mainDescription}</Text>
      </View>
      <View style={styles.lowerDescView}>
        <Text style={styles.lowerDescText}>{lowerDescription}</Text>
      </View>
    </View>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  checkBox: {
    height: wp(15),
    width: wp(15),
    borderWidth: 2,
    borderRadius: 2,
    color: Colors.darkGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainDescText: {
    fontSize: FontSize(15),
    color: Colors.darkGray,
    fontFamily: Fonts.regular,
    marginLeft: 10,
  },
  outerView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lowerDescText: {
    width: '70%',
    fontSize: FontSize(14),
    color: `${Colors.darkGray}50`,
    fontFamily: Fonts.regular,
    textAlign: 'center',
  },
  lowerDescView: {
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  check: {
    fontSize: FontSize(10),
  },
});
