import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import { hp, wp } from "../../../constants/Dimensions";
import  Colors  from "../../../constants/Colors";
import SearchBarComponent from "../../input/SearchBarComponent";
import Fonts from "../../../constants/Fonts";
import { FontSize } from "../../../constants/Sizes";

const HomeHeader = (props) => {

  const { isIcon, placeHolder } = props;

  return (
    <View style={isIcon ? styles.container : styles.containerDizayn}>
      <SearchBarComponent placeHolder={placeHolder} />
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerDizayn: {},
  text: {
    fontSize: FontSize(20),
    fontWeight: "600",
    fontFamily: Fonts.bold,
    textAlign: "center",
    color: Colors.black,
  },
});
