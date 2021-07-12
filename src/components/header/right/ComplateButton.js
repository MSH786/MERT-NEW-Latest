import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { hp, wp } from "../../../constants/Dimensions";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Colors from "../../../constants/Colors";
import TouchableComponent from "../../custom/TouchableComponent";

const ComplateButton = (props) => {

  const { buttonColor, headerColor } = props;

  const navigation = useNavigation();

  const onHandle = () => {

  };

  return (
    <TouchableComponent style={[styles.container, { backgroundColor: Colors.primary }]} onPress={onHandle}>
      <AntDesign size={wp(16)} color={Colors.white} name={'check'} />
    </TouchableComponent>
  );
};

export default ComplateButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightGray,
    height: wp(32),
    width: wp(32),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: hp(7),
    marginRight: wp(9),
  }
});


