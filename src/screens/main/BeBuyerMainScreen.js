import React from 'react';
import {ScrollView,StyleSheet, Text,TouchableOpacity,} from 'react-native';

const BeBuyerMainScreen = props => {

  const changeScreen = screen => {
    props.navigation.navigate(screen);
  };

  return (
    <>
      <ScrollView>
        <TouchableOpacity
          style={styles.screen}
          onPress={() => changeScreen('CarValuationScreen')}>
          <Text>CarValuationScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.screen}
          onPress={() => changeScreen('CarValutationResultScreen')}>
          <Text>CarValutationResultScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.screen}
          onPress={() => changeScreen('FindBuyerScreen')}>
          <Text>FindBuyerScreen</Text>
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

export default BeBuyerMainScreen;
