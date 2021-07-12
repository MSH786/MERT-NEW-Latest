import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import {wp, hp} from '../../constants/Dimensions';
import Colors from '../../constants/Colors';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import LoginTitleSeparatorComponent from '../../components/seperator/LoginTitleSeparatorComponent';
import GeneralButtonComponent from '../../components/button/ButtonComponent';
import SocialMediaButtonComponent from '../../components/button/SocialMediaButtonComponent';
import EmailIcon from '../../../assets/icons/RegisterMethodIcons/EmailIcon';
import GoogleIcon from '../../../assets/icons/RegisterMethodIcons/GoogleIcon';
import PhoneIcon from '../../../assets/icons/RegisterMethodIcons/PhoneIcon';
import AppleIcon from '../../../assets/icons/RegisterMethodIcons/AppleIcon';
import FacebookIcon from '../../../assets/icons/RegisterMethodIcons/FacebookIcon';
import {HeaderDefaultOptions} from '../../navigators/NavigationHeaderOptions';
import Fonts from '../../constants/Fonts';
import LoginFooterCard from '../../components/card/LoginFooterCard';
import { FontSize } from '../../constants/Sizes';

const RegistrationScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  navigation.setOptions(HeaderDefaultOptions('', Colors.primary));

  const redirectScreen = screenName => {
    navigation.navigate(screenName);
  };

  return (
    <>
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />

        <Image
          style={styles.imageBg}
          source={require('../../../assets/images/authBackgound.png')}
        />

        <View style={styles.contentLogo}>
          <Image
            style={styles.imageLogo}
            source={require('../../../assets/images/logoWhite.png')}
          />
          <Text style={styles.title}>Hazır alıcılar, mutlu satıcılar.</Text>
        </View>

        <View style={styles.contentRegisterButtons}>
          <SocialMediaButtonComponent
            onPress={() => redirectScreen('RegistrationFormScreen')}
            Icon={PhoneIcon}
            title={'Telefon ile Kayıt Olun'}
          />
          <SocialMediaButtonComponent
            Icon={EmailIcon}
            title={'Eposta ile Kayıt Olun'}
          />
          <SocialMediaButtonComponent
            Icon={GoogleIcon}
            title={'Google ile Kayıt Olun'}
          />
          <SocialMediaButtonComponent
            Icon={AppleIcon}
            title={'Apple ile Kayıt Olun'}
          />
          <SocialMediaButtonComponent
            Icon={FacebookIcon}
            title={'Facebook ile Kayıt Olun'}
          />
        </View>

        <LoginTitleSeparatorComponent style={styles.screenSeparator} />

        <GeneralButtonComponent
          textStyle={styles.signInText}
          title={'Giriş Yapın'}
          style={styles.signInButton}
        />

        <LoginFooterCard />
      </View>
    </>
  );
};

export default RegistrationScreen;

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
    color: Colors.white,
    fontWeight: '400',
  },
  contentRegisterButtons: {
    alignItems: 'center',
    marginTop: hp(125),
  },
  loginButtons: {
    marginTop: hp(125),
  },
  screenSeparator: {
    marginTop: hp(21),
  },
  signInButton: {
    marginTop: hp(21),
  },
  contractDescription: {
    marginTop: hp(16),
  },
  signInText: {
    color: Colors.white80,
    opacity: 0.83,
    fontSize: FontSize(17),
    fontWeight: '800',
  },
});
