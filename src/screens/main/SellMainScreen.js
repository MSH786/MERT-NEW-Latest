import React from 'react';
import {ScrollView,StyleSheet, Text,TouchableOpacity,} from 'react-native';

const SellMainScreen = props => {

  const changeScreen = screen => {
    props.navigation.navigate(screen);
  };

  return (
    <>
      <ScrollView>
      
        <TouchableOpacity
          style={styles.screen}
          onPress={() => changeScreen('EditFindBuyerScreen')}>
          <Text>EditFindBuyerScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.screen}
          onPress={() => changeScreen('InspectionReportScreen')}>
          <Text>InspectionReportScreen</Text>
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
          onPress={() => changeScreen('StudioTakePhotoScreen')}>
          <Text>StudioTakePhotoScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.screen}
          onPress={() => changeScreen('StudioScreen')}>
          <Text>StudioScreen</Text>
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

export default SellMainScreen;
