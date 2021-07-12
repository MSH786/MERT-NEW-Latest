import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { hp, wp } from "../../../constants/Dimensions";
import { useNavigation } from "@react-navigation/native";
import HeaderButton from "../HeaderButton";
import Ionicons from "react-native-vector-icons/Ionicons";
import Colors from "../../../constants/Colors";

const ChatButton = (props) => {

  const { buttonColor, headerColor } = props;

  const navigation = useNavigation();

  const onHandle = () => {

  };

  return (
    <HeaderButton
      IconFontFamily={Ionicons}
      iconName={'chatbubble'}
      headerColor={headerColor}
      containerStyle={styles.containerStyle}
      onPress={onHandle}
    />
  );
};

export default ChatButton;

const styles = StyleSheet.create({
  containerStyle:{
    marginLeft: wp(0), 
    marginRight: wp(9), 
  }
});


