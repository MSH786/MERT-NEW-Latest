import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {wp, hp} from '../../constants/Dimensions';
import {FontSize} from '../../constants/Sizes';
import Colors from '../../constants/Colors';
import ButtonComponent from '../../components/button/ButtonComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CarPriceBottomBar = ({
  title,
  price,
  creditView,
  navigateToBuyersScreen,
  onPressCredit,
}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.priceText}>{price}</Text>
      </View>
      {creditView ? (
        <View style={styles.buttonView}>
          <View style={styles.iconView}>
            <Ionicons
              size={wp(16)}
              name={'chatbubble-sharp'}
              style={{color: Colors.white}}
            />
          </View>
          <View style={styles.iconView}>
            <MaterialCommunityIcons
              size={wp(16)}
              name={'phone'}
              style={{color: Colors.white}}
            />
          </View>
          <ButtonComponent
            onPress={onPressCredit}
            title={'ANINDA KREDİ'}
            buttonStyle={{width: wp(128), height: hp(32)}}
          />
        </View>
      ) : (
        <TouchableOpacity onPress={navigateToBuyersScreen}>
          <View style={styles.imageView}>
            <Image
              style={styles.images}
              source={require('../../../assets/images/profileButton.png')}
            />
            <Image
              style={[styles.images, {marginLeft: -30}]}
              source={require('../../../assets/images/profileButton.png')}
            />
            <Image
              style={[styles.images, {marginLeft: -30}]}
              source={require('../../../assets/images/profileButton.png')}
            />
            <View>
              <Image
                style={[styles.images, {marginLeft: -30}]}
                source={require('../../../assets/images/profileButton.png')}
              />
              <View style={styles.shadowView}>
                <Text style={styles.numText}>{'+ 130'}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CarPriceBottomBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: hp(90),
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopColor: '#DEDBD9',
    borderTopWidth: 0.8,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'flex-end',
    paddingBottom: hp(20),
  },
  titleText: {
    fontSize: FontSize(17),
    color: '#9D9689',
    fontWeight: '400',
  },
  priceText: {
    color: '#F5953C',
    fontSize: FontSize(22),
    fontWeight: 'bold',
  },
  images: {
    borderColor: '#FFF',
    borderWidth: 5,
    width: wp(50),
    height: wp(50),
    borderRadius: wp(25),
  },
  imageView: {
    flexDirection: 'row',
  },
  numText: {
    fontSize: FontSize(14),
    color: '#FFFFFF',
  },
  shadowView: {
    position: 'absolute',
    width: wp(50),
    height: wp(50),
    borderRadius: wp(25),
    backgroundColor: '#FFFFFF90',
    marginLeft: -30,
    borderColor: '#FFF',
    borderWidth: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconView: {
    width: hp(32),
    height: hp(32),
    borderRadius: hp(7),
    backgroundColor: Colors.lightGray,
    marginRight: wp(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonView: {
    flexDirection: 'row',
  },
});
