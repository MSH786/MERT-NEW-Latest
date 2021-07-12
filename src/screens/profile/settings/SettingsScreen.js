import React, {useLayoutEffect} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import ProfileDisplay from '../../../components/ProfileSetting/ProfileDisplay';
import ProfileSetting from '../../../components/ProfileSetting/ProfileSetting';
import {useNavigation} from '@react-navigation/native';

import navigator from '../../../utils/navigator';

const SettingsScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <>
        <View style={{flex: 1, alignItems: 'center'}}>
          {/* First Profile Photo + Info Rect */}
          <ProfileDisplay />

          {/* Setting Rect */}
          <ProfileSetting
            leftIcon="notifications"
            leftIconSize="12"
            leftIconColor="#fff"
            title="Bildirim Ayarlari"
            rightIcon="chevron-right"
            rightIconSize="20"
            rightIconColor="#3A2D13"
            onPress={() => {
              navigator(navigation, 'NotificationSettingsScreen');
            }}
          />

          {/* Setting Rect */}
          <ProfileSetting
            leftIcon="moon"
            leftIconSize="12"
            leftIconColor="#fff"
            title="Karanlik Mod"
            rightIcon="chevron-right"
            rightIconSize="20"
            rightIconColor="#3A2D13"
          />

          {/* Setting Rect */}
          <ProfileSetting
            leftIcon="key"
            leftIconSize="12"
            leftIconColor="#fff"
            title="Kisesil Bilgiler Ayarlari"
            rightIcon="chevron-right"
            rightIconSize="20"
            rightIconColor="#3A2D13"
            onPress={() => {
              navigator(navigation, 'PersonalInfoScreen');
            }}
          />

          {/* Setting Rect */}
          <ProfileSetting
            leftIcon="alert-circle-outline"
            leftIconSize="12"
            leftIconColor="#fff"
            title="Engellenen Kullanicilar"
            rightIcon="chevron-right"
            rightIconSize="20"
            rightIconColor="#3A2D13"
            onPress={() => {
              navigator(navigation, 'BlockedUsersScreen');
            }}
          />

          {/* Setting Rect */}
          <ProfileSetting
            leftIcon="lock-closed"
            leftIconSize="12"
            leftIconColor="#fff"
            title="Gizlilik"
            rightIcon="chevron-right"
            rightIconSize="20"
            rightIconColor="#3A2D13"
            onPress={() => {
              navigator(navigation, 'PrivacyScreen');
            }}
          />

          {/* Setting Rect */}
          <ProfileSetting
            leftIcon="close-circle"
            leftIconSize="12"
            leftIconColor="#fff"
            title="Yardim"
            rightIcon="chevron-right"
            rightIconSize="20"
            rightIconColor="#3A2D13"
            onPress={() => {
              navigator(navigation, 'Modals');
            }}
          />

          {/* Setting Rect */}
          <ProfileSetting
            leftIcon="bulb"
            leftIconSize="12"
            leftIconColor="#fff"
            title="iletisim"
            rightIcon="chevron-right"
            rightIconSize="20"
            rightIconColor="#3A2D13"
            onPress={() => {
              navigator(navigation, 'ContactScreen');
            }}
          />
        </View>
      </>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default SettingsScreen;
