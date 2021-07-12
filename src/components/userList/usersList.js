import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {wp, hp} from '../../constants/Dimensions';
import {FontSize} from '../../constants/Sizes';
import { useNavigation } from '@react-navigation/native';

import navigator from '../../utils/navigator';

const UserList = ({title, bottomTitle, data, popular, onPress}) => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
      {data.map((item, index) => (
        <View style={styles.itemView} key={index}>
          <TouchableOpacity
            style={styles.profilePicTouchableOpacity}
            onPress={() => {
              navigator(navigation,'OtherUserProfileScreen')
            }}>
            <Image style={styles.imageStyle} source={item.profilePic} />
          </TouchableOpacity>
          <View style={styles.userDetailView}>
            <View style={styles.nameView}>
              <Text style={styles.nameText}>{item.name}</Text>
              {popular ? (
                <Image
                  style={styles.verifiedImage}
                  source={require('../../../assets/images/verified.png')}
                />
              ) : null}
            </View>
            <View style={styles.dateTimeView}>
              <Image
                style={styles.eyeImage}
                source={require('../../../assets/images/eye.png')}
              />
              <Text style={styles.dateTimeText}>{item.dateTime}</Text>
            </View>
          </View>
          <View style={styles.contactView}>
            <TouchableOpacity style={styles.contactIconBox}>
              <Image
                style={styles.contactIconImage}
                source={require('../../../assets/images/messageIcon.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.contactIconBox}>
              <Image
                style={styles.contactIconImage}
                source={require('../../../assets/images/callIcon.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      ))}
      <Text style={styles.bottomText}>{bottomTitle}</Text>
    </View>
  );
};

export default UserList;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  titleText: {
    fontWeight: '800',
    fontSize: FontSize(18),
    color: '#3A2D13',
    marginBottom: 10,
  },
  bottomText: {
    fontWeight: '500',
    fontSize: FontSize(14),
    color: '#3A2D1350',
  },
  itemView: {
    marginBottom: 20,
    flexDirection: 'row',
  },
  profilePicView: {
    width: wp(60),
  },
  userDetailView: {
    width: wp(185),
  },
  contactView: {
    width: wp(90),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nameText: {
    fontWeight: '800',
    color: '#3A2D13',
    fontSize: FontSize(18),
  },
  imageStyle: {
    width: wp(45),
    height: wp(45),
  },
  nameView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  verifiedImage: {
    width: wp(10),
    height: wp(10),
    marginLeft: 5,
    resizeMode: 'contain',
  },
  eyeImage: {
    width: wp(14),
    height: wp(10),
    resizeMode: 'contain',
  },
  dateTimeView: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateTimeText: {
    fontSize: FontSize(14),
    color: '#3A2D1350',
    marginLeft: 5,
  },
  contactIconBox: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#E5DECE',
  },
  contactIconImage: {
    width: wp(18),
    height: wp(18),
    resizeMode: 'contain',
  },
});
