import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import InputCodeComponent from '../../../../components/ChangePersonalInfo/InputCodeComponent';
import InputCodeScreenTextComponent from '../../../../components/ChangePersonalInfo/InputCodeScreenTextComponent';
import ButtonComponent from '../../../../components/ChangePersonalInfo/ButtonComponent';

const ChangePersonalInfoCodeScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      {/*Input type code Component start*/}
      <InputCodeComponent />
      {/*Input type code Component end*/}
      <InputCodeScreenTextComponent />
      <ButtonComponent title="Dogrula" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ChangePersonalInfoCodeScreen;
