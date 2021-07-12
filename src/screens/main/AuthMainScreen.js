import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';

const AuthMainScreen = props => {
  const changeScreen = (screen, params) => {
    props.navigation.navigate(screen, {params});
  };

  return (
    <>
      <ScrollView>
        <TouchableOpacity
          style={styles.screen}
          onPress={() => changeScreen('LoginScreen')}>
          <Text>LoginScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.screen}
          onPress={() => changeScreen('RegistrationScreen')}>
          <Text>RegistrationScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.screen}
          onPress={() => changeScreen('RegistrationFormMailScreen')}>
          <Text>RegistrationFormMailScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.screen}
          onPress={() => changeScreen('RegistrationFormPhoneScreen')}>
          <Text>RegistrationFormPhoneScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.screen}
          onPress={() =>
            changeScreen('RegistrationFormCorporateMailScreen', {selectedTitle: ''})
          }>
          <Text>RegistrationFormCorporateMailScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.screen}
          onPress={() =>
            changeScreen('RegistrationFormCorporatePhoneScreen', {selectedTitle: ''})
          }>
          <Text>RegistrationFormCorporatePhoneScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.screen}
          onPress={() => changeScreen('MailPhoneConfirmationScreen')}>
          <Text>MailPhoneConfirmationScreen</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    margin: 20,
  },
});

export default AuthMainScreen;
