import React from 'react';
import {View, StatusBar, Image, Text, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {HeaderDefaultOptions} from '../../navigators/NavigationHeaderOptions';
import Colors from '../../constants/Colors';
import * as Images from '../../constants/Images';
import {hp, wp} from '../../constants/Dimensions';
import RegisterInputComponent from '../../components/input/TextInputComponent';
import ButtonComponent from '../../components/button/ButtonComponent';
import LoginTitleSeparatorComponent from '../../components/seperator/LoginTitleSeparatorComponent';
import CircleSocialButtonComponent from '../../components/button/CircleSocialButtonComponent';
import PhoneIcon from '../../../assets/icons/RegisterMethodIcons/PhoneIcon';
import FacebookIcon from '../../../assets/icons/RegisterMethodIcons/FacebookIcon';
import GoogleIcon from '../../../assets/icons/RegisterMethodIcons/GoogleIcon';
import AppleIcon from '../../../assets/icons/RegisterMethodIcons/AppleIcon';
import GeneralButtonComponent from '../../components/button/ButtonComponent';
import LoginFooterCard from '../../components/card/LoginFooterCard';
import RegisterDropDown from '../../components/dropDownSelector/RegisterDropDown';
import PhoneDropDown from '../../components/dropDownSelector/PhoneDropDown';
import * as Icons from '../../constants/Icons';
import { FontSize } from '../../constants/Sizes';
import {dataCountries} from '../../data/data'

const RegistrationFormPhoneScreen = () => {
  const dispatch = useDispatch();

  const navigation = useNavigation();

  navigation.setOptions(HeaderDefaultOptions('', Colors.primary));

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <Image style={styles.imageBg} source={Images.authBg} />

      <View style={styles.contentLogo}>
        <Image style={styles.imageLogo} source={Images.logo} />
        <Text style={styles.title}>Haz??r al??c??lar, mutlu sat??c??lar.</Text>
      </View>

      <GeneralButtonComponent
        title={'Kay??t Olun'}
        style={styles.signUpButton}
        textStyle={styles.signUpText}
      />

      <View>
        <RegisterInputComponent style={styles.input} placeholder={'Ad'} />
        <RegisterInputComponent style={styles.input} placeholder={'Soyad'} />

        <RegisterDropDown
          onValueChange={() => {}}
          placeHolder={'??l'}
          style={styles.dropDown}
        />
        <RegisterDropDown
          onValueChange={() => {}}
          placeHolder={'??l??e'}
          style={styles.dropDown}
        />
        <PhoneDropDown
        data={dataCountries}
          style={styles.phoneDropDown}
          onValueChangeDrop={() => {}}
          onValueChangeText={() => {}}
          icon={Icons.turkeyIcon}
          placeHolder={'Ulke'}
        />
        <ButtonComponent title={'Devam Et'} buttonStyle={styles.button} />
      </View>

      <LoginTitleSeparatorComponent style={styles.screenSeparator} />

      <GeneralButtonComponent
        onPress={() => navigation.navigate('LoginScreen')}
        title={'Giri?? Yap??n'}
        style={styles.signInButton}
        textStyle={styles.signInText}
      />

      <LoginFooterCard />
    </View>
  );
};

export default RegistrationFormPhoneScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
  },
  imageBg: {
    position: 'absolute',
    width: wp(375),
    height: hp(812),
  },
  contentLogo: {
    marginTop: hp(63),
  },
  imagesLogo: {
    width: wp(185),
    height: hp(79),
  },
  title: {
    fontSize: FontSize(17),
    color: Colors.white80,
    fontWeight: '400',
  },
  input: {
    width: wp(311),
    height: hp(35),

    marginBottom: hp(9),
  },
  button: {
    backgroundColor: Colors.registerButton,
  },
  screenSeparator: {
    marginTop: hp(25),
  },
  loginButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp(130),
    marginTop: hp(27),
  },
  signInButton: {
    marginTop: hp(30),
  },
  signInText: {
    color: Colors.white80,
    opacity: 0.83,
    fontSize: FontSize(15),
    fontWeight: '800',
  },
  signUpButton: {
    marginTop: hp(22),
    marginBottom: hp(16),
    fontSize: FontSize(17),
    fontWeight: '800',
    color: Colors.white80,
    opacity: 0.83,
  },
  signUpText: {
    fontSize: FontSize(17),
    fontWeight: '800',
    color: Colors.white80,
    opacity: 0.83,
  },
  dropDown: {
    marginBottom: hp(9),
  },
  phoneDropDown: {
    marginBottom: hp(9),
  },
});
