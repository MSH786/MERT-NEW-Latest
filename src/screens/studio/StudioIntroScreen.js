import React, {useState, useEffect} from 'react';
import {
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  View,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

//Compoenets
import BlurView from '../../components/studio/BlurView'; //Main Blur View Including Floating Car
import ListOfCars from '../../components/studio/listOfCars'; //List of cars
import ButtonComponent from '../../components/button/ButtonComponent';

//navigator
import navigator from '../../utils/navigator';

//Icons
import {studioCoin} from '../../constants/Icons';
//AppColors
import Colors from '../../constants/Colors';

//HeaderNavigators
import {HeaderCustomOptions} from '../../navigators/NavigationHeaderOptions';

//Dimensions
import {hp, wp} from '../../constants/Dimensions';

//dummyData
import {CarsList} from '../../data/data';

//navigating to PremiumScreen will be added after headerButtons is completed completely.

const StudioIntroScreen = () => {
  const navigation = useNavigation();
  navigation.setOptions(
    HeaderCustomOptions(
      '',
      Colors.primary,
      Colors.white,
      ['Back'],
      ['CoinAdd'],
    ),
  );

  return (
    <>
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <View style={styles.orangeBlock}>
          <BlurView />
        </View>
        <View style={styles.plainBlock}>
          <ListOfCars data={CarsList} />
          <ButtonComponent
            title={'Başla     1'}
            buttonStyle={{flexDirection: 'row'}}
            icon={<Image source={studioCoin} />}
            onPress={() => {
              navigator(navigation, 'StudioTakePhotoScreen');
            }}
          />
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  orangeBlock: {
    width: '100%',
    height: hp(100),
    backgroundColor: Colors.orange,
    paddingLeft: 35,
    paddingRight: 35,
    marginBottom: hp(60),
  },
  plainBlock: {
    flex: 1,
    marginTop: hp(60),
  },
});

export default StudioIntroScreen;
