import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {wp, hp} from '../../constants/Dimensions';
import Colors from '../../constants/Colors';
import {useNavigation} from '@react-navigation/native';
import CountDownComponent from '../../components/countDown/countDownComponent';
import {dataCarValuation} from '../../data/data';
import CarValuationListComponent from '../../components/listing/CarValuationListComponent';
import ButtonComponent from '../../components/button/ButtonComponent';
import {FontSize} from '../../constants/Sizes';
import navigator from '../../utils/navigator';

const CarValuationScreen = props => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <CarValuationListComponent
        data={dataCarValuation}
        containerStyle={styles.carValuationListComponent}
      />

      <CountDownComponent
        value={'55000'}
        unit={'KM'}
        style={styles.countDownKm}
      />

      <ButtonComponent
        onPress={() => {
          navigator(navigation, 'CarValuationResultScreen');
        }}
        title={'Değerini Öğren'}
        buttonStyle={styles.cardButton}
        textStyle={styles.cardText}
      />
    </View>
  );
};

export default CarValuationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
  },
  carValuationListComponent: {
    marginTop: hp(18),
  },
  countDownKm: {
    marginTop: hp(15),
  },
  cardButton: {
    marginTop: hp(21),
    width: wp(219),
    height: hp(44),
  },
  cardText: {
    textAlign: 'center',
    fontSize: FontSize(17),
    fontWeight: '400',
    color: Colors.white,
  },
});
