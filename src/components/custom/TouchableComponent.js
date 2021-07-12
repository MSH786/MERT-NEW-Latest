import React from 'react';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  View,
} from 'react-native';

const TouchableComponent = ({children, style, onPress}) => {
  let Touchable = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    Touchable = TouchableNativeFeedback;
  }

  return (
    <Touchable style={style ? style : []} useForeground onPress={onPress}>
      {children}
    </Touchable>
  );
};

export default TouchableComponent;
