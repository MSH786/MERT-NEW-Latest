import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CarTypeListComponent from '../../components/listing/CarTypeListComponent';
import CarBrandModelComponent from '../../components/filtration/CarBrandModelComponent';
import BMWComponent from '../../components/filtration/BMWComponent';
import {useNavigation} from '@react-navigation/native';
import {HeaderCustomOptions} from '../../navigators/NavigationHeaderOptions';
import Colors from '../../constants/Colors';

const EditBeBuyerScreen = () => {

  const navigation = useNavigation();
  navigation.setOptions(
    HeaderCustomOptions('', Colors.white, Colors.darkGray, ['Back'],['Plus']),
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <>
        <View style={{flex: 1, paddingHorizontal: 20, alignItems: 'center'}}>
          {/* BMW Start*/}
          <BMWComponent />
          {/* BMW End*/}
        </View>
      </>
    </ScrollView>
  );
};
const styles = StyleSheet.create({});

export default EditBeBuyerScreen;
