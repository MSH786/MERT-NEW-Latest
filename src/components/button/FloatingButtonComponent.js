import React from "react";
import { Image, StyleSheet, View, Platform, Text, TouchableOpacity } from "react-native";
import Colors  from "../../constants/Colors";
import GiftIcon from "../../../assets/icons/GiftIcon";
import { wp, hp } from '../../constants/Dimensions';

const FloatingButtonComponent = ({ onPress, containerStyles }) => {
  return (
      <TouchableOpacity style={[styles.container, { ...containerStyles }]} onPress={onPress}>
        <GiftIcon />
      </TouchableOpacity>
  )
}

export default FloatingButtonComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    width: wp(85),
    height: wp(85),
    borderRadius: wp(50),
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "rgba(14, 21, 31, 0.06)",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 2.22,
    elevation: 3,
  },
});
