import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import NumberAndEmailChangeProfileComponent from '../../../../components/ChangePersonalInfo/NumberAndEmailChangeProfileComponent';
import NumberAndEmailComponentScreenText from '../../../../components/ChangePersonalInfo/NumberAndEmailComponentScreenText';
import {useNavigation} from '@react-navigation/native';
import navigator from '../../../../utils/navigator';

const ContractScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      {/*Phone numbr Rect start*/}
      <NumberAndEmailChangeProfileComponent
        title="Telefone Numarasi"
        subtitle="0530 700 00 00 00"
        onPress={() => {
          navigator(navigation, 'ChangePersonalInfoSelectInputNumber')
        }}
      />
      {/*Phone numbr Rect end*/}

      {/*Email Rect start*/}
      <NumberAndEmailChangeProfileComponent
        title="Email"
        subtitle="abc@gmail.com"
        onPress={() => {
          navigator(navigation, 'ChangePersonalInfoEditEmail')
        }}
      />
      {/*Email Rect end*/}
      {/*Text Rect  */}
      <NumberAndEmailComponentScreenText />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ContractScreen;
