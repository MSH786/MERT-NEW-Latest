import React from "react";
import { StyleSheet, View } from "react-native";
import { hp } from "../../constants/Dimensions";

export const VerticalSeparatorComponent = (props) => {
  return <View style={[styles.container, props.style]} />;
};

const styles = StyleSheet.create({
  container: {
    width: 0.5,
    height: hp(20),
    backgroundColor: "rgba(255,255,255,0.8)",
  },
});
