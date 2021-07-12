import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { wp, hp } from '../../constants/Dimensions'
import TextComponent from '../common/TextComponent';
import Colors from "../../constants/Colors";

const CarCard = ({ selected, setSelected, index, image }) => {
  return (
    <>
      <TouchableOpacity
        onPress={setSelected}
        style={[
          styles.container,
          {
            borderWidth: index === selected ? 3 : 0,
            borderColor: index === selected ? '#F5953C' : null,
          },
        ]}>
        <Image source={image} />
      </TouchableOpacity>
    </>
  );
};

export default CarCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.cardBackground,
    height: hp(10),
    width: wp(20),
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
