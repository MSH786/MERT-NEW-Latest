import React from 'react';
import {StyleSheet, View, Image, Text, Dimensions} from 'react-native';

import {wp, hp} from '../../constants/Dimensions';
import ChevRightBlack from '../../../assets/icons/Arrows/ChevRightBlack';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

//Eye Icon will be added.

const BlockedUserComponent = props => {
  const {title, rightTitle} = props;
  return (
    <>
      <View style={styles.container}>
        {/*Rect One start*/}
        <View style={styles.AreaContainerOne}>
          <View style={styles.BlockedUserImgRect}>
            <Image
              style={styles.blockedUserImg}
              source={require('../../../assets/images/usersImages/user1.png')}></Image>
          </View>
          <View style={styles.BlockedUserNameTextRect}>
            <Text style={styles.blockedusernametxt}>{title}</Text>
          </View>
          <View style={styles.BlockedUserdetailRect}>
            <Text style={styles.detailtext}>{rightTitle}</Text>
          </View>
        </View>
        {/*Rect One end*/}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp(333),
  },
  AreaContainerOne: {
    width: wp(333),
    marginTop: hp(20),
    marginBottom: hp(15),
    paddingBottom: hp(10),
    borderBottomWidth: hp(2),
    borderColor: 'rgba(58, 45, 19, 0.07)',
    flexDirection: 'row',
  },
  BlockedUserImgRect: {
    width: wp(50),
    alignItems: 'center',
  },
  blockedUserImg: {
    width: wp(45),
    height: hp(43),
    borderRadius: wp(7),
  },
  BlockedUserNameTextRect: {
    width: wp(188),
    paddingHorizontal: wp(10),
    justifyContent: 'center',
  },
  blockedusernametxt: {
    fontSize: wp(17),
  },
  BlockedUserdetailRect: {
    width: wp(95),
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailtext: {
    fontSize: wp(15),
    color: '#F5953C',
  },
});

export default BlockedUserComponent;
