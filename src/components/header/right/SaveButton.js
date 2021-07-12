import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { hp, wp } from "../../../constants/Dimensions";
import { useNavigation } from "@react-navigation/native";
import HeaderButton from "../HeaderButton";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Colors from "../../../constants/Colors";

const SaveButton = (props) => {

  const { buttonColor, headerColor } = props;

  const navigation = useNavigation();

  const onHandle = () => {

  };

  return (
    <HeaderButton
      IconFontFamily={MaterialIcons}
      iconName={'save-alt'}
      headerColor={headerColor}
      containerStyle={styles.containerStyle}
      onPress={onHandle}
    />
  );
};

export default SaveButton;

const styles = StyleSheet.create({
  containerStyle:{
    marginLeft: wp(0), 
    marginRight: wp(9), 
  }
});


