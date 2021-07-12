import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import InputCodeComponent from '../../../../components/ChangePersonalInfo/InputCodeComponent';
import InputCodeScreenTextComponent from '../../../../components/ChangePersonalInfo/InputCodeScreenTextComponent';
import ButtonComponent from '../../../../components/ChangePersonalInfo/ButtonComponent';
import InputNumberSelect from '../../../../components/ChangePersonalInfo/InputNumberSelect';

const ChangePersonalInfoSelectInputNumber = props => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <InputNumberSelect />
      <ButtonComponent title="Devam Et" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ChangePersonalInfoSelectInputNumber;
