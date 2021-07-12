import React from 'react';
import {ScrollView,StyleSheet, Text,TouchableOpacity,} from 'react-native';

const ProfileMainScreen = props => {

  const changeScreen = screen => {
    props.navigation.navigate(screen);
  };

  return (
    <>
      <ScrollView>
        <TouchableOpacity
          style={styles.screen}
          onPress={() => changeScreen('ProfileScreen')}>
          <Text>ProfileScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.screen}
          onPress={() => changeScreen('BuyersScreen')}>
          <Text>BuyersScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.screen}
          onPress={() => changeScreen('ChatDetailScreen')}>
          <Text>ChatDetailScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.screen}
          onPress={() => changeScreen('BePopularScreen')}>
          <Text>BePopularScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.screen}
          onPress={() => changeScreen('FindBuyerScreen')}>
          <Text>FindBuyerScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.screen}
          onPress={() => changeScreen('EditFindBuyerScreen')}>
          <Text>EditFindBuyerScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.screen}
          onPress={() => changeScreen('PremiumScreen')}>
          <Text>PremiumScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.screen}
          onPress={() => changeScreen('SettingsScreen')}>
          <Text>SettingsScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.screen}
          onPress={() => changeScreen('NotificationSettingsScreen')}>
          <Text>NotificationSettingsScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.screen}
          onPress={() => changeScreen('PersonalInfoScreen')}>
          <Text>PersonalInfoScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.screen}
          onPress={() => changeScreen('BlockedUsersScreen')}>
          <Text>BlockedUsersScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.screen}
          onPress={() => changeScreen('PrivacyScreen')}>
          <Text>PrivacyScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.screen}
          onPress={() => changeScreen('PrivacyPolicyScreen')}>
          <Text>PrivacyPolicyScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.screen}
          onPress={() => changeScreen('ContractScreen')}>
          <Text>ContractScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.screen}
          onPress={() => changeScreen('ChangePersonalInfoScreen')}>
          <Text>ChangePersonalInfoScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.screen}
          onPress={() => changeScreen('ChangePersonalInfoCodeScreen')}>
          <Text>ChangePersonalInfoCodeScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.screen}
          onPress={() => changeScreen('ChangePersonalInfoSelectInputNumber')}>
          <Text>ChangePersonalInfoSelectInputNumber</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.screen}
          onPress={() => changeScreen('ChangePersonalInfoEditEmail')}>
          <Text>ChangePersonalInfoEditEmail</Text>
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

export default ProfileMainScreen;
