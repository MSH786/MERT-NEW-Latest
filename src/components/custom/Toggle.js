import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {wp, hp} from '../../constants/Dimensions';
import Chevdown from '../../../assets/icons/Arrows/Chevdown';
import Chevup from '../../../assets/icons/Arrows/Chevup';
import {FontSize} from '../../constants/Sizes';
import Fonts from '../../constants/Fonts';
import Colors from '../../constants/Colors';

const Toggle = props => {
  const {title, iconStatus, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.leftText}>
            <Text style={styles.titleText}>{title}</Text>
          </View>
          <View style={styles.rightButton}>
            {iconStatus ? <Chevup /> : <Chevdown />}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Toggle;

const styles = StyleSheet.create({
  container: {
    width: wp(333),
    height: hp(60),
    marginTop: hp(10),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {
    width: wp(333),
    height: wp(30),
    paddingHorizontal: wp(5),
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    borderBottomColor: 'lightgrey',
    borderBottomWidth: wp(1.5),
  },
  leftText: {
    width: wp(120),
  },
  rightButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: Colors.darkGray,
    fontSize: FontSize(15),
    fontFamily: Fonts.bold,
  },
});
