import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import {wp, hp} from '../../constants/Dimensions';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import ChevRightBlack from '../../../assets/icons/Arrows/ChevRightBlack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const {width, height} = Dimensions.get('window');

//Eye Icon will be added.

const ProfileSetting = props => {
  const {
    leftIcon,
    leftIconSize,
    leftIconColor,
    title,
    rightIcon,
    rightIconSize,
    rightIconColor,
    onPress,
  } = props;
  return (
    <>
      <View style={styles.container}>
        {/*Main Content start*/}
        <TouchableOpacity onPress={onPress}>
          <View style={styles.ContentAreaOne}>
            <View style={styles.IconRect}>
              <View style={styles.iconbox}>
                <Ionicons
                  size={wp(leftIconSize)}
                  color={leftIconColor}
                  name={leftIcon}
                />
              </View>
            </View>
            <View style={styles.settingtitletxtRect}>
              <Text style={styles.settingtitletxt}>{title}</Text>
            </View>
            <View style={styles.RightIconRect}>
              <Feather
                name={rightIcon}
                size={wp(rightIconSize)}
                color={rightIconColor}
              />
            </View>
          </View>
          {/*Main Content end*/}
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp(333),
  },
  ContentAreaOne: {
    width: wp(333),
    marginTop: hp(20),
    marginBottom: hp(15),
    flexDirection: 'row',
  },
  IconRect: {
    width: wp(45),
    alignItems: 'center',
  },
  iconbox: {
    width: wp(27),
    height: hp(30),
    borderRadius: wp(4),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5DECE',
  },
  settingtitletxtRect: {
    width: wp(235),
    borderBottomWidth: hp(0.5),
    paddingBottom: hp(4),
    borderColor: Colors.lightGray,
  },
  settingtitletxt: {
    fontFamily: Fonts.bold,
    color: '#3A2D13',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: hp(20),
    fontSize: wp(15),
  },
  RightIconRect: {
    width: wp(53),
    borderBottomWidth: hp(0.5),
    paddingBottom: hp(4),
    borderColor: Colors.lightGray,
    justifyContent: 'center',
    paddingHorizontal: wp(4),
    alignItems: 'flex-end',
  },
});

export default ProfileSetting;
