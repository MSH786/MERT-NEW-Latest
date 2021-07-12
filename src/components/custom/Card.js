import React from 'react';
import {View, StyleSheet} from 'react-native';
import {wp} from '../../constants/Dimensions';
import Shadow from '../../constants/Shadows';


const Card = ({children, style}) => {
  return <View style={{...styles.card, ...style}}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    ...Shadow,
    backgroundColor: 'white',
    borderRadius: wp(7),
  }
});

export default Card;
