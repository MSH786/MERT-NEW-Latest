import React, {useState} from 'react';
import {View, FlatList, StyleSheet, ScrollView} from 'react-native';
import {wp, hp} from '../../constants/Dimensions';
import Colors from '../../constants/Colors';
import {useNavigation} from '@react-navigation/native';
//index logic will be fixed.

//Dummy data
import NOTIFICATIONS from '../../data/notifications';

import NotificationCard from '../../components/card/NotificationCard';
import {
  HeaderCustomOptions,
  HeaderDefaultOptions,
} from '../../navigators/NavigationHeaderOptions';

const NotificationsScreen = () => {
  const navigation = useNavigation();

  navigation.setOptions(
    HeaderCustomOptions(
      'Bildirimler',
      Colors.white,
      Colors.darkGray,
      ['Back'],
      ['Clear'],
    ),
  );

  const totalNewItems = NOTIFICATIONS.reduce(
    (total, item) => (item.isNew === true ? total + 1 : total),
    0,
  );

  //console.log(totalNewItems);

  const renderItems = ({item, index}) => {
    return (
      <NotificationCard
        index={index}
        isNew={item.isNew}
        notification={item.notification}
        profilePhoto={item.profileImage}
        lastName={item.lastname}
        firstName={item.firstname}
        id={item.id}
        isLastNewIndex={index === totalNewItems - 1}
      />
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <FlatList
        keyExtractor={item => item.id}
        data={NOTIFICATIONS}
        renderItem={renderItems}
        style={{marginTop: hp(1)}}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default NotificationsScreen;
