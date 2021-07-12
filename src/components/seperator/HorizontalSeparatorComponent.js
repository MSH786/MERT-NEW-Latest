import React from "react";
import { StyleSheet, View } from "react-native";
import { wp, hp } from "../../constants/Dimensions";
import Colors  from "../../constants/Colors";

export const HorizontalSeparatorComponent = ({style}) => {
  return <View style={[styles.container, style]} />;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,0.8)",
    height: 0.5,
    width: wp(118),
  },
});
