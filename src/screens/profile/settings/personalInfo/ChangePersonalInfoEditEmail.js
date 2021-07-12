import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ChangePersonalInfoCodeScreen from './ChangePersonalInfoCodeScreen';
import EmailEditComponent from '../../../../components/ChangePersonalInfo/EmailEditComponent';

const ChangePersonalInfoEditEmail = () => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <EmailEditComponent />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ChangePersonalInfoEditEmail;
