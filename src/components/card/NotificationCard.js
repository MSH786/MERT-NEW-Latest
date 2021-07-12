import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';
import PropTypes from 'prop-types';
import {wp, hp} from '../../constants/Dimensions';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import ProfilePhotoCard from '../card/ProfilePhotoCard';
import { FontSize } from '../../constants/Sizes';

const NotificationCard = props => {
  let TouchableCmp = TouchableOpacity;
  const {
    isNew,
    date,
    notification,
    profilePhoto,
    firstName,
    lastName,
    index,
    isLastNewIndex,
  } = props;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  //console.log(index);
  //console.log(isNew);

  return (
    <View
      style={[
        styles.notification,
        {
          backgroundColor: isNew ? Colors.lightGray : Colors.white,
          borderTopRightRadius: isNew && index == 0 ? wp(10) : 0,
          borderTopLeftRadius: isNew && index == 0 ? wp(10) : 0,
          borderBottomRightRadius: isNew && isLastNewIndex ? wp(10) : 0,
          borderBottomLeftRadius: isNew && isLastNewIndex ? wp(10) : 0,
          paddingTop: isNew && index === 0 ? hp(8) : hp(12),
        },
      ]}
      key={index}>
      <TouchableCmp>
        <View style={styles.touchable}>
          <ProfilePhotoCard
            profilePhoto={profilePhoto}
            style={styles.imageContainer}
          />
          <View style={styles.textContainer}>
            {firstName && (
              <Text style={styles.nameText}>{`${firstName} ${lastName}`}</Text>
            )}
            <Text style={styles.text}>{notification}</Text>
          </View>
          <View style={styles.dateContainer}>
            <Text style={styles.dateText}>3m</Text>
          </View>
        </View>
      </TouchableCmp>
      <View
        style={{
          borderBottomWidth: isNew ? wp(0.6) : wp(1),
          borderBottomColor: isNew ? Colors.white : 'rgba(58, 45, 19, 0.07)',
          width: wp(309),
          alignSelf: 'center',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  notification: {
    width: wp(331),
    alignSelf: 'center',
  },
  touchable: {
    flexDirection: 'row',
    paddingBottom: hp(12),
  },
  imageContainer: {
    marginLeft: wp(7),
  },
  textContainer: {
    marginLeft: wp(10),
    width: wp(231),
    marginRight: wp(5),
  },
  nameText: {
    fontWeight: 'bold',
    fontFamily: Fonts.regular,
    fontSize: FontSize(15),
  },
  notificationText: {
    fontFamily: Fonts.regular,
    fontSize: FontSize(14),
    fontWeight: '800',
    lineHeight: hp(20),
    fontFamily: Fonts.bold,
    color: Colors.darkGray,
  },
  notificationText: {
    fontFamily: Fonts.regular,
    color: Colors.darkGray,
    fontSize: FontSize(15),
    lineHeight: hp(20),
  },
  dateContainer: {
    width: wp(23),
    marginRight: wp(9),
  },
  dateText: {
    fontFamily: Fonts.regular,
    fontSize: FontSize(12),
    fontWeight: 'normal',
    lineHeight: hp(16),
    fontFamily: Fonts.regular,
  },
});

NotificationCard.propTypes = {
  index: PropTypes.number.isRequired,
  notification: PropTypes.string.isRequired,
  isLastNewIndex: PropTypes.bool.isRequired,
  isNew: PropTypes.bool.isRequired,
};

export default NotificationCard;
