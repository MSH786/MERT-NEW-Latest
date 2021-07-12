import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import { hp, wp } from "../../../constants/Dimensions";
import  Colors  from "../../../constants/Colors";
import SearchBarComponent from "../../input/SearchBarComponent";
import ProfileButton from "../right/ProfileButton";
import BackButton from "../left/BackButton";
import Fonts from "../../../constants/Fonts";
import { FontSize } from "../../../constants/Sizes";

const MessageDetailsHeader = (props) => {

  const { isIcon, placeHolder } = props;

  return (
    <View style={styles.container }>
      <BackButton 
       {...props}
        headerColor={color} />
      <ProfileButton />
      <ProfileButton />
      <ProfileButton />
    </View>
  );
};

export default MessageDetailsHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
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
