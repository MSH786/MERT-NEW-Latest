import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { HorizontalSeparatorComponent } from "./HorizontalSeparatorComponent";
import { wp, hp } from "../../constants/Dimensions";
import  Colors  from "../../constants/Colors";
import { FontSize } from "../../constants/Sizes";

const LoginTitleSeparatorComponent = (props) => {
  return (
    <View style={[styles.container, props.style]}>
      <HorizontalSeparatorComponent />

      <Text style={styles.text}>veya</Text>

      <HorizontalSeparatorComponent />

    </View>
  );
};

export default LoginTitleSeparatorComponent

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginLeft: wp(20),
    marginRight: wp(20),
    color: Colors.white,
    fontSize: FontSize(15),
    fontWeight: "400",
  },
});
