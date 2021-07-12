import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import BlockedUserComponent from '../../../components/ProfileSetting/BlockedUserComponent';

const BlockedUsersScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      {/* One Component */}
      <BlockedUserComponent title="My ttke" rightTitle="riught text" />
      {/* One Component */}
      <BlockedUserComponent title="My ttke" rightTitle="riught text" />
      <BlockedUserComponent title="My ttke" rightTitle="riught text" />
      <BlockedUserComponent title="My ttke" rightTitle="riught text" />
      <BlockedUserComponent title="My ttke" rightTitle="riught text" />
      <BlockedUserComponent title="My ttke" rightTitle="riught text" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default BlockedUsersScreen;
