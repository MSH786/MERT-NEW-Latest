import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import InputScreenModalComponent from '../components/Modals/InputScreenModalComponent';
import LoginScreenModalComponent from '../components/Modals/LoginScreenModalComponent';
import HomeScreenModalComponent from '../components/Modals/HomeScreenModalComponent';
import ProfileScreenModalComponent from '../components/Modals/ProfileScreenModalComponent';
import HomeMainScreenModalComponent from '../components/Modals/HomeMainScreenModalComponent';

const Modals = () => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <InputScreenModalComponent />
      <LoginScreenModalComponent />
      <HomeScreenModalComponent />
      <ProfileScreenModalComponent />
      <HomeMainScreenModalComponent />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Modals;
