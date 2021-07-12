import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Colors from '../../../constants/Colors';
import SearchBarComponent from '../../input/SearchBarComponent';
import {wp, hp} from '../../../constants/Dimensions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {FontSize} from '../../../constants/Sizes';

const ChatBarHeader = ({navigateToCarDetails}) => {
  return (
    <TouchableOpacity
      style={styles.SearchBarView}
      onPress={navigateToCarDetails}>
      <Image
        style={styles.image}
        source={require('../../../../assets/images/dummyCarImages/car.jpg')}
      />
      <View style={styles.middleView}>
        <Text style={styles.title}>BMW 320D XDrive Premium...</Text>
        <Text style={styles.price}>327.000TL</Text>
      </View>
      <View style={styles.rightView}>
        <MaterialIcons
          style={styles.iconFind}
          name={'arrow-forward-ios'}
          size={wp(22)}
          color={Colors.black}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  SearchBarView: {
    width: '100%',
    alignItems: 'center',
    height: hp(75),
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  image: {
    width: '15%',
    height: hp(57),
    borderRadius: hp(5),
  },
  middleView: {
    width: '60%',
  },
  rightView: {
    width: '15%',
    alignItems: 'center',
  },
  title: {
    fontWeight: '500',
    color: Colors.darkGray,
    fontSize: FontSize(17),
  },
  price: {
    fontWeight: '900',
    color: Colors.primary,
    fontSize: FontSize(17),
  },
});

export default ChatBarHeader;
