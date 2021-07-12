import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const SelectedBrandsScreen = props => {
  const {containerStyle} = props;
  const navigation = useNavigation();
  return <View style={styles.container}></View>;
};
const styles = StyleSheet.create({
  container: {},
});

export default SelectedBrandsScreen;
