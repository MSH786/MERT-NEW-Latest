import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {HeaderCustomOptions} from '../../navigators/NavigationHeaderOptions';
import SearchBarComponent from '../../components/input/SearchBarComponent';
import Colors from '../../constants/Colors';

const LocationScreen = () => {
  const navigation = useNavigation();

  navigation.setOptions(
    HeaderCustomOptions(
      'Konum',
      Colors.white,
      Colors.white,
      ['Back'],
      ['Done'],
    ),
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.SearchBarView}>
          <SearchBarComponent style={{width: '100%', marginLeft: 0}} />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  SearchBarView: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default LocationScreen;
