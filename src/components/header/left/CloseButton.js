import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { hp, wp } from "../../../constants/Dimensions";
import { useNavigation } from "@react-navigation/native";
import HeaderButton from "../HeaderButton";
import AntDesign from "react-native-vector-icons/AntDesign";
import Colors from "../../../constants/Colors";

const CloseButton = (props) => {

  const { buttonColor, headerColor } = props;

  const navigation = useNavigation();

  const onHandle = () => {

  };

  return (
    <HeaderButton
      IconFontFamily={AntDesign}
      iconName={'close'}
      headerColor={headerColor}
      containerStyle={styles.containerStyle}
      onPress={onHandle}
    />
  );
};

export default CloseButton;

const styles = StyleSheet.create({
  containerStyle:{
    height: wp(32),
    width: wp(32),
    marginLeft: wp(9),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: hp(7), 
  }
});


