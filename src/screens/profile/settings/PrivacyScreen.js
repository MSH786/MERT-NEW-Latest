import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import PrivacyContentComponent from '../../../components/PrivacyPlusTermsAndConditions/PrivacyContentComponent';
import {wp, hp} from '../../../constants/Dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PrivacyScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <PrivacyContentComponent />
      <View style={styles.BottomRectFixForUpCircleIcon}>
        <TouchableOpacity>
          <View style={styles.circle}>
            <Ionicons size={33} color="#fff" name={'chevron-up'} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  BottomRectFixForUpCircleIcon: {
    height: hp(120),
    width: wp(327),
    paddingHorizontal: wp(18),
    marginBottom: 0,
    position: 'absolute',
    alignItems: 'flex-end',
    justifyContent: 'center',
    bottom: 0,
  },
  circle: {
    width: wp(76),
    height: hp(76),
    backgroundColor: '#E2D9C5',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    borderRadius: wp(70),
  },
});

export default PrivacyScreen;
