import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';

const HomeMainScreen = props => {
  const changeScreen = (screen, params) => {
    props.navigation.navigate(screen, {params});
  };

  return (
    <>
      <ScrollView>
      <TouchableOpacity
          style={styles.screen}
          onPress={() =>  props.navigation.replace('AuthStack')}>
          <Text>AuthScreens</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.screen}
          onPress={() => changeScreen('TestScreen')}>
          <Text>TestScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.screen}
          onPress={() => changeScreen('HomeScreen')}>
          <Text>HomeScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.screen}
          onPress={() => changeScreen('NotificationsScreen')}>
          <Text>NotificationsScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.screen}
          onPress={() => changeScreen('FiltrationScreen', {selectedTitle: ''})}>
          <Text>FiltrationScreen</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.screen}
          onPress={() => changeScreen('FilteredListingScreen')}>
          <Text>FilteredListingScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.screen}
          onPress={() => changeScreen('BeBuyerFiltrationScreen')}>
          <Text>BeBuyerFiltrationScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.screen}
          onPress={() => changeScreen('BeBuyerListingScreen')}>
          <Text>BeBuyerListingScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.screen}
          onPress={() => changeScreen('EditBeBuyerScreen')}>
          <Text>EditBeBuyerScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.screen}
          onPress={() => changeScreen('FindBuyerScreen', {selectedTitle: ''})}>
          <Text>FindBuyerScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.screen}
          onPress={() => changeScreen('FindBuyerDetailsScreen')}>
          <Text>FindBuyerDetailsScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.screen}
          onPress={() => changeScreen('StudioIntroScreen')}>
          <Text>StudioIntroScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.screen}
          onPress={() => changeScreen('StudioScreen')}>
          <Text>StudioScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.screen}
          onPress={() => changeScreen('StudioTakePhotoScreen')}>
          <Text>StudioTakePhotoScreen</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.screen}
          onPress={() => changeScreen('SelectedBrandsScreen')}>
          <Text>SelectedBrandsScreen</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.screen}
          onPress={() => changeScreen('ChatDetailScreen')}>
          <Text>ChatDetailScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.screen}
          onPress={() => changeScreen('LocationScreen')}>
          <Text>LocationScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.screen}
          onPress={() => changeScreen('WheelScreen')}>
          <Text>WheelScreen</Text>
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

export default HomeMainScreen;
