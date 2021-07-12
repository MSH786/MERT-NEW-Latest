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
import {FontSize} from '../../constants/Sizes';
import BackButton from '../../components/header/left/BackButton';
import { dataCountries } from '../../data/data';

const RegistrationFormCorporatePhoneScreen = () => {
  const dispatch = useDispatch();

  const navigation = useNavigation();

  navigation.setOptions({headerShown: false});

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Image style={styles.imageBg} source={Images.authBg} />

      <BackButton
        onPress={() => navigation.goBack()}
        style={styles.backButton}
        button={Colors.white}
        headerColor={Colors.primary}
      />

      <View style={styles.contentLogo}>
        <Image style={styles.imageLogo} source={Images.logo} />
        <Text style={styles.title}>Hazır alıcılar, mutlu satıcılar.</Text>
      </View>

      <GeneralButtonComponent
        title={'Kayıt Olun'}
        style={styles.signUpButton}
        textStyle={styles.signUpText}
      />

      <View>
        <RegisterInputComponent style={styles.input} placeholder={'Ad'} />
        <RegisterInputComponent style={styles.input} placeholder={'Soyad'} />
        <RegisterDropDown
          onValueChange={() => {}}
          placeHolder={'Faaliyet Alanınız'}
          style={styles.dropDown}
        />
        <RegisterInputComponent
          style={styles.input}
          placeholder={'Firma Adı'}
        />
        <RegisterInputComponent
          style={styles.input}
          placeholder={'Sabit Telefon'}
        />
        <RegisterDropDown
          onValueChange={() => {}}
          placeHolder={'İl'}
          style={styles.dropDown}
        />
        <RegisterDropDown
          onValueChange={() => {}}
          placeHolder={'İlçe'}
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
        title={'Giriş Yapın'}
        style={styles.signInButton}
        textStyle={styles.signInText}
      />

      <LoginFooterCard />
    </View>
  );
};

export default RegistrationFormCorporatePhoneScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
  },
  imageBg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  contentLogo: {
    top: hp(60),
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
    marginTop: hp(9),
    backgroundColor: Colors.registerButton,
  },
  backButton: {
    position: 'absolute',
    top: hp(60),
    left: wp(22),
  },
  screenSeparator: {
    marginTop: hp(30),
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
    marginTop: hp(64),
    marginBottom: hp(13),
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
});
