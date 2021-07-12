import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  StyleSheet,
  Button,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
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
import {login, cleanAuthError} from '../../redux/actions/auth';
import { FontSize } from '../../constants/Sizes';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  navigation.setOptions(HeaderDefaultOptions('', Colors.primary));

  const authLoading = useSelector(state => state.auth.authLoading);
  const authError = useSelector(state => state.auth.authError);
  const user = useSelector(state => state.auth.userCredentials);
  console.log(user, 'user login screen');

  const [text, setText] = useState();

  useEffect(() => {
    if (authError) {
      Alert.alert('Something went wrong!', 'Please try again', [
        {text: 'okay', onPress: () => dispatch(cleanAuthError())},
      ]);
    }
  }, [authError]);

  const loginUser = useCallback(() => {
    dispatch(login(text));
  }, [dispatch, text]);

  if (authLoading) {
    return <ActivityIndicator size={35} color={Colors.mainOrange} />;
  }

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
        <Text style={styles.title}>Hazır alıcılar, mutlu satıcılar.</Text>
      </View>

      <GeneralButtonComponent
        title={'Üye Girişi'}
        style={styles.signInButton}
        textStyle={styles.signInText}
      />

      <View>
        <RegisterInputComponent
          style={styles.input}
          placeholder={'Eposta veya Cep Telefonu'}
          value={text}
          onChangeText={text => setText(text)}
        />

        <ButtonComponent
          title={'Oturum Aç'}
          buttonStyle={styles.button}
          onPress={loginUser}
        />
      </View>

      <LoginTitleSeparatorComponent style={styles.screenSeparator} />

      <View style={styles.loginButtons}>
        <CircleSocialButtonComponent Icon={AppleIcon} />
        <CircleSocialButtonComponent Icon={GoogleIcon} />
        <CircleSocialButtonComponent Icon={FacebookIcon} />
      </View>

      <GeneralButtonComponent
        onPress={() => navigation.navigate('RegistrationScreen')}
        title={'Yeni Hesap Oluşturun'}
        style={styles.signUpButton}
        textStyle={styles.signUpText}
      />

      <LoginFooterCard />
    </View>
  );
};

export default LoginScreen;

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
  
    marginBottom: hp(11),
    marginTop: hp(9),
  },
  button: {},
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
    marginTop: hp(155),
  },
  signUpButton: {
    marginTop: hp(20),
  },
  signInText: {
    color: Colors.white80,
    opacity: 0.83,
    fontSize: FontSize(17),
    fontWeight: '800',
  },
  signUpText: {
    fontSize: FontSize(15),
    fontWeight: '800',
    color: Colors.white80,
    opacity: 0.83,
  },
});
