import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { hp, wp } from "../../../constants/Dimensions";
import { useNavigation } from "@react-navigation/native";
import HeaderButton from "../HeaderButton";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Colors from "../../../constants/Colors";

const TrashButton = (props) => {

  const { buttonColor, headerColor } = props;

  const navigation = useNavigation();

  const onHandle = () => {

  };

  return (
    <HeaderButton
      IconFontFamily={FontAwesome5}
      iconName={'trash'}
      headerColor={headerColor}
      containerStyle={styles.containerStyle}
      onPress={onHandle}
    />
  );
};

export default TrashButton;

const styles = StyleSheet.create({
  containerStyle:{
    marginLeft: wp(0), 
    marginRight: wp(9), 
  }
});


