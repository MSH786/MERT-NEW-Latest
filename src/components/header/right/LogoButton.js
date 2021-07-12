import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { hp, wp } from "../../../constants/Dimensions";
import { useNavigation } from "@react-navigation/native";
import * as Icons from '../../../constants/Icons'

const LogoButton = (props) => {

  const { buttonColor, headerColor } = props;

  const navigation = useNavigation();

  const onHandle = () => {

  };

  return (
    <TouchableOpacity onPress={onHandle}>
      <Image source={Icons.headerLogo} style={styles.logo} />
    </TouchableOpacity>
  );
};

export default LogoButton;

const styles = StyleSheet.create({
  logo: {
    width: wp(36),
    height: wp(32),
  }
});


