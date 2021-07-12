import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { hp, wp } from "../../../constants/Dimensions";
import { useNavigation } from "@react-navigation/native";
import HeaderButton from "../HeaderButton";
import AntDesign from "react-native-vector-icons/Feather";
import Colors from "../../../constants/Colors";

const PlusButton = (props) => {

  const { buttonColor, headerColor } = props;

  const navigation = useNavigation();

  const onHandle = () => {

  };

  return (
    <HeaderButton
      IconFontFamily={AntDesign}
      iconName={'plus'}
      headerColor={headerColor}
      containerStyle={styles.containerStyle}
      onPress={onHandle}
    />
  );
};

export default PlusButton;

const styles = StyleSheet.create({
  containerStyle:{
    marginLeft: wp(0), 
    marginRight: wp(9), 
  }
});


