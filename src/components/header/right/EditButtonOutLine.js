import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { hp, wp } from "../../../constants/Dimensions";
import { useNavigation } from "@react-navigation/native";
import Feather from "react-native-vector-icons/Feather";
import Colors from "../../../constants/Colors";

const EditButtonOutLine = (props) => {

  const { buttonColor, headerColor } = props;

  const navigation = useNavigation();

  const onHandle = () => {

  };

  return (
    <TouchableOpacity style={[styles.container]} onPress={onHandle}>
      <Feather size={wp(24)} color={Colors.primary} name={'edit'} />
    </TouchableOpacity>
  );
};

export default EditButtonOutLine;

const styles = StyleSheet.create({
  container: {
    height: wp(32),
    width: wp(32),
    marginRight: wp(9),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: hp(7),
    backgroundColor:Colors.whiteTransparent
  }
});


