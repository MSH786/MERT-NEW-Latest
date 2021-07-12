import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  StatusBar,
  Image,
} from 'react-native';
import {HeaderCustomOptions} from '../../navigators/NavigationHeaderOptions';
import {useNavigation} from '@react-navigation/native';
//AppColors
import Colors from '../../constants/Colors';
//Images
import {ellipse} from '../../constants/Images';
//Components
import Premium from '../../components/premium/premium';

const PremiumScreen = ({route}) => {
  const navigation = useNavigation();

  navigation.setOptions(
    HeaderCustomOptions(
      '',
      Colors.lightGray,
      Colors.white,
      ['Back'],
      ['CoinAdd'],
    ),
  );
  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <View style={styles.container}>
        <Image
          resizeMode="stretch"
          style={styles.curvedImage}
          source={ellipse}
        />
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          <Premium />
        </ScrollView>
      </View>
    </>
  );

  return <></>;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  curvedImage: {
    width: '100%',
    position: 'absolute',
    top: -70,
  },
});

export default PremiumScreen;
