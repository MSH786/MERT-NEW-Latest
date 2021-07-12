import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { wp, hp } from "../../constants/Dimensions";
import  Colors  from "../../constants/Colors";
import { VerticalSeparatorComponent } from "../seperator/VerticalSeparatorComponent";
import TouchableComponent from "../custom/TouchableComponent";
import { FontSize } from "../../constants/Sizes";

const SocialMediaButtonComponent = ({ Icon, title, containerStyles, onPress }) => {
  return (
    <TouchableComponent
      onPress={onPress}
      style={[styles.container, { ...containerStyles }]}>

      <View style={styles.content}>
        <Icon width={wp(20)} height={wp(20)}/>

        <VerticalSeparatorComponent style={styles.separator} />

        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableComponent>
  );
};

export default SocialMediaButtonComponent;

SocialMediaButtonComponent.defaultProps = {
  title: "text",
  icon: "",
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.whiteTransparent,
    width: wp(240),
    height: hp(35),
    justifyContent: "center",
    paddingLeft: wp(11.5),
    marginBottom: hp(8),
    borderRadius: hp(6),
  },
  content: {
    flexDirection: "row",
    alignItems: 'center'
  },
  icon: {
    resizeMode: "center",
    width: wp(25),
    height: wp(25),
  },
  title: {
    marginLeft: wp(12),
    fontSize: FontSize(15),
    fontWeight: "400",
    color: Colors.white,
  },
  separator: {
    marginLeft: wp(10),

  },
});
