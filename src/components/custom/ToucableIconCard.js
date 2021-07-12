import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  View,
} from 'react-native';

import {wp} from '../../constants/Dimensions';


const ToucahbleIconCard = ({children, style, onPress, details}) => {
  let Touchable = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    Touchable = TouchableNativeFeedback;
  }

  return (
    <View style={{...styles.touchable, ...style}}>
      <Touchable useForeground onPress={onPress}>
        <View>{children}</View>
      </Touchable>
    </View>
  );
};

const styles = StyleSheet.create({
  touchable: {
    width: wp(32),
    height: wp(32),
    borderRadius: wp(7),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ToucahbleIconCard;
